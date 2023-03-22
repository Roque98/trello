import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "src/app/components/models/product.model";

export class DataSourceProduct extends DataSource<Product> {

    data = new BehaviorSubject<Product[]>([]);

    connect(): Observable<Product[]> {
        return this.data;
    }

    init(products: Product[]) {
        this.data.next(products);
    }

    getTotal() {
        const products = this.data.getValue();
        return products
            .map(item => item.price)
            .reduce((acc, price) => acc + price, 0);
    }
        
    update(id: Product['id'], changes: Partial<Product>) {
        console.log(id, changes);
        
        const products = this.data.getValue();
        const productIndex = products.findIndex(item => item.id === id);
        if (productIndex !== -1) {
            products[productIndex] = { ...products[productIndex], ...changes };
        }
        this.data.next(products);
    }

    disconnect() { }
}