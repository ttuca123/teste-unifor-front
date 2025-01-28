import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  cursos:any[] = [];

  constructor(private usuarioService: UsuarioService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodos();       

  }

  

  detalhar(aluno) {
    this.route.navigate([`/usuarios/cadastro/${aluno.matricula}`]);
  }

  excluir(aluno) {
    this.route.navigate([`/usuarios/cadastro/${aluno.matricula}`, {
      method: 'excluir'
    }]);
  }


  //Busca todos os cursos
  buscarTodos() {     
   
  this.subscription = this.usuarioService.listarTodos()
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

