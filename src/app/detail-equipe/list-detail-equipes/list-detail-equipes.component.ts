import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { detailEquipe } from 'src/app/service/model/detailEquipe';
import { DetailEquipeService } from 'src/app/service/detail-equipe.service';

@Component({
  selector: 'app-list-detail-equipes',
  templateUrl: './list-detail-equipes.component.html',
  styleUrls: ['./list-detail-equipes.component.css']
})
export class ListDetailEquipesComponent implements OnInit {
  listdetail: detailEquipe[]
  data:any

  constructor(private detailService:DetailEquipeService,private HttpClient:HttpClient) { }

  ngOnInit(): void {
    this.detailService.getDetailEquipe().subscribe(data=>{
      this.listdetail=JSON.parse(JSON.stringify(data));
    })
  }
  delete(e: detailEquipe) {
    let i = this.listdetail.indexOf(e);
    this.detailService.deleteDetailEquipe(e.idDetailEquipe).subscribe(
      ()=>this.listdetail.splice(i, 1)
    )
  }

}
