import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';



const routes: Routes = [
  {
    path: '',
    component: DisciplinaFormComponent,
  },
  {
      path: 'cadastro',
      component: DisciplinaFormComponent
  },
  {
      path: 'cadastro/:id',
      component: DisciplinaFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule {}
