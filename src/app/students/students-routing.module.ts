import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeaffectationComponent } from './equipeaffectation/equipeaffectation.component';
import { FormulaireStudentComponent } from './formulaire-student/formulaire-student.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';


import { StudentsComponent } from './students.component';
import { UpdateformComponent } from './updateform/updateform.component';

const routes: Routes = [{ path: '', component: StudentsComponent,children:[
{path:'register',component:FormulaireStudentComponent},
{path:'listStudent',component:ShowstudentsComponent},
{path:'updateStudent/:idetudiant',component:UpdateformComponent},
{path:'affecterequipe',component:EquipeaffectationComponent}
] }];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
