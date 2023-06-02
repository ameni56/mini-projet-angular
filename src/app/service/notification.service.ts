import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public grantesPermission: boolean;

  constructor() {
    this.grantesPermission = false;
  }
  
  public showNotification(): void {
    if (Notification.permission == "granted") {

      const notification = new Notification('EQUIPES', {
        body: 'Equipe Ajouté Avec Sucees',
        icon: '/assets/assets/img/savee.png'
      });
    
      setTimeout(() => {
        notification.close();
      }, 4000);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          const notification = new Notification('EQUIPES', {
            body: 'Equipe Ajouté Avec Sucees',
            icon: '/assets/assets/img/savee.png'
          });
        
          setTimeout(() => {
            notification.close();
          }, 4000);
        }});  
  }

  }
}

