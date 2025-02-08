import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from '../demo/service/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(public storage: StorageService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const localUser = this.storage.getLocalUser();       
        
        if (!localUser) {
            console.log('interceptador');
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.authToken)});
            
            return next.handle(authReq);
        } else {
            
            return next.handle(req);
        }
    }
}

export const AuthIntercaptorProvider = {

        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
};

