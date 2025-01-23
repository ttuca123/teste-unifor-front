import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { AlunoFilterComponent } from "./aluno-filter/aluno-filter.component";


const routes: Routes = [               
    {
      path: 'filtro',
      component: AlunoFilterComponent,      
    }
   
  ];
  
 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule {}