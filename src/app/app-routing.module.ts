import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebSocketComponent } from './chat/web-socket/web-socket.component';

const routes: Routes = [{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
{ path: 'equipe', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) },
{ path: 'detailEquipe', loadChildren: () => import('./detail-equipe/detail-equipe.module').then(m => m.DetailEquipeModule) },
{path:'chat/:id', component: WebSocketComponent},
{ path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) },
{ path: 'contrat', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule)},
{ path: 'departements', loadChildren: () => import('./departements/departements.module').then(m => m.DepartementsModule) },
{ path: 'universites', loadChildren: () => import('./universites/universites.module').then(m => m.UniversitesModule) }
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
