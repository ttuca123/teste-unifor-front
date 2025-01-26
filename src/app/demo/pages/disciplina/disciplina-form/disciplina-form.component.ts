import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DisciplinaService } from 'src/app/demo/service/disciplina.service';
import { Disciplina } from 'src/app/demo/vo/disciplina';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-disciplina-form',
  imports: [CommonModule, SharedModule],
  templateUrl: './disciplina-form.component.html',
  styleUrl: './disciplina-form.component.scss'
})
export class DisciplinaFormComponent {

  disciplina: Disciplina ={
      id: null,
      nome: '',
      creditos: 0
  }
  
    method= '';
    subscription: Subscription;
    
    
    constructor(public disciplinaService: DisciplinaService, public route: Router, public routeActivated: ActivatedRoute){
      
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
      
      this.subscription = this.disciplinaService.detalhar(id)
      .subscribe({
        next: (vo) => {
          this.disciplina = {
            id: vo.id,
            nome: vo.nome,
            creditos: vo.creditos
          }          
        }
      })
      
    }
  
    salvar () {
      this.disciplinaService.salvar(this.disciplina)
      .subscribe({
        next: () => alert(`disciplina ${this.disciplina.nome} cadastrado com sucesso!!!`),
        error: () => console.error()
      })
    }
  
    editar() {
      this.disciplinaService.editar(this.disciplina, this.disciplina.id)
      .subscribe({
        next: () => alert(`disciplina ${this.disciplina.nome} editado com sucesso!!!`),
        error: () => console.error()
      })
    }
    
    enviar() {
  
      if(this.disciplina.id==null){
        this.salvar();
      }else{
        this.editar();
      }
    }
  
    excluir() {
      this.disciplinaService.excluir(this.disciplina.id)
      .subscribe({
        next: () => alert(`curso ${this.disciplina.nome} foi excluido com sucesso`),
        error: () => console.error()
      })
  
    }
  
   voltar() {
  
      this.route.navigate(["/disciplinas"]);
    }
    
    ngOnDestroy(): void {
      if(this.subscription!=null){
        this.subscription.unsubscribe;
      }
    }
}
