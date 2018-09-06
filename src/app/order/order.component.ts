import { Component, OnInit } from '@angular/core';

import {RadioOption} from '../shared/radio/radio-option.model'
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private OrderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(){
    return this.OrderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.OrderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.OrderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.OrderService.remove(item)
  }


}
