import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentService} from "../../services/comment.service";
import {CommentDetailsComponent} from "../../components/comment-components/comment-details/comment-details.component";
import {CommentsComponent} from "../../components/comment-components/comments/comments.component";
import {CommentComponent} from "../../components/comment-components/comment/comment.component";
import {HttpClientModule} from "@angular/common/http";
import {CommentRouterModule} from "./comment-router.module";


@NgModule({
  declarations: [
    CommentDetailsComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRouterModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule {
}
