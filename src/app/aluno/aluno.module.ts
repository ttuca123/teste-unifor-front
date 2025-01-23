import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlunoComponent } from "./aluno.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunoRoutingModule } from "./aluno.routing";

@NgModule({
  declarations: [
      
  ],
  imports: [    
    CommonModule,    
    FormsModule,
    ReactiveFormsModule   
    
    
  ], providers: [RouterModule],
  exports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AlunoModule { }