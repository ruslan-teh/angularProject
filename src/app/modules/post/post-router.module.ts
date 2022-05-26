import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "../../components/post-components/posts/posts.component";
import {PostDetailsComponent} from "../../components/post-components/post-details/post-details.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PostRouterModule {

}
