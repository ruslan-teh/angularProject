import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

import {HomePageComponent} from "./components/home-page-components/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(value => value.CommentModule)}
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

