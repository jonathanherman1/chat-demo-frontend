# Chat Demo Frontend

This is the frontend application for the Chat Demo project. It is built using React, TypeScript, and Tailwind CSS, and it communicates with a backend server via Socket.IO to provide real-time chat functionality.

Check out the <a href="https://github.com/jonathanherman1/chat-demo-backend" _target="blank" rel="noopener noreferrer">backend API</a>.

## Table of Contents

- [Chat Demo Frontend](#chat-demo-frontend)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployment](#deployment)
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

    Check the big green button in GitHub!

    You can use HTTPS:

    ```sh
    git clone https://github.com/jonathanherman1/chat-demo-frontend.git
    cd chat-demo-frontend
    ```

    or you can use the GitHub CLI

    ```sh
    gh repo clone jonathanherman1/chat-demo-frontend
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

To build the project for production (outputs built files to `/dist`), run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```

To preview the production build on a device on your local network:

1. Add a `.env.device` file in the root of the repo

    ```
    VITE_API_URL=http://<YOUR_IP_ADDRESS>:3000
    ```

2. Build the app


3. Run the command to launch a build that's visible to the local network

    ```sh
    npm run preview:device
    ```

## Deployment

**<a href="https://chat-demo-frontend.vercel.app/" _target="blank" rel="noopener noreferrer">View a running version here!</a>**

(Frontend deployed on <a href="https://vercel.com" _target="blank" rel="noopener noreferrer">Vercel</a>, Backend deployed on <a href="https://railway.app" _target="blank" rel="noopener noreferrer">Railway</a>)

You can choose to deploy with the service of your choice.

The main thing is to make sure that you set an environment variable `VITE_API_URL` to the newly hosted backend base route (no trailing slashes!).

Note: It may make sense to deploy the backend first, but you can do this in either order. You will just need to set temporary environment variable(s) in one or the other until that service is deployed.


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


Notes:

As this app expands, we can add in routing with React Router Dom, better API handling with TanStack Query, global state management with Zustand, pre-commit hooks with Husky etc.

Paying for MongoDB would allow listening to Change Streams which would allow the app to dynamically update the list if there were database-driven changes.
