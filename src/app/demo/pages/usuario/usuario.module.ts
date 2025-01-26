import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UsuarioRoutingModule, SharedModule],
  providers: []
})
export class UsuarioModule {}
