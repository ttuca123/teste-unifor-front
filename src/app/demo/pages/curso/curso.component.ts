import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-curso',
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  cursos:any[] = [];

  constructor(private cursoService: CursoService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodosCursos();       

  }

  

  detalhar(aluno) {
    this.route.navigate([`/alunos/cadastro/${aluno.matricula}`]);
  }

  excluir(aluno) {
    this.route.navigate([`/alunos/cadastro/${aluno.matricula}`, {
      method: 'excluir'
    }]);
  }


  buscarTodosCursos() {     
   
  this.subscription = this.cursoService.listarTodos()
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

     this.route.navigate(["/cursos/cadastro"]);
  }

  ngOnDestroy(): void {
    
    if(this.subscription!=null){
      this.subscription.unsubscribe
    }
  }
}