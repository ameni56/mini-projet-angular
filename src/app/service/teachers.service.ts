import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teachers } from './model/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

teachers:[]
  data:any
  constructor(private httpClient:HttpClient) { }
  getenseignant(){
    return this.httpClient.get("http://localhost:8081/getens");
      //  console.log(this.students);
         
      
  }
  addenseignant(teacher:any)
  {
    return this.httpClient.post("http://localhost:8081/addens",teacher);
  }
  deletstudent(id:number)
  {
    return this.httpClient.delete("http://localhost:8081/deleteens/"+id);
  }
  update(id:number,teacher:Teachers){return this.httpClient.put("http://localhost:8081/updateens/"+id,teacher)}
  




}
