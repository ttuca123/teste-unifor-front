import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from 'src/app/demo/service/curso.service';
import { Aluno } from 'src/app/demo/vo/aluno';
import { Curso } from 'src/app/demo/vo/curso';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-curso-form',
  imports: [CommonModule, SharedModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent {

  curso: Curso ={
      id: null,
      nome: '',
      descricao: ''      
    }
  
    method= '';
    subscription: Subscription;
    
    
    constructor(public cursoService: CursoService, public route: Router, public routeActivated: ActivatedRoute){
      
    }
    
    ngOnInit(): void {
      
      this.routeActivated.params
      .subscribe({
        next: (param) => {
          const id = param['id']        
          this.method = param['method'];        
          this.carregarDados(id);
        },      
        error(err) {
          console.error(err);
        },
      });
    }
    
    carregarDados(id) {
      
      this.subscription = this.cursoService.detalhar(id)
      .subscribe({
        next: (vo) => {
          this.curso = {
            id: vo.id,
            nome: vo.nome,
            descricao: vo.descricao
          }          
        }
      })
      
    }
  
    salvar () {
      this.cursoService.salvar(this.curso)
      .subscribe({
        next: () => alert(`curso ${this.curso.nome} cadastrado com sucesso!!!`),
        error: () => console.error()
      })
    }
  
    editar() {
      this.cursoService.editar(this.curso, this.curso.id)
      .subscribe({
        next: () => alert(`curso ${this.curso.nome} editado com sucesso!!!`),
        error: () => console.error()
      })
    }
    
    enviar() {
  
      if(this.curso.id==null){
        this.salvar();
      }else{
        this.editar();
      }
    }
  
    excluir() {
      this.cursoService.excluir(this.curso.id)
      .subscribe({
        next: () => alert(`curso ${this.curso.nome} foi excluido com sucesso`),
        error: () => console.error()
      })
  
    }
  
   voltar() {
  
      this.route.navigate(["/cursos"]);
    }
    
    ngOnDestroy(): void {
      if(this.subscription!=null){
        this.subscription.unsubscribe;
      }
    }
}
