import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',  
  standalone: true,
  imports: [
      ],
  templateUrl: './header.component.html'
  /*template: `
    <nav>
      <a class="button"
        routerLink="alunos"
        routerLinkActive="activebutton"
        ariaCurrentWhenActive="page">
        Alunos
      </a> |
      <a class="button"
        routerLink="/heroes-list"
        routerLinkActive="activebutton"
        ariaCurrentWhenActive="page">
        Usuario123
      </a>      
</nav>
  `*/,
  styles: ``
})
export class HeaderComponent {

}
