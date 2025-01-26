import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoFormComponent } from './curso-form/curso-form.component';


const routes: Routes = [
  {
    path: '',
    component: CursoFormComponent,
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
