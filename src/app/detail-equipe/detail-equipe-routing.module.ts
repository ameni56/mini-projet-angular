import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailEquipeComponent } from './add-detail-equipe/add-detail-equipe.component';
import { DetailEquipeComponent } from './detail-equipe.component';
import { ListDetailEquipesComponent } from './list-detail-equipes/list-detail-equipes.component';

const routes: Routes = [{ path: '', component: DetailEquipeComponent, children:[
{ path:'listdetail', component: ListDetailEquipesComponent},
{ path:'adddetail', component: AddDetailEquipeComponent},
{path:'updatedetail/:id', component: AddDetailEquipeComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEquipeRoutingModule { }
