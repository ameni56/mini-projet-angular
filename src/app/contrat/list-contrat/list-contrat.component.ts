import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Contrat } from 'src/app/service/model/contrat';
import { Specialite } from 'src/app/service/model/specialite';
import { ContratService } from 'src/app/service/contrat.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  
  @ViewChild('content',{static:false}) el!: ElementRef
  lisecontratetudiant:any

  idContrat:any;
  name:any;
  title = 'pdfapp';
  listcontrats:any
  contratList:any
  data:any
  getalletudiant:any
  affectation:boolean

  contrat : Contrat
  constructor(private contratservice:ContratService,private HttpClient:HttpClient) {

    this.affectation=true

   }

  ngOnInit(): void {


    this.contratservice.getcontrat().subscribe(data=>{
      
      this.listcontrats=JSON.parse(JSON.stringify(data));
      console.log("listtttt",this.listcontrats)

      this.contratservice.getalletudiant().subscribe( dataa=>  {

        
        this.getalletudiant=JSON.parse(JSON.stringify(dataa));

      }
    )
    }
)                         
   
}
customSearchFn( dateFinContrat) {
  return dateFinContrat.filter(o => { o.specialite.toLowerCase().startsWith(this.contrat.dateFinContrat)})
}

delete(c: Contrat) {
  let i = this.listcontrats.indexOf(c);
this.contratservice.deleteContrat(c.idContrat).subscribe(
    ()=>this.listcontrats.splice(i, 1)
  )
}

ngaffecetation()
{
  this.affectation=false;

}


generatePDF(){

         let pdf = new jsPDF('p', 'pt', 'letter')   
    , specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function(element, renderer){           
            return true
        }
    }

    , margins = {
             top: 20,
             bottom: 20,
             left: 40,
             width: 1000
         };

    pdf.html(this.el.nativeElement,{
      callback:(pdf) => {
        pdf.save("output.pdf")
      }
    })
  }
  affiche(Input:number)
  {
    this.idContrat=Input
    this.contratservice.findEtudiantByContratsIdContrat(Input).subscribe(
      dataaa=>
      {
        console.log( "dataa",Input)
      
        this. lisecontratetudiant=JSON.parse(JSON.stringify(dataaa));
        console.log("lista",this.lisecontratetudiant)
      }
    )

  }

}





