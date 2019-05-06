import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface ProfileInterface {
	picture: string;
	email: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  loginForm: FormGroup;
  authenticated: boolean;
  profile: ProfileInterface;

  constructor(fb: FormBuilder, public http: HttpClient) {
    if (localStorage.getItem('jwt')) {
      this.authenticated = true;
      this.profile = JSON.parse(localStorage.getItem('profile'));
    }
    this.loginForm = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submitForm(value: any) {
    const form = {
      client_id: environment.auth0ClientId,
      username: value.email,
      password: value.password,
      connection: environment.auth0ConnectionName,
      grant_type: environment.auth0Password,
      scope: environment.auth0Scope
    };

    this.http
      .post(environment.auth0Domain + '/oauth/ro', form)
      .subscribe((res: any) => {
        const data = res.json();
        if (data.id_token) {
          localStorage.setItem('jwt', data.id_token);
          this.getUserInfo(data);
        }
      });
  }

  getUserInfo(data: any) {
    const form = { id_token: data.id_token };

    this.http
      .post(environment.auth0Domain + '/tokeninfo', form)
      .subscribe((res: any) => {
        const userInfo = res.json();
        this.profile = userInfo;
        localStorage.setItem('profile', JSON.stringify(userInfo));
        this.authenticated = true;
        this.loginForm.reset();
      });
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('profile');
    this.authenticated = false;
  }
}
