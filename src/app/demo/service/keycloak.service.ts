import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private keycloakAuth: any;

  constructor() { 
       
    /*this.keycloakAuth = Keycloak({
        url: 'https://localhost:8180/auth',
        realm: 'master',
        clientId: 'unifor123',       
    }); */
  }

  init() {
    return new Promise((resolve, reject) => {
      this.keycloakAuth.init({ onLoad: 'login-required' }).then(
        () => {
          resolve( () => {
            console.log('autenticado');
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  login(): Observable<any> {
   return  this.keycloakAuth.login();
  }

  logout() {
    this.keycloakAuth.logout();
  }

  getToken() {
    return this.keycloakAuth.token;
  }
}
