import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/service/model/student';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-formulaire-student',
  templateUrl: './formulaire-student.component.html',
  styleUrls: ['./formulaire-student.component.css']
})
export class FormulaireStudentComponent implements OnInit {
   etudiant:Student
  constructor(private student:StudentsService) { }

  ngOnInit(): void {
    this.etudiant= new Student()
  }
  addetudiant(etu:Student)
  {
    
    this.student.addstudent(etu).subscribe(
      res=>{
       
        console.log(res);
      
      }
    )

  }

}
