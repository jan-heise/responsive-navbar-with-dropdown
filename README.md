# Responsive Navbar with Dropdown
#### Based on free sample components of TailwindUI and the TailwindCSS Playground

A responsive navbar from [TailwindUI](https://www.tailwindui.com/) with Dropdowns using [AlpineJS](https://github.com/alpinejs/alpine) and [Feather Icons](https://feathericons.com/) build in the [TailwindCSS Playground](https://github.com/tailwindcss/playground)

## Structure

```public/index.html``` contains all styles and a controlpanel at the bottom

```public/dark.html``` contains only the dark navbar with light dropdowns

```public/dark_full.html``` contains only the dark navbar with dark dropdowns

## To get started:

1. Clone the repository:

    ```bash
    git clone https://github.com/Cricksu/responsive-nav-with-dropdown responsive-nav-with-dropdown

    cd responsive-nav-with-dropdown
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
