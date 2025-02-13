import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';



const routes: Routes = [
  {
    path: '',
    component: UsuarioFormComponent,
  },
  {
      path: 'cadastro',
      component: UsuarioFormComponent
  },
  {
      path: 'cadastro/:id',
      component: UsuarioFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}
