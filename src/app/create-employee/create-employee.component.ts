import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Observable } from 'rxjs';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  restaurants: Observable<Restaurant[]>;
  employee: Employee = new Employee();
  submitted = false;
restaurant : Restaurant;
  constructor(private employeeService: EmployeeService, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurantsList()
    .subscribe( data => {
      this.restaurants = data ;
    });
 
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
