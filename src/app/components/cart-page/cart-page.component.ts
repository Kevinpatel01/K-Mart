import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { NgFor, NgIf } from '@angular/common';
import { product } from '../product-view/productmodule';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, ReactiveFormsModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  showproduct: any = [];
  public totalamount: number = 0;
  public addressform = false;
  myform: FormGroup | any;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.products().subscribe((res) => {
      this.showproduct = res;
      this.totalamount = this.api.calculateprice();
      console.log("total amount is : ", this.totalamount)
    })
    //forms
    this.myform = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })
  }

  deleteitem(item: product) {
    this.api.removecartitem(item)
  }

  Empty() {
    this.api.removeallitems();
  }

  cancel() {
    this.addressform = false
    this.myform.reset();
  }

  onsubmit() {
    this.myform.value;  
    console.log(this.myform.value)
    this.myform.reset();
  }
}
