import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/models/product.model';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  products: Product[] = [];
  columnsToDisplay = ['id', 'title', 'price', 'cover'];
  total = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(products => {
      this.products = products;
      this.total = this.products
        .map(product => product.price)
        .reduce((acc, price) => acc + price, 0);
    });
  }
}
