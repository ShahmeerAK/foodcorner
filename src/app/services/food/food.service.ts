import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    if (tag = 'all')
      return this.getAll();
    else
      return this.getAll().filter(food => food.tags?.includes(tag))
    //
  }
  getAllTag(): Tag[]{
    return [
      {
        name: 'all',
        count: 8,
      },
      {
        name: 'fastfood',
        count: 2,
      },
      {
        name: 'drink',
        count: 1,
      },
      {
        name: 'breakfast',
        count: 2,
      },
      {
        name: 'lunch',
        count: 4,
      },
      {
        name: 'dinner',
        count: 1,
      },
      {
        name: 'sweet',
        count: 1,
      },
      {
        name: 'healthy',
        count: 4,
      }
    ];
   }

  getAll():Foods[]{
    return [
      {
        id: 1,
        price: 13,
        name: 'Burger',
        favorite: false,
        star: 4.5,
        tags: ['fastfood', 'lunch'],
        imgUrl: '/assets/food1.jpg',
        cookTime: '10-20',
        origins: ['Mexico'],
      },
      {
        id: 2,
        price: 15,
        name: 'Drink',
        favorite: false,
        star: 4.5,
        tags: ['drink'],
        imgUrl: '/assets/food2.jpg',
        cookTime: '10-20',
        origins: ['US'],
      },
      {
        id: 3,
        price: 10,
        name: 'Vegetable',
        favorite: false,
        star: 4.5,
        tags: ['healthy', 'lunch'],
        imgUrl: '/assets/food3.jpg',
        cookTime: '10-20',
        origins: ['UK'],
      },
      {
        id: 4,
        price: 10,
        name: 'Egg',
        favorite: false,
        star: 4.5,
        tags: ['healthy', 'breakfast'],
        imgUrl: '/assets/food4.jpg',
        cookTime: '10-20',
        origins: ['Italy'],
      },
      {
        id: 5,
        price: 10,
        name: 'Cake',
        favorite: false,
        star: 4.5,
        tags: ['sweet', 'dinner'],
        imgUrl: '/assets/food5.jpg',
        cookTime: '10-20',
        origins: ['France'],
      },
      {
        id: 6,
        price: 10,
        name: 'Fruit',
        favorite: false,
        star: 4.5,
        tags: ['healthy', 'breakfast'],
        imgUrl: '/assets/food6.jpg',
        cookTime: '10-20',
        origins: ['Autrailia'],
      },
      {
        id: 7,
        price: 10,
        name: 'Pizza',
        favorite: false,
        star: 4.5,
        tags: ['fastfood', 'lunch'],
        imgUrl: '/assets/food7.jpg',
        cookTime: '10-20',
        origins: ['Italy'],
      },
      {
        id: 8,
        price: 10,
        name: 'Chicken Vagetables',
        favorite: false,
        star: 4.5,
        tags: ['healthy', 'lunch'],
        imgUrl: '/assets/food8.jpg',
        cookTime: '10-20',
        origins: ['US'],
      },
    ];
  }
}
