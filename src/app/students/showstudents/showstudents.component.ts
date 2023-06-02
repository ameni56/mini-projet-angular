import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Student } from 'src/app/service/model/student';
import { StudentsService } from 'src/app/service/students.service';


@Component({
  selector: 'app-showstudents',
  templateUrl: './showstudents.component.html',
  styleUrls: ['./showstudents.component.css']
})
export class ShowstudentsComponent implements OnInit {
  
  liststudents:any
  data:any
  affectation:boolean
  name:any
  listeequipe:any
   idetud:number
  idetudiant:any
  etudiant:Student
  listeequipeetudiant:any

  constructor(private studentservice:StudentsService,private HttpClient:HttpClient) {
   this.affectation=true
  
   }
  
   ngOnInit(): void {
   
  this.studentservice.getstudent().subscribe(data=>{
   
    this.liststudents=JSON.parse(JSON.stringify(data));
    
this.studentservice.listeequipe().subscribe(
  dataa=>
  {
    this.listeequipe=JSON.parse(JSON.stringify(dataa));

  }
)
  
  }

  )
  
  }
  public delete(student:Student)
  {
    let i = this.liststudents.indexOf(student);
    console.log(student);
    this.studentservice.deletstudent(student.idEtudiant).subscribe(
      ()=>this.liststudents.splice(i,1)
    )
  }
  ngaffecetation()
  {
    this.affectation=false;

  }
 
  affecteretudiant(udequipe:number,idetud:number,etudiant:any)
  {
    console.log(udequipe,idetud)
    this.studentservice.affecter(udequipe,idetud,etudiant).subscribe(
      res=>{
       
        console.log(res);
        
      
      }
   ) }

   sms(etudiant:Student)
   {
    this.studentservice.sms(etudiant).subscribe(
      res=>{
       
        console.log(res);
        
      }
    )

   }
   affiche(Input:number)
  {
    this.idetudiant=Input
    this.studentservice.affichageequipeetudiant(Input).subscribe(
      dataaa=>
      {
        console.log(Input)
      
        this.listeequipeetudiant=JSON.parse(JSON.stringify(dataaa));
        console.log(this.listeequipeetudiant)
      }
    )

  }
  
 
      
  }

 

