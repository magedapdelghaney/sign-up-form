import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupDetailsComponent } from './components/signup-details/signup-details.component';
import { FieldmatchesDirective } from './validators/fieldmatches.directive';
import { ValidateEqualModule } from 'ng-validate-equal';

enum RoutePaths {
  SignupForm = 'signup-form',
  SignupDetails = '',
}

export const appRoutes: Routes = [
  { path: '', component: SignupFormComponent },
  { path: 'signup-details', component: SignupDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupDetailsComponent,
    FieldmatchesDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
