import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({data}) => this.post = data)
  }

  ngOnInit(): void {
  }

}
