# Pages and forms demo

Example repo with page component and nested form examples

## Getting started

```sh
pnpm install
pnpm dev
```

Navigate to [http://localhost:4200](http://localhost:4200)

## Pieces

### Pages

In this repo, ember routes are responsible for loading data in their model hooks. Nothing else happens in the route. Rendering, user interaction, and any synthesis of properties (i.e. output of `getters`) happens in the components.

### Nested forms

This demo uses plain HTML and JS forms to handle data submission. Since the form only cares about the _end result_ of rendering, you can nest the form elements in child components without the need to pass update functions around. 

There are limitations to this pattern (i.e. it's harder to validate changes centrally) but this lets for some powerful composition of forms without a ton of extra JS and Ember code to support it. See the user [create](./app/components/pages/users/create.js)/[update](./app/components/pages/users/update.js) page components for more specifics