import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detailEquipe } from './model/detailEquipe';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {
  data:any
  constructor(private HttpClient:HttpClient) { }
  getDetailEquipe(){
    return this.HttpClient.get("http://localhost:8081/getdetailequipe");
  }
  addDetailEquipe(d: detailEquipe){
    return this.HttpClient.post("http://localhost:8081/adddetailequipe", d);
  }
  deleteDetailEquipe(id:number){
    return this.HttpClient.delete("http://localhost:8081/deletedetailequipe/"+id)
  }
  updateDetailEquipe(d:detailEquipe){
    return this.HttpClient.put("http://localhost:8081/updatedetailequipe/"+d.idDetailEquipe,d)
  }
  getDetailEquipeById(id:number){
    return this.HttpClient.get("http://localhost:8081/getundetail/"+id)
  }
}
