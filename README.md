# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

# Angular Todo Item Component

A simple Angular component for managing todo items, allowing users to create, edit, and delete tasks.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display a todo item with description and done status.
- Checkbox to mark the item as done.
- Edit the item's description and status.
- Delete the item from the list.
- Responsive UI for managing tasks.

## Technologies Used

- **Frontend Framework:** Angular
- **TypeScript:** For type safety and modern JavaScript features
- **HTML/CSS:** For structuring and styling the component

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/angular-todo-item.git
   ```

2. Navigate to the project directory:
   ```bash
   cd angular-todo-item
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

- The component can be used to manage todo items.
- Each item displays a checkbox, description, and buttons for editing or deleting.
- Clicking the edit button allows modification of the item's description and done status.
- Changes can be saved or canceled.

## Example Usage

To use the `ItemComponent`, include it in your parent component and pass an `Item` object as an input:

```html
<app-item [myItem]="todoItem" (removeEvent)="handleRemove($event)"></app-item>
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

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
