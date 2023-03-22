import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/models/product.model';
import { DataSourceProduct } from './data-source';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct();
  columnsToDisplay = ['id', 'title', 'price', 'cover', 'actions'];
  total = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(products => {
      this.dataSource.init(products);
      this.total = this.dataSource.getTotal();
    });
  }

  update(product: Product) {
    console.log(product);
    
    this.dataSource.update(product.id, { price: 20 });
    this.total = this.dataSource.getTotal();
  }
}
