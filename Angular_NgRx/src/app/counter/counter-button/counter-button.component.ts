import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

@ Output() counter =new EventEmitter<string>();

onIncrement(){
this.counter.emit('inc');
}

onDecrement(){
this.counter.emit('dec');
}

onReset(){
this.counter.emit('reset');
}

}
