import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  endpoint = 'http://localhost:8180';
     recurso = "/v1/disciplinas";
     
       constructor(private http: HttpClient) { }
     
       public listarTodos():Observable<any>{
     
         return this.http.get(`${this.endpoint}/${this.recurso}`);
       }
     
       public detalhar(id):Observable<any>{
     
         return this.http.get(`${this.endpoint}/${this.recurso}/${id}`);
       }
     
       public salvar(vo):Observable<any>{
     
         return this.http.post(`${this.endpoint}/${this.recurso}/`, vo);
       }
     
       public editar(vo, id):Observable<any> {
     
         return this.http.put(`${this.endpoint}/${this.recurso}/${id}`, vo);
       }
     
       public excluir(id):Observable<any> {
     
         return this.http.delete(`${this.endpoint}/${this.recurso}/${id}`);
       }
}
