import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/service/model/departement';
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-form-departement',
  templateUrl: './form-departement.component.html',
  styleUrls: ['./form-departement.component.css']
})
export class FormDepartementComponent implements OnInit {
departement:Departement;
public action: string;

  constructor(private departementService:DepartementService,private route: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.departement=new Departement();
    /*let id=this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action='UPDATE'
      this.departementService.getDepartById(id).subscribe(
        (data:Departement)=>{this.departement=data}
      )
    }else{
      this.action='ADD NEW'
      this.departement=new DE()

    }*/
  }

  saveDepartement(f:NgForm):void
  { this.departementService.adddetpart(f.value).subscribe(
   (res)=>{
    console.log(res);
    this.departementService.getdetpart();
    f.reset();
   },
   (error:HttpErrorResponse)=>{alert(error.message);
  f.reset();}
  );
  }
}
