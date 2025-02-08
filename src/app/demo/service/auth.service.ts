import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = 'http://localhost:8180';
  
  constructor(private http: HttpClient, private storage: StorageService) { }

  public salvar(vo):Observable<any>{

    return this.http.post(`${this.endpoint}/v1/auth/login`, vo);
  }

  public getAuthToken() {
    
    const localUser = this.storage.getLocalUser();  
    let authToken = '';
    
    if (localUser!=null) {
      
      authToken = 'Bearer ' + localUser.authToken;
    }
    return authToken;
  }

}
