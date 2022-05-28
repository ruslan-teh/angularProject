import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentsComponent} from "../../components/comment-component/comments/comments.component";
import {CommentComponent} from "../../components/comment-component/comment/comment.component";
import {CommentDetailsComponent} from "../../components/comment-component/comment-details/comment-details.component";
import {CommentService} from "../../services/comment.service";
import {CommentResolver} from "../../services/resolvers/comment.resolver";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService,
    CommentResolver
  ]
})
export class CommentModule { }
