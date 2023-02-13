import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id: 1,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food1.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 2,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food2.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 3,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food3.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 4,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food4.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 5,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food5.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 6,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food6.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 7,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food7.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 8,
        price: 10,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fast', 'lunch'],
        imgUrl: '/assets/food8.jpg',
        cookTime: '10-20',
        origins: ['italy'],
      },
    ];
  }
}
