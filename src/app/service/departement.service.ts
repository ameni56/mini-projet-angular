import { Injectable } from '@angular/core';
import { Departement } from 'src/app/service/model/departement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

 /* public all:Departement[]=[
    {id:1,
     nomDepart:"Info"
    },
    {id:2,
    nomDepart:"Meca"
    },
    {id:3,
      nomDepart:"Prepa"
    }

    ];*/

  data:any
  constructor(private HttpClient:HttpClient) { }

  getdetpart(){
    return this.HttpClient.get("http://localhost:8081/getdep");
      //console.log(this.departement);
  }
  adddetpart(departement:any)
  {
    return this.HttpClient.post("http://localhost:8081/adddep",departement);
  }

  getDepartById(id:number){
    return this.HttpClient.get("http://localhost:8081/getonedep/"+id)
  }

  deletedetpart(id:number)
  {
    return this.HttpClient.delete("http://localhost:8081/deletedep/"+id);
  }
  updatedetpart(id:number,departement:Departement){
    return this.HttpClient.put("http://localhost:8081/updatedep/"+id,departement)
  }


}
