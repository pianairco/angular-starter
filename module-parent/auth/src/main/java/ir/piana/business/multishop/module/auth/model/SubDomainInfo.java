package ir.piana.business.multishop.module.auth.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SubDomainInfo {
    private String tenant;
    private String accessToken;
    private String loginType;
    private LoginInfo loginInfo;
    private Object sessionCaptcha;
}
