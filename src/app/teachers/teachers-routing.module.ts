import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireTeachersComponent } from './formulaire-teachers/formulaire-teachers.component';
import { ShowteachersComponent } from './showteachers/showteachers.component';
import { TeachersComponent } from './teachers.component';
import { UpdateformmComponent } from './updateformm/updateformm.component';

const routes: Routes = [{ path: '', component: TeachersComponent },
{

  path:'showteachers',component:ShowteachersComponent
},
{
  path:'addteacher',component:FormulaireTeachersComponent
},{

  path:'updateteacher/:idenseignant',component:UpdateformmComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
