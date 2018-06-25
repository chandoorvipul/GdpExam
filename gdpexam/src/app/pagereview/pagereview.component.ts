import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-pagereview',
  templateUrl: './pagereview.component.html',
  styleUrls: ['./pagereview.component.css']
})
export class PagereviewComponent implements OnInit {

  formData = {}
  discount = 0

  constructor(private http:HttpService) { }

   ngOnInit() {
    this.formData = this.http.getForm()
    var date = new Date(this.formData['PurchaseDate']);
    console.log(date.getUTCDate());  
    this.discount = date.getUTCDate() % 2 === 0 ? 30 : 40
    console.log(this.formData)
  }
}