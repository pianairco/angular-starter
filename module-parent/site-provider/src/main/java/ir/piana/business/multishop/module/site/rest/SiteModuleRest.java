package ir.piana.business.multishop.module.site.rest;

import ir.piana.business.multishop.common.data.entity.SiteEntity;
import ir.piana.business.multishop.common.data.repository.SiteRepository;
import ir.piana.business.multishop.common.model.ResponseModel;
import ir.piana.business.multishop.common.util.CommonUtils;
import ir.piana.business.multishop.module.auth.model.UserModel;
import ir.piana.business.multishop.module.site.service.BayaCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/modules/site")
public class SiteModuleRest {

    @Autowired
    private SiteRepository repository;

//    @Autowired
//    private BayaCategoryService bayaCategoryService;

    @Transactional
    @GetMapping("all-sites")
    public ResponseEntity<ResponseModel> allSites() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserModel userModel = (UserModel) authentication.getPrincipal();

        List<SiteEntity> all = repository.findAll();
        if(CommonUtils.isNull(all)) {
            return ResponseEntity.ok(
                    ResponseModel.builder().code(1)
                            .data(new ArrayList<>())
                            .build());
        }
        return ResponseEntity.ok(ResponseModel.builder().code(0).data(all).build());
    }

    @Transactional
    @GetMapping("by-category")
    public ResponseEntity<ResponseModel> allSitesByCategory(@RequestParam("category-id") long categoryId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserModel userModel = (UserModel) authentication.getPrincipal();

        List<SiteEntity> all = repository.findAllByCategoryId(categoryId);
        if(CommonUtils.isNull(all)) {
            return ResponseEntity.ok(
                    ResponseModel.builder().code(1)
                            .data(new ArrayList<>())
                            .build());
        }
        return ResponseEntity.ok(ResponseModel.builder().code(0).data(all).build());
    }
}
