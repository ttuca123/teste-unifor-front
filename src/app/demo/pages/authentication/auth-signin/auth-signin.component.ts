import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { KeycloakService } from 'src/app/demo/service/keycloak.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent {

  auth = {
    user: '',
    password: ''
  }

  constructor(private keycloakService: KeycloakService, public route: Router ){

  }  

  login(){

    this.keycloakService.logar(this.auth)
    .subscribe({
      next: (token) => {
        alert(`login realizado com sucesso ${token.access_token}`);
        let dadosUsuario = {
          user : this.auth.user,
          pass : this.auth.password,
        }
        this.keycloakService.gravarDadosToken(dadosUsuario); 
        this.route.navigate(['/dashboard']);
      }
        ,
      error: () => console.error()
    })
  }


}
