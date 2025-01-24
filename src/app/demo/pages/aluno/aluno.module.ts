import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AlunoRoutingModule } from './aluno-routing.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AlunoRoutingModule, SharedModule],
  providers: []
})
export class AlunoModule {}
