import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';

import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})                                //this inteface
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  //lifecycle method
  ngOnInit() {
     this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish ){
    this.selectedDish = dish;
  }
}
