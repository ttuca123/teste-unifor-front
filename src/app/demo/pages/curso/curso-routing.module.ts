import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoComponent } from './curso.component';


const routes: Routes = [
  {
    path: '',
    component: CursoComponent,
  },
  {
      path: 'cadastro',
      component: CursoFormComponent
  },
  {
      path: 'cadastro/:id',
      component: CursoFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {}
