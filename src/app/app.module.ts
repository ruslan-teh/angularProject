import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/user-components/users/users.component';
import { PostsComponent } from './components/post-components/posts/posts.component';
import { CommentsComponent } from './components/comment-components/comments/comments.component';
import { UserComponent } from './components/user-components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './components/post-components/post/post.component';
import { CommentComponent } from './components/comment-components/comment/comment.component';
import { CommentDetailsComponent } from './components/comment-components/comment-details/comment-details.component';
import { PostDetailsComponent } from './components/post-components/post-details/post-details.component';
import { UserDetailsComponent } from './components/user-components/user-details/user-details.component';
import { HeaderComponent } from './components/header/header.component';
import {Route, RouterModule} from "@angular/router";
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Route[] = [
  {
    path: '', component: HomePageComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: ':id', component: CommentDetailsComponent}
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    CommentDetailsComponent,
    PostDetailsComponent,
    UserDetailsComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
