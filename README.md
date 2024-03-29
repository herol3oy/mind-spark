# 🧡 Mindspark - Random Quote Generator

Mindspark is a Next.js app that enables users to generate a random quote based on selected category. Additionally, users have the option to like and add the quotations that they come across to their favorites.

## Requirements to install, run, build and test the app

- Node.js (version 14 or above)
- npm

## Install the project dependencies:

```bash
npm install
```

## Running the Development Application

```bash
npm run dev
```

> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building the Application

```bash
npm run build
```

## Starting the Built Application

```bash
npm run start
```

> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the Tests

```bash
npm run test
```

## Project Structure

The app follows Next.js project structure, which is automatically set up by the `npx create-next-app@latest` command.

- components/: Reusable React components used throughout the application
- constants/: Constant values
- context/: App context being shared throughout the application
- pages/: The pages of the application
- public/: Stores static assets such as `svg` icons and `favicon`
- styles/: Tailwind CSS configuration
- tests/: The test files for the application
- types/: Shared TypeScript type definitions
- utils/: Utility functions

## State Management

- `useState`
- `useContext`

## API Usage
Quotable API Github Repository:
```bash 
https://github.com/lukePeavey/quotable/
```

Base url:
```bash
https://api.quotable.io
```
The API provides a random quote with specific tags. To fetch a random quote with the `Technology` and `Wisdom` tags, we send a `GET` request to the following endpoint:
```bash
GET /quotes/random?tags=technology
```

The structure of the response is as following: 

```json
{
  _id: string
  content: string
  author: string
  authorSlug: string
  length: number
  tags: string[]
}
```

## Tech Stacks and utility tools

- Next.js
- React
- Tailwind CSS
- Vitest Testing Framework
- Git flow

## Reference
- Setup Vitest Testing Framework: **Brian Holt** (FrontendMasters - Intermediate React, v5)
[https://frontendmasters.com/courses/intermediate-react-v5/setup-react-testing-library-vitetest/](https://frontendmasters.com/courses/intermediate-react-v5/setup-react-testing-library-vitetest/)

- All the implemented code is made by me except settting up the testing framework which I followed the instructions from the above source


## Screenshots

Initial app view
<img src="./public/screenshots/mindspark-screenshot-01.png" width="1920">

Displaying a fetched quote
<img src="./public/screenshots/mindspark-screenshot-02.png" width="1920">

Favorite quotes in the sidebar
<img src="./public/screenshots/mindspark-screenshot-03.png" width="1920">
