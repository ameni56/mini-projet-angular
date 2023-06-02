import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUniversiteComponent } from './detail-universite/detail-universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversitesComponent } from './universites.component';

const routes: Routes = [{ path: '', component: UniversitesComponent,children:[
  {path:'list', component: ListUniversiteComponent},
  {path:'new', component: FormUniversiteComponent},
  {path:'detail', component: DetailUniversiteComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversitesRoutingModule { }
