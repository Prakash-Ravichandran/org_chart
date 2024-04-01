<h1 align="center">
 EMPLOYEE ORGANIZATION CHART
</h1>

<p align="center">
  The ideal platform to search, filter, drag and drop employees listouted under different managers. 
</p>

## Video Demo

## TechStack Used

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [CSS3](https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/)
- [react-organizational-chart](https://www.npmjs.com/package/react-organizational-chart)
- [Hosting- Netlify](https://www.netlify.com/)

### 1. Setting up the project locally

**To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [yarn](https://yarnpkg.com) installed on your computer)**

1. Fork this repository and clone the project

   ```bash
   git clone https://github.com/Prakash-Ravichandran/org_chart.git
   ```

2. Go to the project directory

   ```bash
   cd org_chart
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the server

   ```bash
   npm run dev
   ```

## The Process

### User Stories

- As a user, I want to be able to navigate to all routes(sidebars) & view all the components.
- As a user, I want to search cryptocurrencies like Bitcoin & view them in detail in `Cryptocurrencies Component`.
- As a user, I want to filter the exchange the currency with amother currency in `Exchange component`.
- As a user, I want to filter the news based on the country in `News Component`.
- As a user, I want to submit the feeback in a form in the `Contact Component`.

### Features

- **Search:** Search funtionality in the app renders the employees based all properties of an employee fetched from mock data.
- **Dropdown:** Dropdown functionality in the app renders the employees based on the designation of an employees fetched from mock data.
- **Drag & Drop:** Drag and Drop functionality changes the employee from reporting to one manager to other.
- **List Out in Card**: The Employee card listouts the details of name, designation, reporting Manager.

### API Services used

- **Coinranking** - [Coinranking](https://coinranking1.p.rapidapi.com)
- **COinbase** - [Exchange](https://api.coinbase.com/v2/exchange-rates)
- **Gnews** - [News](https://gnews.io/api/v4/top-headlines)

### Screenshots

## Current Contributors

<a href="https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Prakash-Ravichandran/react_cryptocurrency_app" />
</a>

## Contact

- Github - [@Prakash-Ravichandran](https://github.com/Prakash-Ravichandran)
- LinkedIn - [@prakash-ravichandran](https://www.linkedin.com/in/prakash-ravichandran/)
- Twitter - [@dev_hustler](https://twitter.com/dev_hustler)

## Show Your Support

Give a ⭐️ if you liked this project!

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
