import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { WebSocketComponent } from './web-socket/web-socket.component';

export class WebSocketAPI {
    webSocketEndPoint: string = 'http://localhost:8081/chat-websocket';
    defaultTopic: string = "/chat/message/";
    defaultSendto: string = "/app/message/";
    topic: string = "";
    sendto: string = "";


    stompClient: any;
    ws : WebSocketComponent;

    constructor( ws: WebSocketComponent, idEquipe:number){
        this.ws = ws;
        this.topic=this.defaultTopic+idEquipe;
        this.sendto=this.defaultSendto+idEquipe;
    }
    _connect() {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame) {
            _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
                _this.onMessageReceived(sdkEvent);
            });
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    errorCallBack(error) {
        console.log("errorCallBack -> " + error)
        const _this = this;
        setTimeout(() => {
            _this._connect();
        }, 5000);
    }

 /**
  * Send message to sever via web socket
  * @param {*} message 
  */
    _send(message) {
        console.log("calling logout api via web "+ message);
        this.stompClient.send(this.sendto, {}, JSON.stringify(message));
    }

    onMessageReceived(message) {
        console.log("Message Recieved from Server :: " + message);
        console.log(JSON.stringify(message.body));
        this.ws.tab.push(message.body);
    }
}