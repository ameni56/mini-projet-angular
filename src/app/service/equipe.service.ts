import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from './model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  data:any
  constructor(private HttpClient:HttpClient) { }
  getEquipe(){
    return this.HttpClient.get("http://localhost:8081/getequip");
  }
  addEquipe(e: Equipe){
    return this.HttpClient.post("http://localhost:8081/addequipe", e);
  }
  deleteEquipe(id:number){
    return this.HttpClient.delete("http://localhost:8081/deleteequipe/"+id)
  }
  updateEquipe(e:Equipe){
    return this.HttpClient.put("http://localhost:8081/updateequipe/"+e.idEquipe,e)
  }
  getEquipeById(id:number){
    return this.HttpClient.get("http://localhost:8081/getuneequipe/"+id)
  }

}
