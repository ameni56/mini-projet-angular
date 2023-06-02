import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { EquipeRoutingModule } from './equipe-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EquipeComponent } from './equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';






@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipesComponent,
    AddEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatExpansionModule
    
  ]
})
export class EquipeModule { }
