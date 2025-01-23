import { Component } from '@angular/core';


@Component({
  selector: 'app-aluno',  
  template: `
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container">
        <div class="navbar-header">            
              <a href="alunos/listar"  class="navbar-brand">Consultar Aluno</a>
          </div>
          <div class="navbar-header">            
              <a href="alunos/cadastrar"  class="navbar-brand">Cadastrar Aluno</a>
          </div>
          <div class="navbar-header">            
              <a href="/" class="navbar-brand">Voltar</a>
          </div>
      </div>
  </nav>
  `,
  styles: ``
  
})
export class AlunoComponent {

}
