import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/service/model/teachers';
import { TeachersService } from 'src/app/service/teachers.service';

@Component({
  selector: 'app-formulaire-teachers',
  templateUrl: './formulaire-teachers.component.html',
  styleUrls: ['./formulaire-teachers.component.css']
})
export class FormulaireTeachersComponent implements OnInit {
  teachers:Teachers

  constructor(private teacher:TeachersService) { }

  ngOnInit(): void {
    this.teachers= new Teachers()
  }
  addenseignant(ens:Teachers)
  {
    
    this.teacher.addenseignant(ens).subscribe(
      res=>{
       
        console.log(res);
      
      }
    )

  }

}
