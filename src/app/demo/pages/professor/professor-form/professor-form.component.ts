import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfessorService } from 'src/app/demo/service/professor.service';
import { Professor } from 'src/app/demo/vo/professor';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-professor-form',
  imports: [SharedModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent implements OnInit, OnDestroy {
  
  professor: Professor ={
    id: null,
    nome: '',
    cpf: '',
    fone: ''
  }

  method= '';
  subscription: Subscription;
  
  
  constructor(public professorService: ProfessorService, public route: Router, public routeActivated: ActivatedRoute){
    
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
    
    this.subscription = this.professorService.detalhar(id)
    .subscribe({
      next: (vo) => {
        this.professor = {
          id: vo.id,
          nome: vo.nome,
          cpf: vo.cpf,
          fone: vo.fone         
        }          
      }
    })
    
  }

  salvar () {
    this.professorService.salvar(this.professor)
    .subscribe({
      next: () => alert(`professor ${this.professor.nome} cadastrado com sucesso!!!`),
      error: () => console.error()
    })
  }

  editar() {
    this.professorService.editar(this.professor, this.professor.id)
    .subscribe({
      next: () => alert(`professor ${this.professor.nome} editado com sucesso!!!`),
      error: () => console.error()
    })
  }
  
  enviar() {

    if(this.professor.id==null){
      this.salvar();
    }else{
      this.editar();
    }
  }

  excluir() {
    this.professorService.excluir(this.professor.id)
    .subscribe({
      next: () => alert(`professor ${this.professor.nome} foi excluido com sucesso`),
      error: () => console.error()
    })

  }

 voltar() {

    this.route.navigate(["/professores"]);
  }
  
  ngOnDestroy(): void {
    if(this.subscription!=null){
      this.subscription.unsubscribe;
    }
  }
}
