import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Subscribable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  imports: [CommonModule, SharedModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss'
})
export class AlunoComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  alunos:any[] = [];

  constructor(private alunoService: AlunoService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodosAlunos();       

  }

  detalharAluno(aluno) {
    this.route.navigate([`/alunos/cadastro/${aluno.matricula}`]);

  }


  buscarTodosAlunos() {     
   
  this.subscription = this.alunoService.listarTodosAlunos()
    .subscribe({
      next: (dados) => {
        this.alunos= (dados);

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
