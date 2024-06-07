import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './components/shared/api.service';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductViewComponent, HeaderComponent, HttpClientModule, ReactiveFormsModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomm';
}

