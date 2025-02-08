// angular import
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from 'src/app/demo/service/storage.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {  

  auth: any;
  
  constructor(public storage: StorageService, public route: Router) {
    const config = inject(NgbDropdownConfig);

    config.placement = 'bottom-right';
  }
  ngOnInit(): void {

    this.auth = {
      email: this.storage.getLocalUser().user
    }     
    
  }

  logout() {

    this.storage.setLocalUser(null);
    this.route.navigate(['/auth/login']);
  }
}
