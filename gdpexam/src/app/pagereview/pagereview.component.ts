import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-pagereview',
  templateUrl: './pagereview.component.html',
  styleUrls: ['./pagereview.component.css']
})
export class PagereviewComponent implements OnInit {

  formData: {};

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    console.log(this.formData)
  }

}