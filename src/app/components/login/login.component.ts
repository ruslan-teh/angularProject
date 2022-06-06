import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  loginUser(): void {
    const rawValue = this.form.getRawValue();
    this.authService.login(rawValue).subscribe(value => {
      this.authService.setToken(value)
      this.router.navigate(['cars'])
    })
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }
}
