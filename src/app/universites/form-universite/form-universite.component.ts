import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/service/model/universite';
import { UniversiteService } from 'src/app/service/universite.service';


@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.css']
})
export class FormUniversiteComponent implements OnInit {
public universite:Universite[];
currentRate = 0;
public action:string;

  constructor(private universiteService:UniversiteService,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.action='Update';
   
  }
  public onAddUniversite(addForm: NgForm): void {
    //document.getElementById('add-employee-form').click();
    this.universiteService.addUniversite(addForm.value).subscribe(
      (response: Universite) => {
        console.log(response);
        //this.universiteService.getAllUniversite();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(universite:Universite): void {
    this.universiteService.updateUniversite(universite).subscribe(
      (response: Universite) => {
        console.log(response);
       // this.getAllUniversite();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  


}
