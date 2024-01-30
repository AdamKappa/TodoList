import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ItemComponent } from './item/item.component';
import { Item } from "./item"


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "TodoList app";
  filter: "all" | "active" | "done" = "all";
  

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];
  
  getItems() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) => item.done == true);//add condition for done= false
  }

  addItem(desc: string): void {
    if (!desc) {
      alert("no empty values allowed");
    }
    else {
      let newItem = { description: desc, done: false };
      console.log("newItem", newItem);
      this.allItems.push(newItem);
    }
  }

  removeItem(data: Item):void {
    //removes 1 item, starting from data's index on allItems array->this.allItems.indexOf(data)
    //ATTENTION!! its sPlice() not slice()
    this.allItems.splice(this.allItems.indexOf(data), 1);
  }
}