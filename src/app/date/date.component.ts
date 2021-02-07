import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  nowDate!:string;

  constructor() {
    setInterval(()=>{
      let currentDate = new Date();
      this.nowDate = currentDate.toDateString() + ' ' + currentDate.toTimeString();
    },1000);
    
  }

  ngOnInit(): void {
  }

}
