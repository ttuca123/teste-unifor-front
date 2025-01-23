/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AlunoComponent } from './app/aluno/aluno.component';
import { HeaderComponent } from './app/header/header/header.component';
import { AlunoListComponent } from './app/aluno/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './app/aluno/aluno-form/aluno-form.component';

const routes: Routes = [
  {
          path: '',
          component: HeaderComponent,        
    },  
    {
          path: 'alunos',
          component: AlunoComponent,                        
    },
    {
          path: 'alunos/listar',
          component: AlunoListComponent   
    },
     {
          path: 'alunos/cadastrar',
          component: AlunoFormComponent
    }
    


]

bootstrapApplication(AppComponent,    
  {
    providers: [
      provideRouter(routes)
    ]    
});
