import { Component } from '@angular/core';
import { CustoproService } from '../../services/custopro.service';
import { Product } from '../../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  constructor(private service:CustoproService, private router:Router){

  }

  product =new Product();

  onSubmit(){
    this.save();

  }
  save(){
    this.service.createProduct(this.product).subscribe();
    // this.router.navigate(['/'])
    this.goto();
  }

  goto(){
    this.router.navigate(['/']);
  }
}
