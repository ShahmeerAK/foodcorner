import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods: Foods[] = [];
  currentRate: number = 3;
  constructor(private fs: FoodService) {

  }
  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }

}
