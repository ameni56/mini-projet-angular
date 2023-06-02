import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartementsRoutingModule } from './departements-routing.module';
import { DepartementsComponent } from './departements.component';
import { FormDepartementComponent } from './form-departement/form-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartementService } from '../service/departement.service';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';


@NgModule({
  declarations: [
    DepartementsComponent,
    FormDepartementComponent,
    ListDepartementComponent,
    UpdateDepartementComponent,
  ],
  imports: [
    CommonModule,
    DepartementsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    DepartementService
  ]
})
export class DepartementsModule { }
