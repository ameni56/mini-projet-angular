import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/service/model/teachers';
import { TeachersService } from 'src/app/service/teachers.service';

@Component({
  selector: 'app-showteachers',
  templateUrl: './showteachers.component.html',
  styleUrls: ['./showteachers.component.css'],
})
export class ShowteachersComponent implements OnInit {

  public listteachers:any
  public name:any
  idens:number
  idenseignant:any
  public teacher:Teachers



  constructor(private teacherservice:TeachersService,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.teacherservice.getenseignant().subscribe(
      data=>{
        this.listteachers=JSON.parse(JSON.stringify(data));
  
      }
    )

  }

  public delete(teacher:Teachers)
  {
    let i = this.listteachers.indexOf(teacher);
    console.log(teacher);
    this.teacherservice.deletstudent(teacher.idEnseignant).subscribe(
      ()=>this.listteachers.splice(i,1)
    )
  }






}
