import { Component, OnInit } from '@angular/core';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private signupService: SignupService) {

  }

  ngOnInit() {
    // this.signupService.getData().subscribe(res => console.log(res));
  }

}
