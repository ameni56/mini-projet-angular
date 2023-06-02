import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementsComponent } from './departements.component';
import { FormDepartementComponent } from './form-departement/form-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';

const routes: Routes = [{ path: '', component: DepartementsComponent,children:[
  {path:'listDepart',component:ListDepartementComponent},
  {path:'addDepart',component:FormDepartementComponent},
  {path:'updateDepart/:idDepart',component:UpdateDepartementComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementsRoutingModule { }
