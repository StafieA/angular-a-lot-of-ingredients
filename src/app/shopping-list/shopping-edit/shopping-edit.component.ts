import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingService.startEditing.subscribe((index) => {
      this.editedItemIndex = index;
      this.editMode = true;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    console.log('Name= ' + value.name);
    console.log('Amount= ' + value.amount);
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingService.addIngredient(newIngredient);
  }
}
