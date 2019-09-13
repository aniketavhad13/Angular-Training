import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* If headers not present then set the authorisation headers for elegant request */
    if (req.headers instanceof HttpHeaders) {
      if (req.headers.keys().length == 0) {
        var authReq = req.clone({
          headers: new HttpHeaders({
            "Authorization": "Bearer ",
            "Content-Type": "application/json"
          })
        });
      }
    }

    this.isLoaderDisplay(true);

    return next.handle(authReq)
      .do(
        (response) => {
          if (response instanceof HttpResponse) {
            this.isLoaderDisplay(false);
          }
        },
        (err) => {
          this.isLoaderDisplay(false);

          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401: // Token expired
                break;
              default:
                break;
            }
          }
        },
        () => { this.isLoaderDisplay(false); });

  }

  isLoaderDisplay(flag) {
    // this.commonService.isLoading.next(flag);
  }

}
