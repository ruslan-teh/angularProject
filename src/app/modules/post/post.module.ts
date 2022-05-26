import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "../../components/post-components/posts/posts.component";
import {PostDetailsComponent} from "../../components/post-components/post-details/post-details.component";
import {PostService} from "../../services/post.service";
import {PostRouterModule} from "./post-router.module";
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from "../../components/post-components/post/post.component";



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRouterModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
