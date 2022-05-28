import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostDetailsComponent} from "../../components/post-component/post-details/post-details.component";
import {PostsComponent} from "../../components/post-component/posts/posts.component";
import {PostComponent} from "../../components/post-component/post/post.component";
import {PostService} from "../../services/post.service";
import {PostResolver} from "../../services/resolvers/post.resolver";


@NgModule({
  declarations: [
    PostDetailsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    PostResolver
  ]
})
export class PostModule { }
