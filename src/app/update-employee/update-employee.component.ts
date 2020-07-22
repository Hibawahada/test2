import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Restaurant } from '../restaurant';
import { Observable } from 'rxjs';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  restaurants: Observable<Restaurant[]>;
  id: number;
  employee: Employee;
  restaurant : Restaurant;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService,  private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    this.restaurantService.getRestaurantsList()
    .subscribe( data => {
      this.restaurants = data ;
    });
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        //this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
