import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from 'src/app/service/universite.service';
import{Universite} from "../../service/model/universite"

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css'],
  
})
export class ListUniversiteComponent implements OnInit {

public listuniversites: any;
public deleteUniversite: Universite;
public editUniversite:Universite;
public nombreDepartment:Universite;
public findUniversiteByDate:Universite;
data: any;
nomUni:string;
DateAjout:Date;

public count: number;
  constructor( private universiteService:UniversiteService,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    
    /*this.universiteService.getAllUniversite().subscribe(data=>{
      
      this.listuniversites=JSON.parse(JSON.stringify(data));
      console.log(this.listuniversites);
   
  }
 )*/
    this.getAllUniversite();
    this.findUniversiteByNomUni(this.nomUni);
}

public getAllUniversite(): void {
  this.universiteService.getAllUniversite().subscribe(data=>{
      
    this.listuniversites=JSON.parse(JSON.stringify(data));
    console.log(this.listuniversites);
 
}


  )
}
/*public findUniversiteByNomUni(nomUni:string): void {
  this.universiteService.findUniversiteByNomUni(nomUni).subscribe(data=>{
      
    this.listuniversites=JSON.parse(JSON.stringify(data));
    console.log(this.listuniversites);
 
}
  )
}*/
public findUniversiteByNomUni(nomUni:string): void {
  const results: Universite[] = [];
  this.universiteService.findUniversiteByNomUni(nomUni).subscribe(
    (response: Universite) => {
      console.log(response);
      this.universiteService.getAllUniversite();
      //console.log(this.listuniversites);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    
    }
  );
  

  results.push(this.listuniversites);
  //this.listuniversites;
}



public onNombreDepartment(id:number): void {
 
 this.universiteService.nombreDepartment(id).subscribe(
    (response: void) => {
      alert(response);
      this.universiteService.getAllUniversite();
      //console.log(this.listuniversites);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    
    }
  );


 
 
}
public onAddUniversite(addForm: NgForm): void {
  //document.getElementById('add-universite-form').click();
  this.universiteService.addUniversite(addForm.value).subscribe(
    (response: Universite) => {
      console.log(response);
      this.universiteService.getAllUniversite();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}
public onDeleteUniversite(id: number): void {
  this.universiteService.deleteUniversite(id).subscribe(
    (response: void) => {
      console.log(response);
      this.universiteService.getAllUniversite();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
public onUpdateUniversite(universite: Universite): void {
  this.universiteService.updateUniversite(universite).subscribe(
    (response: Universite) => {
      console.log(response);
      this.universiteService.getAllUniversite();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

/*onDeleteUniversite(id:string){
  this.universiteService.deleteUniversite(id)
  .subscribe(universite=>{
   // this.getsoftBooks();
  })
}*/


public onOpenModal(universite: Universite, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addUniversiteModal');
  }
  if (mode === 'edit') {
    this.editUniversite = universite;
    button.setAttribute('data-target', '#updateUniversiteModal');
  }
  if (mode === 'delete') {
    this.deleteUniversite = universite;
    button.setAttribute('data-target', '#deleteUniversiteModal');
  }
 
  container!.appendChild(button);
  button.click();
}



}
