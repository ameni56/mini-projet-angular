import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departement } from 'src/app/service/model/departement';
import { Universite } from 'src/app/service/model/universite';
import { DepartementService } from 'src/app/service/departement.service';
import { UniversiteService } from 'src/app/service/universite.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-detail-universite',
  templateUrl: './detail-universite.component.html',
  styleUrls: ['./detail-universite.component.css']
})
export class DetailUniversiteComponent implements OnInit {
  public listuniversites: any;

  retrieveDepartementsByNomUni:Universite;
  maxid:Universite;
  ajouterEtAffecterlisteDepart:Universite;
  universite:Universite;
  public findUniversiteByDate:Universite;
  public listdepartement:any;
  departement:Departement;

data: any;
DateAjout:Date;

  constructor(private universiteService:UniversiteService,private HttpClient:HttpClient,private departementService:DepartementService) { }

  ngOnInit(): void {
    this.getAllUniversite();
   
}
public getAllUniversite(): void {
  this.universiteService.getAllUniversite().subscribe(data=>{
      
    this.listuniversites=JSON.parse(JSON.stringify(data));
    console.log(this.listuniversites);
 
}



  )
  this.departementService.getdetpart().subscribe(
    data=>
    {
      this.listdepartement=JSON.parse(JSON.stringify(data));
  
    }
  )
    
    
    
}

public onajouterEtAffecterlisteDepart(addForm: NgForm,id:number): void {
  //document.getElementById('add-universite-form').click();
  this.universiteService.ajouterEtAffecterlisteDepart(addForm.value,id).subscribe(
    (response: Universite) => {
      console.log(response);
      this.universiteService.getAllUniversite();
      alert(this.departementService.getdetpart());
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}
public onfindUniversiteByDate(DateAjout:Date): void {
  const results: Universite[] = [];
  this.universiteService.findUniversiteByDate(DateAjout).subscribe(
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
public onmaxid(): void {
  const results: Universite[] = [];
  this.universiteService.maxid().subscribe(
    (response: Universite) => {
      alert(response);
      this.universiteService.getAllUniversite();
      //console.log(this.listuniversites);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    
    }
  );
  }
  public onretrieveDepartementsByNomUni(nomUni:string): void {
    const results: Universite[] = [];
    this.universiteService.retrieveDepartementsByNomUni(nomUni).subscribe(
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

}
