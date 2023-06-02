import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/service/model/student';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
public updateForm:FormGroup
public etudiant:Student
//option = ['SE','SIM','Gamix','NIDS']
  constructor(private servicestudent:StudentsService,private fb: FormBuilder,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm=this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      option:['',Validators.required]
     
      
      

    }


    
    )
    
  }
  update(etudiant:Student)
  {
   
    

    this.servicestudent.update(this.router.snapshot.params['idetudiant'],etudiant).subscribe(
      res=>{
       
        console.log(this.router.snapshot.params['idetudiant']);
        console.log(res);
      
      }
    )
    
  }


}
