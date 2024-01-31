import { Component, ViewChild, ElementRef } from '@angular/core';
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
  
  /**
   * get child element "newItem" reference with name "newItemInput"
   * to use it for focusing on addItem()
   * 
   * Note: The ! in the name declaration is called a definite assignment assertion. 
   * This operator tells Typescript that the item field is always initialized 
   * and not undefined, even when TypeScript cannot tell from the 
   * constructor's definition. If this operator is not included in your code 
   * and you have strict TypeScript compilation settings, 
   * the app will fail to compile.
   */
  @ViewChild("newItem") newItemInput! : ElementRef;

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
    else if (this.filter === "active") {
      return this.allItems.filter((item) => item.done == false);
    }
    else {//this.filter === "done"
    return this.allItems.filter((item) => item.done == true);
    }
  }

  addItem(desc: string): void {
    if (!desc) {
      alert("no empty values allowed");
    }
    else {
      let newItem = { description: desc, done: false };
      console.log("newItem", newItem);
      //add newItem at the end of the array
      this.allItems.push(newItem);
      //set input field newItemInput value to empty
      this.newItemInput.nativeElement.value = "";
      //set focus back to input field newItemInput
      this.newItemInput.nativeElement.focus();
      //
    }
  }

  removeItem(data: Item):void {
    //removes 1 item, starting from data's index on allItems array->this.allItems.indexOf(data)
    //ATTENTION!! its sPlice() not slice()
    this.allItems.splice(this.allItems.indexOf(data), 1);
  }
}