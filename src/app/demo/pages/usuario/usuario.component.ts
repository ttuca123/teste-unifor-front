import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-usuario',
  imports: [SharedModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  usuarios:any[] = [];

  constructor(private usuarioService: UsuarioService,  public route: Router){
    
  }
  
  ngOnInit(): void {
    this.buscarTodos();       

  }

  

  detalhar(usuario) {
    this.route.navigate([`/usuarios/cadastro/${usuario.id}`]);
  }

  excluir(usuario) {
    this.route.navigate([`/usuarios/cadastro/${usuario.id}`, {
      method: 'excluir'
    }]);
  }

  
  buscarTodos() {     
   
  this.subscription = this.usuarioService.listarTodos()
    .subscribe({
      next: (dados) => {
        this.usuarios= (dados);

      },
       error: (err) => {
        console.error(err);        
      }
    }); 
  }  


  cadastrar() {

     this.route.navigate(["/usuarios/cadastro"]);
  }

  ngOnDestroy(): void {
    
    if(this.subscription!=null){
      this.subscription.unsubscribe
    }
  }
}

