import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { DetailEquipeComponent } from './detail-equipe.component';
import { ListDetailEquipesComponent } from '../detail-equipe/list-detail-equipes/list-detail-equipes.component';
import { AddDetailEquipeComponent } from './add-detail-equipe/add-detail-equipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    DetailEquipeComponent,
    ListDetailEquipesComponent,
    AddDetailEquipeComponent
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule,
    MatFormFieldModule,MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class DetailEquipeModule { }
