import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Navigation, Router} from "@angular/router";
import {IComment} from "../../../models";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['data'] as IComment;
      // console.log(this.router.getCurrentNavigation()?.extras.state?.['data'] as IComment);
    })
  }

  ngOnInit(): void {

  }

}
