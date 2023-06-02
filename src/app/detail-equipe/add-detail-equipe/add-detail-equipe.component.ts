import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { detailEquipe } from 'src/app/service/model/detailEquipe';
import { DetailEquipeService } from 'src/app/service/detail-equipe.service';

@Component({
  selector: 'app-add-detail-equipe',
  templateUrl: './add-detail-equipe.component.html',
  styleUrls: ['./add-detail-equipe.component.css']
})
export class AddDetailEquipeComponent implements OnInit {
 

  public detail: detailEquipe;
  public action:string;
  submitted;
  form: FormGroup;
  constructor(private detailService:DetailEquipeService,
    private route: Router, private currentRoute:ActivatedRoute, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.submitted = false;
    this.form = this.fb.group ({
      "salle": new FormControl("", Validators.required),
      "thematique": new FormControl("",[Validators.required, Validators.minLength(3)])});


    let id=this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action='Update'
      this.detailService.getDetailEquipeById(id).subscribe(
        (data: detailEquipe)=>{this.detail=data}
      )
    }else{
      this.action='Add new'
      this.detail=new detailEquipe()
    }
  }

  get f() { 
    return this.form.getRawValue();
 }

  saveDetail(){
    this.submitted=true;
    if(this.action='Add new'){
      this.detailService.addDetailEquipe(this.detail).subscribe(
        ()=>this.route.navigate(['detailEquipe/listdetail']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}})
    }else{
    this.detailService.updateDetailEquipe(this.detail).subscribe(
      ()=>this.route.navigate(['detailEquipe/listdetail']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}})}
  }
  
}
