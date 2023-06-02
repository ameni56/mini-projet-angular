import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import globals from 'src/app/global';
import { WebSocketAPI } from '../WebSocketAPI';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {
  webSocketAPI: WebSocketAPI;

  tab: String[];
  name:String;
  message:String;


  constructor(private currentRoute: ActivatedRoute, private router:Router) { 
  }

  ngOnInit(): void {

    let id=this.currentRoute.snapshot.params['id'];
    if(globals.listequipes.find(equipe=>equipe.idEquipe==id)){
      this.webSocketAPI = new WebSocketAPI(this, id);
      this.connect();
      this.tab=[];
    }else{
      this.router.navigate(['/'])
    }
  
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.name+": "+this.message);
    this.name = '';
    this.message ='';
  }

}
