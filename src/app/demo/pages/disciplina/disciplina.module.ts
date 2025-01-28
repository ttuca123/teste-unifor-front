import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DisciplinaRoutingModule } from './disciplina-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DisciplinaRoutingModule, SharedModule],
  providers: []
})
export class DisciplinaModule {}
