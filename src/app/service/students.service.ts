import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:[]
  data:any
  constructor(private HttpClient:HttpClient) { }
 getstudent(){
 
       
  return this.HttpClient.get("http://localhost:8081/getetudiant");
    
    
}
addstudent(etudiant:any)
{
  return this.HttpClient.post("http://localhost:8081/addetudiant",etudiant);
}
deletstudent(id:number)
{
  return this.HttpClient.delete("http://localhost:8081/deleteEtudiant/"+id);
}
update(id:number,etudiant:Student){return this.HttpClient.put("http://localhost:8081/updateetudiant/"+id,etudiant)}


listeequipe()
{
  return this.HttpClient.get("http://localhost:8081/getequipe");
}
affecter(ide:number,idequipe:number,etudiant:any)
{
  return this.HttpClient.put("http://localhost:8081/affecter_equipe_etudiant/"+ide+"/"+idequipe,etudiant)

}
affichageequipeetudiant(ide:number)
{
  return this.HttpClient.get("http://localhost:8081/getetud/"+ide)


}
sms(etudiant:Student)
{
  return this.HttpClient.post("http://localhost:8081/sendsms",etudiant)
}
}
