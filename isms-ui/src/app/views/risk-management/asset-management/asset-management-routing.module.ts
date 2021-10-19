import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetManagementComponent } from './asset-management.component';
import {ConsequenceParametersComponent} from "./settings/consequence-parameters/consequence-parameters.component";
import {ModalParameterSelectorComponent} from "./settings/parameters-selector-dialog/parameters-selector-dialog.component";
import {ConsequenceParametersTypeComponent} from "./settings/consequence-parameters-type/consequence-parameters-type.component";

const routes: Routes = [
  { path: '', component: AssetManagementComponent, children: [
      { path: 'settings', children: [
          { path: 'consequence-parameters', component: ConsequenceParametersComponent, children:[
              { path: 'values/:parameterId', component: ConsequenceParametersTypeComponent, children: [
                  { path: 'select/:parameterId/:parameterTypeId', component: ModalParameterSelectorComponent }
                ]
              },
            ]
          },
          { path: 'asset-grouped', component: ConsequenceParametersComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }