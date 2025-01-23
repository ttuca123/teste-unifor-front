/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
    {component: AppComponent, path: ''}

]

bootstrapApplication(AppComponent,    
  {
    providers: [
      provideRouter(routes)
    ]    
});
