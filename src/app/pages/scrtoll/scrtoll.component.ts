import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/models/product.model';

@Component({
  selector: 'app-scrtoll',
  templateUrl: './scrtoll.component.html'
})
export class ScrtollComponent implements OnInit {

  products: Product[] = [];


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(products => {
      this.products = products;
    });
  }

}