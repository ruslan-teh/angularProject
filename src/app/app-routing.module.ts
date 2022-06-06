import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      {
        path: 'login', loadChildren: () => import('./modules/login/login.module').then(value => value.LoginModule)
      },
      {
        path: 'auth', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)
      },
      {
        path: 'cars', loadChildren: () => import('./modules/car/car.module').then(value => value.CarModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
