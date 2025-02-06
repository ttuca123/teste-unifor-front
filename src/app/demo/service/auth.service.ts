import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = 'http://localhost:8180';
  
  constructor(private http: HttpClient) { }

  public salvar(vo):Observable<any>{

    return this.http.post(`${this.endpoint}/v1/auth/login`, vo);
  }

}
