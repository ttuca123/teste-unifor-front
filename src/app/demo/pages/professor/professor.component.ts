import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Subscribable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { ProfessorService } from '../../service/professor.service';

@Component({
  selector: 'app-professor',
  imports: [CommonModule, SharedModule],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss'
})
export class ProfessorComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  professores:any[] = [];

  constructor(private professorService: ProfessorService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodos();       

  }

  

  detalhar(professor) {
    this.route.navigate([`/professores/cadastro/${professor.id}`]);
  }

  excluir(professor) {
    this.route.navigate([`/professores/cadastro/${professor.id}`, {
      method: 'excluir'
    }]);
  }


  buscarTodos() {     
   
    this.subscription = this.professorService.listarTodos()
      .subscribe({
        next: (dados) => {
          this.professores= (dados);

        },
        error: (err) => {
          console.error(err);        
        }
      }); 
  }  


  cadastrar() {

     this.route.navigate(["/professores/cadastro"]);
  }

  ngOnDestroy(): void {
    
    if(this.subscription!=null){
      this.subscription.unsubscribe
    }
  }
}
