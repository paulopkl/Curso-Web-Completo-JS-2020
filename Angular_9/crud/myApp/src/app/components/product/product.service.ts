import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// This can be inject into another class
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = 'http://localhost:3000';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'close X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products/${product.id}`, product)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  removeById(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/products/${id}`)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

}
