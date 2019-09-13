import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* If headers not present then set the authorisation headers for elegant request */

    this.requests.push(req);

    return Observable.create(observer => {
      const subscription = next.handle(req)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.isLoaderDisplay(req);
              observer.next(event);
            }
          },
          err => {
            this.isLoaderDisplay(req);
            observer.error(err);

            if (err instanceof HttpErrorResponse) {

              switch (err.status) {

                case 401:
                  this.router.navigate(['lazy-load-module/login']);
                  break;

                default:
                  break;
              }
            }
          },
          () => { this.isLoaderDisplay(req); observer.complete(); });
      // teardown logic in case of cancelled requests
      return () => {
        this.isLoaderDisplay(req);
        subscription.unsubscribe();
      };
    });

  }

  isLoaderDisplay(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    // this.commonService.isLoading.next(this.requests.length > 0);
  }

}
