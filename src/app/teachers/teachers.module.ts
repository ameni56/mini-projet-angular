import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { ShowteachersComponent } from './showteachers/showteachers.component';
import { FormulaireTeachersComponent } from './formulaire-teachers/formulaire-teachers.component';
import { UpdateformmComponent } from './updateformm/updateformm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    TeachersComponent,
    ShowteachersComponent,
    FormulaireTeachersComponent,
    UpdateformmComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,FormsModule,ReactiveFormsModule,NgxPaginationModule
  ]
})
export class TeachersModule { }
