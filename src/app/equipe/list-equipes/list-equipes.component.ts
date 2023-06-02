import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Equipe } from 'src/app/service/model/equipe';
import { DetailEquipeService } from 'src/app/service/detail-equipe.service';
import { EquipeService } from 'src/app/service/equipe.service';
import globals from 'src/app/global';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {

  listequipes: Equipe[]
  nomEquipe : string;

  constructor( private equipeService:EquipeService, private dS: DetailEquipeService, private HttpClient:HttpClient) {
  }

  customSearchFn( nomEquipe) {
    return nomEquipe.filter(o => { o.nomEquipe.toLowerCase().startsWith(this.nomEquipe.toLowerCase())})
}

  ngOnInit(): void {


    this.equipeService.getEquipe().subscribe(data=>{

      this.listequipes=JSON.parse(JSON.stringify(data))
      globals.listequipes = this.listequipes;
    });


  }

  delete(e: Equipe) {
    let i = this.listequipes.indexOf(e);
    this.equipeService.deleteEquipe(e.idEquipe).subscribe(
      ()=>this.listequipes.splice(i, 1))
  }

}
