import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorFormComponent } from './professor-form/professor-form.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorFormComponent,
  },
  {
      path: 'cadastro',
      component: ProfessorFormComponent
  },
  {
      path: 'cadastro/:id',
      component: ProfessorFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule {}
