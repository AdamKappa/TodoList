import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
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

  addItem(desc:string): void {
    let newItem = { description: desc, done: false };
    console.log("newItem",newItem);
    this.allItems.push(newItem);
  }   

}