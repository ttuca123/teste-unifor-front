import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  endpoint = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarTodosAlunos():Observable<any>{

    return this.http.get(`${this.endpoint}/v1/alunos`);
  }

  public cadastrarAluno(vo):Observable<any>{

    return this.http.post(`${this.endpoint}/alunos/`, vo);
  }

  public editarAluno(vo, id):Observable<any> {

    return this.http.put(`${this.endpoint}/alunos/${id}`, vo);
  }

  public remover(id):Observable<any> {

    return this.http.delete(`${this.endpoint}/alunos/${id}`);
  }
}
