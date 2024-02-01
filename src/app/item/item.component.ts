import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements AfterViewChecked {
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
  @ViewChild("doneCheckbox") doneOuterCheckbox:any; 
  @ViewChild("isDone") doneEditCheckbox: any;

  ngAfterViewChecked() {
    console.log("Check:Editable",this.editable);
    if (!this.editable) {
      console.log("Check:Out", this.doneOuterCheckbox.nativeElement.checked);
      this.doneOuterCheckbox.nativeElement.checked = this.myItem.done;
      console.log("--Check:Out", this.doneOuterCheckbox.nativeElement.checked);
    }
    if (this.editable) {
      console.log("Check:Edit", this.doneEditCheckbox.nativeElement.checked);
      this.doneEditCheckbox.nativeElement.checked = this.myItem.done;
      console.log("--Check:Edit", this.doneEditCheckbox.nativeElement.checked);
    }    
  }

  deleteItem(data: Item):void {
    //emit the named removeEvent with data:Item to parent component (here AppComponent)
    this.removeEvent.emit(data);
  }

  addNewData(desc: string, isDone:boolean): void{
    if (!desc) {
      alert("no empty values allowed");
    }
    else {
      this.editable = false;
      this.myItem.description = desc;
      this.myItem.done = isDone;
    }
  }

  cancelEditing(): void {
    this.editable = false;
  }

  setDone(isChecked: boolean) {
    console.log("DOM.checked::",isChecked);
    if(isChecked){
      this.myItem.done = true;
    }
    else {
      this.myItem.done = false;
    }
    console.log("OBJECT.done:: ", this.myItem.done);
  }
}