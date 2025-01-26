import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DisciplinaService } from '../../service/disciplina.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-disciplina',
  imports: [CommonModule, SharedModule],
  templateUrl: './disciplina.component.html',
  styleUrl: './disciplina.component.scss'
})
/**
 * @author Artur Cavalcante
 */
export class DisciplinaComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  cursos:any[] = [];

  constructor(private disciplinaService: DisciplinaService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodos();       

  }

  

  detalhar(aluno) {
    this.route.navigate([`/disciplinas/cadastro/${aluno.matricula}`]);
  }

  excluir(aluno) {
    this.route.navigate([`/disciplinas/cadastro/${aluno.matricula}`, {
      method: 'excluir'
    }]);
  }


  //Busca todos os cursos
  buscarTodos() {     
   
  this.subscription = this.disciplinaService.listarTodos()
    .subscribe({
      next: (dados) => {
        this.cursos= (dados);

      },
       error: (err) => {
        console.error(err);        
      }
    }); 
  }  


  cadastrar() {

     this.route.navigate(["/disciplinas/cadastro"]);
  }

  ngOnDestroy(): void {
    
    if(this.subscription!=null){
      this.subscription.unsubscribe
    }
  }
}
