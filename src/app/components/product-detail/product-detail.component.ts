import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { product } from '../product-view/productmodule';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productdata: any | product;
  showadd: boolean = true;
  showremove: boolean = false;
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('productid')
    console.log('productid is: ', productId)
    productId && this.api.getproductbyid(productId).subscribe((res) => {
      this.productdata = res;
      console.log(this.productdata)
    })
  }

  addtocart(productdata: product) {
    this.showadd = false;
    this.showremove = true;
    this.api.addtocart(productdata)
  }

  buyNow() {

  }

  removeitem(productdata: product) {
    this.showremove = false;
    this.showadd = true;
    this.api.removecartitem(productdata)
  }

}
