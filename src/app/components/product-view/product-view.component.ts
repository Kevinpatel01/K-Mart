import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from './productmodule';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [FormsModule, RouterModule, NgFor],
  providers: [ApiService],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
  data: any | product[]
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.displayproducts();
  }

  displayproducts() {
    this.api.getproduct().subscribe((res) => {
      this.data = res;
      console.log(res)
    })
  }
  addtocart(item: product) {
    this.api.addtocart(item);
  }

  removeitem(item: product){
    this.api.removecartitem(item);
  }
}
