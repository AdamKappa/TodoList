import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  /**
   * Note: The ! in the class's property declaration is called a definite assignment assertion. 
   * This operator tells Typescript that the item field is always initialized 
   * and not undefined, even when TypeScript cannot tell from the 
   * constructor's definition. If this operator is not included in your code 
   * and you have strict TypeScript compilation settings, 
   * the app will fail to compile.
   */
  @Input() myItem!: Item;//this line says I'm gonna have a incomming property with name myItem and type Item (as setted on item.ts which I import first)
  
  /**
   * we have to emit the button click event from itemComponent to parent(AppComponent)
   */
  @Output() removeEvent = new EventEmitter<Item>();
  //
  deleteItem(data: Item) {
    console.log("deleting event on ItemComponent");
    this.removeEvent.emit(data);
  }

}