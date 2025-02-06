import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunoService } from 'src/app/demo/service/aluno.service';
import { Aluno } from 'src/app/demo/vo/aluno';
import { Usuario } from 'src/app/demo/vo/usuario';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-usuario-form',
  imports: [SharedModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent implements OnInit, OnDestroy {
  
  usuario: Usuario ={
    id: 0,
    nome: '',
    email: '',
    password: ''
  }

  method= '';
  subscription: Subscription;
  
  
  constructor(public alunoService: AlunoService, public route: Router, public routeActivated: ActivatedRoute){
    
  }
  
  ngOnInit(): void {
    
    this.routeActivated.params
    .subscribe({
      next: (param) => {
        const id = param['id']        
        this.method = param['method'];        
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
        this.usuario = {
          id: vo.id,
          nome: vo.nome,          
          email: vo.email
        }          
      }
    })
    
  }

  salvar () {
    this.alunoService.salvar(this.usuario)
    .subscribe({
      next: () => alert(`usuário ${this.usuario.nome} cadastrado com sucesso!!!`),
      error: () => console.error()
    })
  }

  editar() {
    this.alunoService.editar(this.usuario, this.usuario.id)
    .subscribe({
      next: () => alert(`usuário ${this.usuario.nome} editado com sucesso!!!`),
      error: () => console.error()
    })
  }
  
  enviar() {

    if(this.usuario.id==null){
      this.salvar();
    }else{
      this.editar();
    }
  }

  excluir() {
    this.alunoService.excluir(this.usuario.id)
    .subscribe({
      next: () => alert(`aluno ${this.usuario.nome} foi excluido com sucesso`),
      error: () => console.error()
    })

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
