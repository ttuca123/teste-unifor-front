import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeycloakService } from 'src/app/demo/service/keycloak.service';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent {

  constructor(private keycloakService: KeycloakService ){

  }

  login(){
    
    
  }


}
