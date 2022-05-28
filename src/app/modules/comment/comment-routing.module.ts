import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "../../components/comment-component/comments/comments.component";
import {CommentComponent} from "../../components/comment-component/comment/comment.component";
import {CommentDetailsComponent} from "../../components/comment-component/comment-details/comment-details.component";
import {CommentResolver} from "../../services/resolvers/comment.resolver";

const routes: Routes = [
  {path: '', component: CommentsComponent, children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {data: CommentResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
