import {Component} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { AlunoModule } from './aluno/aluno.module';
import { AlunoComponent } from './aluno/aluno.component';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,  
  templateUrl: './app.component.html'
  ,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teste unifor';


  constructor(    
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}
   

ngOnInit() {
    

    
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
     );
     
  }

}
