import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
  public totalamount: number = 0;
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/"])
      this.api.removeallitems()
    }, 3000)

    //Total amount
    this.totalamount = this.api.calculateprice();

  }
}
