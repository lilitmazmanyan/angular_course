import { Component } from "@angular/core";
import { Car } from "./car";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  carP: Car = {
    make: "BMW",
    color: "BLACK",
    year: 2019,
    doors: 2
  }

  bar(car: Car) {
    console.log(car);
  }
}
