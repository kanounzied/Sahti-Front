import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {NgxLoginComponent} from '../login/login.component';
import {NgxRegisterComponent} from '../register/register.component';


export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent, // kenet NbLogin...
      },
      {
        path: 'login',
        component: NgxLoginComponent, // kenet NbLogin...
      },
      {
        path: 'register',
        component: NgxRegisterComponent, // Kenet NbRegister...
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
