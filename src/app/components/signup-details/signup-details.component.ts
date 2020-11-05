import { Component, Input, OnInit } from '@angular/core';

import { SignupData } from '../../models/signup-data.model';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'signup-details',
  templateUrl: './signup-details.component.html'
})
export class SignupDetailsComponent implements OnInit {
  signupData: any;

  constructor(private signupService: SignupService, private router: Router) {
    // using route state because BehaviorSubject not working with route for some reason
    this.signupData = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    // this.signupService.getData().subscribe(
    //   result => {
    //  this.signupData = result;
    //   });

  }
  backToHome() {
    this.router.navigate(['']);
  }
}
