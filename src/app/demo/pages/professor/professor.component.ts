import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Subscribable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  imports: [CommonModule, SharedModule],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss'
})
export class ProfessorComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  professores:any[] = [];

  constructor(private professorService: AlunoService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodosProfessores();       

  }

  

  detalhar(aluno) {
    this.route.navigate([`/alunos/cadastro/${aluno.matricula}`]);
  }

  excluir(aluno) {
    this.route.navigate([`/alunos/cadastro/${aluno.matricula}`, {
      method: 'excluir'
    }]);
  }


  buscarTodosProfessores() {     
   
  this.subscription = this.professorService.listarTodosAlunos()
    .subscribe({
      next: (dados) => {
        this.professores= (dados);

      },
       error: (err) => {
        console.error(err);
        //this.error = 'Erro ao carregar os dados'; // Mostra a mensagem de erro
        //this.loading = false; // Finaliza o carregamento
      }
    }); 
  }  


  cadastrar() {

     this.route.navigate(["/alunos/cadastro"]);
  }

  ngOnDestroy(): void {
    
    if(this.subscription!=null){
      this.subscription.unsubscribe
    }
  }
}
