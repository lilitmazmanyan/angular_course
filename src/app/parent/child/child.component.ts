import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from "../car";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() car!: Car;

  @Output() carEventEmitter: EventEmitter<Car> = new EventEmitter<Car>();

  carNew: Car = {
    make: "BMW",
    color: "Yellow",
    year: 2020,
    doors: 4
  };

  ngOnInit(): void {
    this.carEventEmitter.emit(this.carNew)
  }
}
