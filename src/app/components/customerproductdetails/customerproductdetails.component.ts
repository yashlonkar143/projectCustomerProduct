import { Component } from '@angular/core';
import { CustoproService } from '../../services/custopro.service';
import { Customer } from '../../models/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerproductdetails',
  templateUrl: './customerproductdetails.component.html',
  styleUrl: './customerproductdetails.component.css'
})
export class CustomerproductdetailsComponent {

  constructor(private service: CustoproService, private router: Router) {

  }

  customer: Customer = new Customer();
  visit: boolean = false;
  customerDetails(id: string) {
    return this.service.getOneCustomer(Number(id)).subscribe((data) => {
      this.customer = data;
      this.visit = true;

    })
  }
  addProduct() {
    this.router.navigate(['add']);
  }

  addCustomer() {
    this.router.navigate(['addCustomer']);
  }


}
