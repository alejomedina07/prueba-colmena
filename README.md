# Prueba Colmena

Prueba Colmena is a project that utilizes various web development technologies to create a web application. This README provides an overview of the project structure and instructions for development and deployment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
    - [Development Dependencies](#development-dependencies)
    - [Scripts](#scripts)
- [License](#license)

## Installation

Before you can start working with this project, you need to install its dependencies. Make sure you have Node.js and npm (Node Package Manager) installed on your system.

To install the project dependencies, run:


```bash
npm install
```



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### or with docker


```bash
docker build -t prueba-colmena .
# after 
docker run -p 3000:3000 -d prueba-colmena
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Development

### Development Dependencies

- **@types/node**, **@types/react**, **@types/react-dom**: TypeScript type definitions for Node.js, React, and ReactDOM.
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**: Linting tool for JavaScript and TypeScript.
- **eslint-config-next**: ESLint configuration for Next.js projects.
- **postcss**: A tool for transforming styles with JavaScript plugins.
- **tailwindcss**: A CSS framework for rapidly building custom user interfaces.

### Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
