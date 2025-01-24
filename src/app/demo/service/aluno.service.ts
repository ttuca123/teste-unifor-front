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

  public detalharAluno(id):Observable<any>{

    return this.http.get(`${this.endpoint}/v1/alunos/${id}`);
  }

  public salvar(vo):Observable<any>{

    return this.http.post(`${this.endpoint}/v1/alunos/`, vo);
  }

  public editar(vo, id):Observable<any> {

    return this.http.put(`${this.endpoint}/v1/alunos/${id}`, vo);
  }

  public excluir(id):Observable<any> {

    return this.http.delete(`${this.endpoint}/v1/alunos/${id}`);
  }
}
