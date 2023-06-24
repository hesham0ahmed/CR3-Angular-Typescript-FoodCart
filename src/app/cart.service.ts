import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProducts[] = [];

  constructor() { }

  addToCart(product: IProducts) {
    const existingProduct = this.items.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Increment the quantity
    } else {
      product.quantity = 1; // Set the initial quantity to 1
      this.items.push(product); // Add the product to the cart
    }
  }


  getItems() {
    return this.items;
  }

  getItemQuantity(item: IProducts): number {
    return this.items.filter((product) => product.id === item.id).length;
  }

  // TOTAL MULTIPLY WITH QUANTITY
  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    // DISCOUNT OVER 40$
    if (total > 40) {
      const discount = total * 0.15;
      total -= discount;
    }
    // SHOWS THE TOTAL ONLY 2 DIGITS AFTER COMMA
    return +total.toFixed(2);
  }

  // DELETE ITMES AFTER TRASH
  clearCart() {
    this.items = [];
    return this.items;
  }
  // DELETE ITMES AFTER CHECKOUT
  clearCartBuy() {
    this.items = [];
    return this.items;
  }

  // SERVICE FEE 10%
  calculateTotalFee() {
    let total1 = 0;
    for (let val of this.items) {
      total1 = total1 + val.price * 0.1;
    }
    return total1;
  }
  // CALCULATE DISCOUNT
  calculateTotalDiscount() {
    let total2 = 0;
    for (let val of this.items) {
      total2 = total2 + val.price / 0.15;
    }
    return total2;
  }
}