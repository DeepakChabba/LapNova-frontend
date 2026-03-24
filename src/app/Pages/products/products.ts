import { Component } from '@angular/core';
import { ProductService } from '../../Services/product-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

 constructor(private productServices: ProductService){};
  ngOnInit()
  {
   this.getAllProduct();  // this call for get all the product whrn page load
  }

  getAllProduct()
  { 
   this.productServices.getProduct().subscribe({
    next:(response:any)=>
      {
        console.log("response",response)
      },
    error:(err)=>{
      console.log("api not fetch:" ,err)
    }
   })
  }
}
