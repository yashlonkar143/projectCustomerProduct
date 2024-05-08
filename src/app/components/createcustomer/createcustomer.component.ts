import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Customer } from '../../models/Customer';
import { Product } from '../../models/Product';
import { CustoproService } from '../../services/custopro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrl: './createcustomer.component.css'
})
export class CreatecustomerComponent {

  custo=new Customer();
  public products: Observable<Product[]> =of([]);

  constructor(private service:CustoproService,private router:Router){

  }

  ngOnInit(){
    this.getAll();

  }

  getAll(){
    this.products=this.service.getAllProducts();
  }

  onSubmit(){
    this.save();
  }
  save(){
    this.service.createCustomer(this.custo).subscribe();
    this.gotoHome();
  }
  gotoHome()
  {
    this.router.navigate(['/']);
  }

  addItemProduct(id:string)
  {
    this.products.pipe(
      map(productList => productList[Number(id)])
    ).subscribe(
      selectedProduct => {
        this.custo.products.push(selectedProduct);
      }
    );
  }

}
