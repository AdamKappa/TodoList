import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Item } from "../item";


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  editable: boolean = false;
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
   * ............<Item>..............
   */
  @Output() removeEvent = new EventEmitter<Item>();
  //
  deleteItem(data: Item):void {
    //emit the named removeEvent with data:Item to parent component (here AppComponent)
    this.removeEvent.emit(data);
  }

  addNewDescription(desc: string): void{
    if (!desc) {
      alert("no empty values allowed");
    }
    else {
      this.editable = false;
      this.myItem.description = desc;
    }
  }

  cancelEditing(): void {
    this.editable = false;
  }
}