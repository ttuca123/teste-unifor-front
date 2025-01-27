import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ProfessorRoutingModule } from './professor-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfessorRoutingModule, SharedModule],
  providers: []
})
export class ProfessorModule {}
