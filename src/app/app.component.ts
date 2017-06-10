import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  customer: Customer;

  constructor() {
    this.name = 'my name';
    this.customer = {
      name: 'bee',
      ages: 12,
      gender: 'Male'
    };
  }

  alert(input1: string) {
    window.alert(input1);
  }

  changeGender(gender: string) {
    this.customer.gender = gender;

  }
}



interface Customer {
  ages: number;
  name: string;
  gender: string;
}


