import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/service/model/departement';
import { DepartementService } from 'src/app/service/departement.service';
@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
public list: any
departement:Departement
  constructor(private DepartementService:DepartementService, private HttpClient:HttpClient,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.DepartementService.getdetpart().subscribe(
      data=>{
        this.list=JSON.parse(JSON.stringify(data))
      }
    )
  }

  public delete(departement:Departement)
  {
    let i = this.list.indexOf(departement);
    //console.log(departement);
    this.DepartementService.deletedetpart(departement.idDepart).subscribe(
      ()=>this.list.splice(i,1)
    )
  }
  /*public update(departement:Departement){
    this.DepartementService.updatedetpart(this.router.snapshot.params['idDepart'],departement).subscribe(
      res=>{

        console.log(this.router.snapshot.params['idDpart']);
        console.log(res);

      }
    )
  }*/


}
