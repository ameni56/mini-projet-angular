import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detailEquipe } from 'src/app/service/model/detailEquipe';
import { Equipe } from 'src/app/service/model/equipe';
import { FileTypeLabelMapping, Niveau } from 'src/app/service/model/niveau.enum';
import { DetailEquipeService } from 'src/app/service/detail-equipe.service';
import { EquipeService } from 'src/app/service/equipe.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  public equipe: Equipe;

  public action:string;
  public file = FileTypeLabelMapping;
  public niveaux = Object.values(Niveau);
  equipeD : detailEquipe[] ;
  listequipes : Equipe[];

  constructor(private ns : NotificationService, private detailService : DetailEquipeService, private equipeService:EquipeService,
   private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.detailService.getDetailEquipe().subscribe(data=>{
      this.equipeD=JSON.parse(JSON.stringify(data))
    });
    
    let id=this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action='UPDATE'
      this.equipeService.getEquipeById(id).subscribe(
        (data: Equipe)=>{this.equipe=data}
      )
    }else{
      this.action='ADD NEW'
      this.equipe=new Equipe()

    }
  }

  saveEquipe(){
   if(this.action='ADD NEW'){
    this.ns.showNotification()
    this.equipeService.addEquipe(this.equipe).subscribe(
      ()=>this.route.navigate(['equipe/listequipes']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}})
    }
     else{
      this.equipeService.updateEquipe(this.equipe).subscribe(
        ()=>this.route.navigate(['equipe/listequipes']),
        ()=>{console.log('error'),
        ()=>{console.log('complete')}})

  }
}

}
