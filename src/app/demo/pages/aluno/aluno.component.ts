import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Subscribable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-aluno',
  imports: [CommonModule, SharedModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.scss'
})
export class AlunoComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  alunos:any[] = [];

  constructor(private alunoService: AlunoService){
    
  }
  
  ngOnInit(): void {
    this.buscarTodosAlunos();       

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

  ngOnDestroy(): void {
    
    if(this.subscription!=null){
      this.subscription.unsubscribe
    }
  }
}
