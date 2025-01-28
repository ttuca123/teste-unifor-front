import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessorComponent } from './professor.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
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
