import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/service/model/departement';
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
public updateForm:FormGroup
public departement:Departement
  constructor(private departementService:DepartementService,private f:FormBuilder,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm=this.f.group(
      {
        nomDepart:['',Validators.required]
      }
    )
  }


  update(departement:Departement)
  {
    this.departementService.updatedetpart(this.router.snapshot.params['idDepart'],departement).subscribe(
      res=>{
        console.log(this.router.snapshot.params['idDepart']);
        console.log(res);
      }
    )
  }

}
