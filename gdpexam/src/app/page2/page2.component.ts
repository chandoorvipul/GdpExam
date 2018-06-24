import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
  }

  signin(form){
      var formpart1 = this.http.getForm()
      form.value['features'] = []
      var features = ['GPS',"SecurityLock","CargoMat"]
      for(var ele of features){
          if(form.value[ele]){
            console.log(ele)
            form.value['features'].push(ele)
            console.log(form.value['features'])
          }
      }

      this.http.setForm({...formpart1,...form.value})
      this.http.postService().subscribe(
        res => {
          console.log(res)
          this.router.navigateByUrl('/feedback')
        },
        err => {
            console.log(err)
        }
      )
      
      
  }


}