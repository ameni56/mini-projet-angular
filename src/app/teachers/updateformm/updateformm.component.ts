import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Teachers } from 'src/app/service/model/teachers';
import { TeachersService } from 'src/app/service/teachers.service';

@Component({
  selector: 'app-updateformm',
  templateUrl: './updateformm.component.html',
  styleUrls: ['./updateformm.component.css']
})
export class UpdateformmComponent implements OnInit {

  public updateForm:FormGroup
public teachers:Teachers
  constructor(private serviceteacher:TeachersService,private fb: FormBuilder,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm=this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      grade:['',Validators.required]
     
    }
    )
  }

  update(teachers:Teachers)
  {
   
    this.serviceteacher.update(this.router.snapshot.params['idenseignant'],teachers).subscribe(
      res=>{
       
        console.log(this.router.snapshot.params['idenseignant']);
        console.log(res);
      
      }
    )
    
  }

}
