package ir.piana.business.multishop.zarinpalclient.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VerifyResponseModel {
    private VerifyResponseDataModel data;
    private List<String> errors;
}
