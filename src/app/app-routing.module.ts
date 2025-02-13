import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { provideHttpClient } from '@angular/common/http';
import AuthSigninComponent from './demo/pages/authentication/auth-signin/auth-signin.component';
import { AuthGuardService } from './demo/service/auth-guard.service';

const routes: Routes = [  
  {
    path: '',
    component: AdminComponent,    
    children: [    
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then((m) => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then((m) => m.TablesModule)
      },
      {
        path: 'apexchart',
        loadComponent: () => import('./demo/pages/core-chart/apex-chart/apex-chart.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/extra/sample-page/sample-page.component')
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./demo/pages/usuario/usuario.module').then((m) => m.UsuarioModule)
      },
       {
        path: 'alunos',
        loadChildren: () => import('./demo/pages/aluno/aluno.module').then((m) => m.AlunoModule)
      },
       {
        path: 'professores',
        loadChildren: () => import('./demo/pages/professor/professor.module').then((m) => m.ProfessorModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('./demo/pages/curso/curso.module').then((m) => m.CursoModule)
      },
      {
        path: 'disciplinas',
        loadChildren: () => import('./demo/pages/disciplina/disciplina.module').then((m) => m.DisciplinaModule)
      }

    ]
  },  
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient()]
})
export class AppRoutingModule {}
