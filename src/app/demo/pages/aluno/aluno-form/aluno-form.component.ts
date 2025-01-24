import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunoService } from 'src/app/demo/service/aluno.service';
import { Aluno } from 'src/app/demo/vo/aluno';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-aluno-form',
  imports: [SharedModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  
  aluno: Aluno ={
    matricula: null,
    nome: '',
    cpf: '',
    fone: ''
  }
  
  subscription: Subscription;
  
  
  constructor(public alunoService: AlunoService, public route: Router, public routeActivated: ActivatedRoute){
    
  }
  
  ngOnInit(): void {
    
    this.routeActivated.params
    .subscribe({
      next: (param) => {
        const id = param['matricula']        
        this.carregarDados(id);
      },      
      error(err) {
        console.error(err);
      },
    });
  }
  
  carregarDados(id) {
    
    this.subscription = this.alunoService.detalharAluno(id)
    .subscribe({
      next: (vo) => {
        this.aluno = {
          matricula: vo.matricula,
          nome: vo.nome,
          cpf: vo.cpf,
          fone: vo.fone         
        }          
      }
    })
    
  }
  
  enviar() {

    if(this.aluno.matricula==null){
      this.alunoService.salvar(this.aluno)
      .subscribe({
        next: () => alert(`aluno ${this.aluno.nome} cadastrado com sucesso!!!`),
        error: () => console.error()
      })
    }else{
      console.log(`enviado ${this.aluno.matricula}`);

      this.alunoService.editar(this.aluno, this.aluno.matricula)
      .subscribe({
        next: () => alert(`aluno ${this.aluno.nome} editado com sucesso!!!`),
        error: () => console.error()
      })
      
    }
  }

 voltar() {

    this.route.navigate(["/alunos"]);
  }
  
  ngOnDestroy(): void {
    if(this.subscription!=null){
      this.subscription.unsubscribe;
    }
  }
}
