# Responsive Navbar with Dropdown
#### Based on the TailwindCSS Playground

A responsive navbar with dropdowns using [AlpineJS](https://github.com/alpinejs/alpine) and [Heroicons](https://github.com/refactoringui/heroicons) build in the [TailwindCSS Playground](https://github.com/tailwindcss/playground)

The Tailwind Config got extended by the following line to include system colorscheme support
```
screens: {
    'dark-mode': {'raw': '(prefers-color-scheme: dark)'},
},
```

## Features
- Fully Responsive
- Prefers-Color-Scheme Support
- Side- and Topbar

## Changelog
11th of April 2020 - Added Sidebar (./public/sidebar.html) and moved Navbar to seperate file (.public/navbar.html)

09th of April 2020 - Completly redone the Navbar to remove tailwindUI component and to remove duplicate divs

## Structure

Navbar: [./public/navbar.html](https://github.com/jan-heise/responsive-navbar-with-dropdown/blob/master/public/navbar.html)

Sidebar: [./public/sidebar.html](https://github.com/jan-heise/responsive-navbar-with-dropdown/blob/master/public/sidebar.html)

## Preview
https://responsive-navbar-with-dropdown.netlify.com/

## To get started:

1. Clone the repository:

    ```bash
    git clone https://github.com/jan-heise/responsive-navbar-with-dropdown responsive-navbar-with-dropdown

    cd responsive-navbar-with-dropdown
    ```

Instructions from the official [TailwindCSS Playground Repo](https://github.com/tailwindcss/playground)

2. Install the dependencies:

    ```bash
    # Using npm
    npm install

    # Using Yarn
    yarn
    ```

3. Start the development server:

    ```bash
    # Using npm
    npm run serve

    # Using Yarn
    yarn run serve
    ```

    Now you should be able to see the project running at localhost:8080.

4. Open `public/index.html` in your editor and start experimenting!

## Building for production

Even though this isn't necessarily a starter kit for a proper project, we've included an example of setting up both [Purgecss](https://www.purgecss.com/) and [cssnano](https://cssnano.co/) to optimize your CSS for production.

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn run production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.

## Build with
- [TailwindCSS](https://tailwindcss.com) and the [Tailwind Playground](https://github.com/tailwindcss/playground)
- [AlpineJS](https://github.com/alpinejs/alpine)
- [Heroicons](https://github.com/refactoringui/heroicons)
