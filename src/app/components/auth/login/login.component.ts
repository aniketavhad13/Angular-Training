import { AuthService } from './../../../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl: string;

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams['returnUrl']){
      this.returnUrl = this.route.snapshot.queryParams['returnUrl']
    }
  }

  onSubmit(form) {
    if (!form.valid) {
      alert('Username or Password is required');
    } else {
      // this.authService.login(this.model).subscribe(success => {
      //   console.log(success);
      //   localStorage.setItem("access_token", "dhfdhf");
      // }
      // )

      localStorage.setItem("access_token", "dhfdhf");

      this.router.navigate([this.returnUrl ? this.returnUrl : 'two-way-binding'])

    }
  }

}
