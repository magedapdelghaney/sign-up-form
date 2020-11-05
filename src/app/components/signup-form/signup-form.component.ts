import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from '../../models/country.model';
import { State } from '../../models/state.model';
import { SignupData } from '../../models/signup-data.model';
import { CountriesService } from '../../services/countries.service';
import { SignupService } from '../../services/signup.service';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @Output()
  save = new EventEmitter<SignupData>();
  countriesList: Country[] = [];
  statesList: State[] = [];
  SignupUserData: SignupData = {
    username: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: ''
  };


  constructor(private countriesService: CountriesService, private signupService: SignupService, private router: Router) {
  }
  /**
   * FN for submiting sign-up form controls
   * @param form sign-up form
   */

  submit(form: NgForm) {
    if (form.valid) {
      this.save.emit(form.value);
      this.signupService.saveData(form.value);
      this.router.navigate(['/signup-details'], { state: form.value });
    }

  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(
      data => this.countriesList = data, error => console.log(error));
    this.signupService.getData().subscribe(res => {
      if (res) {
        this.SignupUserData = res;
      }

    });
  }

  /**
   * FN for getting states of selected country
   * @param countryObj selected country id
   */
  onChangeCountry(countryObj) {
    this.statesList = [];
    const countryId = Number(countryObj.target.value);
    this.countriesService.getStates(countryId).subscribe(
      data => {
        this.statesList = data;
      }, error => console.log(error));
  }

}
