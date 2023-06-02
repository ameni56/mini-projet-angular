import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/service/model/student';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-showdetails-students',
  templateUrl: './showdetails-students.component.html',
  styleUrls: ['./showdetails-students.component.css']
})
export class ShowdetailsStudentsComponent implements OnInit {


  @Input() id:any;
  lisequipeetudiant:any;
  constructor(private studentservice:StudentsService,private HttpClient:HttpClient) { }
  ngOnInit(): void {
  
    
  }
  affiche(input:any)
  {
    this.studentservice.affichageequipeetudiant(input).subscribe(
      dataaa=>
      {
       // console.log(Input)
      
        this.lisequipeetudiant=JSON.parse(JSON.stringify(dataaa));
        console.log(this.lisequipeetudiant)
      }
    )
  }
  


  
  ngOnChanges(changes: SimpleChanges) {
    if(this.id)
    {
      this.affiche(this.id);
    }

     console.log(this.id);
    

}

}
