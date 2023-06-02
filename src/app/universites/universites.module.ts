import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgForm } from '@angular/forms';
import { UniversitesRoutingModule } from './universites-routing.module';
import { UniversitesComponent } from './universites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteService } from '../service/universite.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';


import { DetailUniversiteComponent } from './detail-universite/detail-universite.component';


@NgModule({
  declarations: [
    UniversitesComponent,
    FormUniversiteComponent,
    ListUniversiteComponent,
    DetailUniversiteComponent
   
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    UniversitesRoutingModule,
    ReactiveFormsModule,
    //NgForm,
    RouterModule

  ],
  providers:[
    UniversiteService
  ],
})
export class UniversitesModule { }
