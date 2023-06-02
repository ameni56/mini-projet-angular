import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../service/model/universite';


@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  universites:[]
  data:any
  constructor(private HttpClient:HttpClient) { }
 getAllUniversite(): Observable<Universite> {{
  const universiteUrl='http://localhost:8081/getAllUniversite';
  return this.HttpClient.get<Universite>(universiteUrl);
    //  console.log(this.students);
       
    
}}

addUniversite(universite:Universite): Observable<Universite>{
  const universiteUrl = 'http://localhost:8081/addUniversite';

  return this.HttpClient.post<Universite>(universiteUrl, universite); // return an observable
}

public updateUniversite(universite:Universite): Observable<Universite> {
  const universiteUrl = 'http://localhost:8081/updateUniversite';
  return this.HttpClient.put<Universite>(universiteUrl, universite);
}

public deleteUniversite(id: number): Observable<void> {
  const universiteUrl = 'http://localhost:8081/deleteUniversite';
  
  return this.HttpClient.delete<void>(universiteUrl+"/"+id);
}

public getUniversiteByid(id:number):Observable<Universite>{
  const universiteUrl = 'http://localhost:8081/getUniversiteById';
  return this.HttpClient.get<Universite>(universiteUrl+"/"+id)
}

public findUniversiteByNomUni(nom:string):Observable<Universite>{
  const universiteUrl = 'http://localhost:8081/findUniversiteByNomUni';
  return this.HttpClient.get<Universite>(universiteUrl+"/"+nom)
}

public nombreDepartment(id: number):Observable<void>{
  const universiteUrl = 'http://localhost:8081/nombreDepartment';
  return this.HttpClient.get<void>(universiteUrl+"/"+id)
}

public findUniversiteByDate(DateAjout:Date):Observable<Universite>{
  const universiteUrl = 'http://localhost:8081/findUniversiteByDate';
  return this.HttpClient.get<Universite>(universiteUrl+"/"+DateAjout)
}

public retrieveDepartementsByNomUni(nom:string):Observable<Universite>{
  const universiteUrl = 'http://localhost:8081/retrieveDepartementsByNomUni';
  return this.HttpClient.get<Universite>(universiteUrl+"/"+nom)
}

public maxid():Observable<Universite>{
  const universiteUrl = 'http://localhost:8081/maxid';
  return this.HttpClient.get<Universite>(universiteUrl)
}

public ajouterEtAffecterlisteDepart(universite:Universite,id:number): Observable<Universite>{
  const universiteUrl = 'http://localhost:8081/ajouterEtAffecterlisteDepart';

  return this.HttpClient.post<Universite>(universiteUrl+"/"+id,universite); // return an observable
}


/*deleteUniversite (id:String):Observable<number>{
  let httpheaders=new HttpHeaders()
  .set('Content-type','application/Json');
  let options={
    headers:httpheaders
  };
  const universiteUrl = 'http://localhost:8081/deleteUniversite';
  return this.HttpClient.delete<number>( universiteUrl+"/"+id);
}*/
}
