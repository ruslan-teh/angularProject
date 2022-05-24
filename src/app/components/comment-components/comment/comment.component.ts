import {Component, Input, OnInit} from '@angular/core';
import {IComment, IUser} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  detailsComment(comment: IComment) {
    this.router.navigate([comment.id], {relativeTo: this.activatedRoute, state: {data: comment}});
  }
}
