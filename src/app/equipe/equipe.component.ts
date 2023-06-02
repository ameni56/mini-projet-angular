import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Niveau } from '../service/model/niveau.enum';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
  
})
export class EquipeComponent implements OnInit {

  ngOnInit() {
  }

  public niveauEnum = Niveau;

  constructor() {

   }

   


}
