import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ContratService } from 'src/app/service/contrat.service';
@Component({
  selector: 'app-detailcontrat',
  templateUrl: './detailcontrat.component.html',
  styleUrls: ['./detailcontrat.component.css']
})
export class DetailcontratComponent implements OnInit {



  @Input() id:any;
  lisecontratetudiant:any
  constructor( private ContratService  : ContratService,  HttpClient:HttpClient) { }

  ngOnInit(): void {
  }

  affiche(input:any)
  {
    this.ContratService.findEtudiantByContratsIdContrat(input).subscribe(
      dataaa=>
      {
       console.log("input",Input)  
        this.lisecontratetudiant=JSON.parse(JSON.stringify(dataaa));
        console.log("list contrat etud",this.lisecontratetudiant)
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