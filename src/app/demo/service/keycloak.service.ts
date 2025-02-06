import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';
import { Observable } from 'rxjs';
import { STORAGE_KEYS } from 'src/app/config/storage_keys.config';
import { LocalUser } from '../vo/local-user';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
    
  private keycloakAuth: any;

  endpoint = 'http://localhost:8180';

  constructor(private http: HttpClient) { }

  public logar(vo):Observable<any>{

    return this.http.post(`${this.endpoint}/v1/auth/login`, vo);
  }

  public gravarDadosToken(dadosUsuario){

    localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(dadosUsuario));    

  }

   verificarUsuarioLogado(): boolean {

    return this.getLocalUser() != null;
  }

  getLocalUser(): LocalUser {

      const usr = localStorage.getItem(STORAGE_KEYS.localUser);

      return usr != null ? JSON.parse(usr) : null;
  }
  
}
