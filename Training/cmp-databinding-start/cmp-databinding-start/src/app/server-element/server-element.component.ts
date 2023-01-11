import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None//you can also use Emulated and Native
  
})
export class ServerElementComponent implements OnInit,OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log('cunstructor is used')
   }
   ngOnChanges(changes:SimpleChanges): void {
    console.log('ngOnChanges is used')
    console.log(changes);  
   }

  ngOnInit(): void {
    console.log('ngOnInit is used')
  }

}
