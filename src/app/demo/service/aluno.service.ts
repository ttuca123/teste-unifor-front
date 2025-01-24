import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }



  public listarTodosAlunos():Observable<any>{

    return this.http.get('http://localhost:8080/alunos');

  }
}
