import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-aluno-form',
  imports: [SharedModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent implements OnInit {
  
  constructor(public route: Router, public routeActivated: ActivatedRoute){


  }
  
  ngOnInit(): void {

    this.routeActivated.params
    .subscribe({
      next: (param) => {
        const matricula = param['matricula']
        console.log(matricula);
      },
      error(err) {
          console.error(err);
      },
    });
  }
}
