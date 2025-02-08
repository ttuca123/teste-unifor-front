import { HttpEvent, HttpHandler, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./demo/service/auth.service";

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log(`url Atual ${req.url}`);
  return next(req);
}

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    
        console.log('interceptador http');    
        const authToken = inject(AuthService).getAuthToken();
    
        if(authToken!=null){
            const newReq = req.clone({
                headers: req.headers.append('Authorization', authToken),
            });
            return next(newReq);
        }
        return next(req);
    
}