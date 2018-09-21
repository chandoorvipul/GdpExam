import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
  }

  signin(form){
    this.http.setForm(form.value)
    console.log(Object.keys(form.value))
      for(let val of Object.keys(form.value)){
        console.log(val)
        if(form.value[''+val+''].length === 0){
          window.alert("enter all required fields")
          return;
        }
      }

    this.router.navigateByUrl('/part2')
  }

}
