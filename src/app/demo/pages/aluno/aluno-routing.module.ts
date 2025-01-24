import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const routes: Routes = [
  {
    path: '',
    component: AlunoComponent,    
  },
  {
      path: 'cadastro',
      component: AlunoFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule {}
