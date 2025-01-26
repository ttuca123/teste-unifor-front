import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../../service/curso.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-curso',
  imports: [CommonModule, SharedModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.scss'
})
export class CursoComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  cursos:any[] = [];

  constructor(private cursoService: CursoService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodos();       

  }

  

  detalhar(curso) {
    this.route.navigate([`/cursos/cadastro/${curso.id}`]);
  }

  excluir(curso) {
    this.route.navigate([`/cursos/cadastro/${curso.id}`, {
      method: 'excluir'
    }]);
  }


  buscarTodos() {     
   
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