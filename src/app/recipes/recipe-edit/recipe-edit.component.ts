import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
    });
  }
}
