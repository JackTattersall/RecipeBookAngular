import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';

const authRoutes = [
  { path: 'signup', component: SignUpComponent},
  { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}