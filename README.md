# Angular Todo Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.
A simple Angular application for managing a todo list. Users can add, edit, delete, and mark tasks as complete.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [App Structure](#app-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new todo items with descriptions.
- Edit existing todo items.
- Mark items as done using a checkbox.
- Delete items from the list.
- Responsive design for desktop and mobile.

## Technologies Used

- **Frontend Framework:** Angular
- **Programming Language:** TypeScript
- **HTML/CSS:** For layout and styling
- **Angular CLI:** For project scaffolding and management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdamKappa/TodoList.git
   ```

2. Navigate to the project directory:
   ```bash
   cd TodoList
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Serve the application:
   ```bash
   ng serve
   ```

5. Open your browser and go to `http://localhost:4200`.

## Usage

- Open the application in your browser.
- You can add new todo items by typing a description and pressing Enter.
- Click on the pencil icon to edit an existing item.
- Use the checkbox to mark items as completed.
- Click the delete icon to remove an item from the list.

## App Structure

The main components of the app include:

- **App Component:** The root component of the application.
- **Item Component:** A standalone component to represent each todo item. This component includes:
  - Checkbox to mark the item as done.
  - Input field to edit the item’s description.
  - Buttons to save changes or cancel editing.
  - Functionality to delete the item.

### Item Component Code Overview

```typescript
import { Component, Input, Output, EventEmitter, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterViewChecked {
  // Component logic goes here...
}
```

### Item Template

```html
<div *ngIf="editable != true" class="item-wrapper">
    <div>
        <input #doneCheckbox type="checkbox" (change)="setDone(doneCheckbox.checked)">
        <label class="item-desc" [class.done]="myItem.done">{{myItem.description}}</label>
    </div>
    <div class="item-btn-wrapper">
        <button class="item-btn" (click)="editable = true;">📝</button>
        <button class="item-btn" (click)="deleteItem(myItem)">❌</button>
    </div>
</div>
<div *ngIf="editable === true">
    <h5 class="edit-title">Edit Item {{myItem.description}}</h5>
    <div class="edit-wrapper">
        <input #isDone type="checkbox">
        <label class="item-desc">set as done</label>
        <input
            #newDesc
            name="new-description"
            id="new-description"
            class="new-description"
            placeholder="type a new description"
            (keyup.enter)="addNewData(newDesc.value, isDone.checked)"
            value="{{myItem.description}}"
            autofocus
        />
        <button class="edit-btn" (click)="addNewData(newDesc.value,isDone.checked)">Save</button>
        <button class="edit-btn" (click)="cancelEditing()">Cancel</button>
    </div>
</div>
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
