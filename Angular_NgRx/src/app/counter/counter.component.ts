import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

counter = 0;

  changeValue(type:String){
    if(type==='inc') this.counter++;
    else if(type==='dec') this.counter--;
    else this.counter=0;
  }
}
