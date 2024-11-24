# Chat Demo Frontend

This is the frontend application for the Chat Demo project. It is built using React, TypeScript, and Tailwind CSS, and it communicates with a backend server via Socket.IO to provide real-time chat functionality.

Checkout the [backend API](https://github.com/jonathanherman1/chat-demo-backend).

## Table of Contents

- [Chat Demo Frontend](#chat-demo-frontend)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [License](#license)
  - [Changelog](#changelog)
    - [Launched the first version of the application](#launched-the-first-version-of-the-application)
      - [1.0.0](#100)
        - [Features](#features-1)
        - [Improvements](#improvements)
  - [Roadmap](#roadmap)

## Screenshots

- [Demo Video](https://youtu.be/gaenyhsL5nQ)
- [Empty State](https://drive.google.com/file/d/1gr1-yTLu2YKLaOJLtR0h1Uq18G_uNj5G/view)
- [Empty State - Dark Mode](https://drive.google.com/file/d/1RfR83t4u-yvs3ktX9XUWamNGTmclKbEd/view)
- [Mobile](https://drive.google.com/file/d/12SuMZT9mkExthe4bI7qvUgXx9Irj4Y44/view)
- [Mobile - Dark Mode](https://drive.google.com/file/d/1jS4Y6XjPDFNU3RtEbfLeZUCept6nFGK6/view)

## Features

- Real-time chat using Socket.IO
- Form validation with React Hook Form and Zod
- Responsive design with Tailwind CSS
- Unit and integration tests with Vitest and Testing Library
- End-to-end tests with Cypress

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/jonathanherman1/chat-demo-frontend.git
    cd chat-demo-frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create `.env.production` and `.env.development` files with the following variables (value does not include anything after "="):

    `.env.production`
    ```
    VITE_API_URL=<VERSIONED_API_URL_HERE>
    ```

    `.env.development`
    ```
    VITE_API_URL=http://localhost:3000
    ```


## Usage

To start the development server, run:
```sh
npm run dev
```

To build the project for production, run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```

## Testing
To run unit and integration tests with Vitest, run:

```sh
npm run test
```

To run end-to-end tests with Cypress, run:
```sh
npm run test:e2e
```

To run end-to-end tests in headless mode, run:
```sh
npm run test:e2e:headless
```

## License
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

## Changelog
### Launched the first version of the application
#### 1.0.0

##### Features

- **Feature**: Implemented real-time chat functionality using Socket.IO
- **API**: Added Posts API (without authentication only uses create and read right now)
- **Feature**: Added a feature to list posts
- **Feature**: Added a form to create new posts
- **Styling**: Styled components using Tailwind CSS
- **Styling**: Added a favicon to the application
- **Styling**: Installed NextUI and next-themes for UI components and theming
 

##### Improvements

- **CI/CD**: Set up GitHub Action workflow for continuous integration and deployment
- **Testing**: Added unit and integration tests with Vitest and Testing Library
- **Testing**: Added end-to-end tests with Cypress
- **Code Quality**: Added form validation with React Hook Form and Zod
- **Code Quality**: Added path alias to Vite config for easier imports
- **Code Quality**: Installed Prettier and other ESLint plugins for code formatting and linting

## Roadmap

What features would you like to see?

[Drop us a line.](mailto:jonathan.n.herman@gmail.com)
