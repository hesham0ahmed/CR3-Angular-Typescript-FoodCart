import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IProducts[] = [];
  total: number = 0; // TOTAL
  total1: number = 0; // TOTAL WITH TAX
  total2: number = 0; //TOTAL WITH DISCOUNT

  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });



  constructor(private cartService: CartService, private fb: FormBuilder) { }
  // CLEAR CART ON TRASH
  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }
  // CLEAR CART ON CHECKOUT
  clearCartBuy() {
    window.alert('Your Order is Accepted, your Cart will be Cleared');
    this.items = this.cartService.clearCartBuy();
  }
  // ORDER DONE
  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }


  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
    this.total1 = this.cartService.calculateTotalFee();
  }
  orderDone: boolean = false;

  showOrderDoneMessage(): void {
    this.orderDone = true;
  }
}
