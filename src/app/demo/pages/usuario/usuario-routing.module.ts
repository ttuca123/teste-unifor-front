import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioComponent } from './usuario.component';



const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
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
