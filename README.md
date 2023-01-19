# react-animated-rating

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

**react-animated-rating** is a WCAG compliant animated rating React component.

## Demo

See  [react-animated-rating](https://react-animated-rating.netlify.app/)  in action.

## Installation

Install the package using yarn or npm:

```bash
yarn add react-animated-rating
```

OR

```bash
npm install react-animated-rating
```

## Usage

Add `Rating` to your component:

```
import Rating from 'react-animated-rating';

<Rating onChange={(value: number) => { // do something with rating value }} />
```

## Properties

| Property | Type | Default | Description |
|--|--|--|--|
| `animation` | boolean | true | Whether icon animation is enabled or not. |
| `count` | number | 5 | Number of icons. |
| `filled` | number | 0 | Number of filled icons. |
| `icon` | ReactNode | - | Embed SVG element as a React node. |
| `size` | string | "1.5em" | Font size of the SVG icon (Default *width = 1em* and *height = 1em*. Therefore, if *size = 1.5em*, then *width = 24px* and *height = 24px*). **Does not work if the property `icon` is set. Only works with the default star icon.** |
| `wrapperClassName` | string | - | Wrapper class for the Rating component. |

## Callbacks

| Callback | Type | Description |
|--|--|--|
| `onChange` | function (value) {} | Returns the rating `value` when the icon is clicked. |

## Change Icon Color

The CSS root variable `--icon-color` depicts the color of the SVG icon. 

To change its color, specify the `wrapperClassName` and override the `--icon-color` variable as shown below.

**JSX**
```
import Rating from 'react-animated-rating';

<Rating wrapperClassName="icon-red" />
```

**CSS**
```
.icon-red { --icon-color: red; }
```

[npm-url]: https://www.npmjs.com/package/react-animated-rating
[npm-image]: https://img.shields.io/npm/v/react-animated-rating
[github-license]: https://img.shields.io/github/license/sandra-lewis/react-animated-rating
[github-license-url]: https://github.com/sandra-lewis/react-animated-rating/blob/master/LICENSE
[github-build]: https://github.com/sandra-lewis/react-animated-rating/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/sandra-lewis/react-animated-rating/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-animated-rating