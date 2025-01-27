import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CursoRoutingModule } from './curso-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CursoRoutingModule, SharedModule],
  providers: []
})
export class CursoModule {}
