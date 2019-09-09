import { AuthService } from './../../../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (!form.valid) {
      alert('Username or Password is required');
    } else {
      this.authService.login(this.model).subscribe(success => {
        console.log(success);
      }
      )

    }
  }

}
