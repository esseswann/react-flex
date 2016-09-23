react-flex-bool
====================

Simple React component for creating flex nodes with only boolean props

[![npm version](https://badge.fury.io/js/react-flex-bool.svg)](https://badge.fury.io/js/react-flex-bool)

## Installation
```sh
npm install react-flex-bool
```
Code is not minified! Use preferable minifier during project compilation

## Code Example

```jsx
<Flex
  rowReverse
  hBetween
  vStretch>
  <div>My content</div>
  <div>Another content</div>
  <Item
    grow={2}
    order={2}
    onClick={() => alert('Hi!')}>
    Content inside Item component
  </Item>
</Flex>
```
Note that Flex and Item can receive common props

## Flex props
| CSS Property | CSS Value | Boolean prop |
| --- | --- | --- |
| flex-direction | row | row |
| flex-direction | row-reverse | rowReverse |
| flex-direction | column | column |
| flex-direction | column-reverse | columnReverse |
| justify-content | flex-start | hStart |
| justify-content | flex-end | hEnd |
| justify-content | center | hCenter |
| justify-content | space-between | hBetween |
| justify-content | space-around | hAround |
| align-content | stretch | vStretch |
| align-content | center | vCenter |
| align-content | flex-start | vStart |
| align-content | flex-end | vEnd |
| align-content | space-between | vBetween |
| align-content | space-around | vAround |
| align-items | stretch | itemStretch |
| align-items | center | itemCenter |
| align-items | flex-start | itemStart |
| align-items | flex-end | itemEnd |
| align-items | baseline | baseline |
| flex-wrap | nowrap | noWrap |
| flex-wrap | wrap | wrap |
| flex-wrap | wrap-reverse | wrapReverse |

# Item props

| CSS Property | Prop | PropType |
| --- | --- | --- |
| flex-grow | grow | number |
| flex-shrink | shrink | number |
| flex-basis | basis | string or number |
| align-self | align | enum |
| order | order | number |

## TODO
  - Throw error if multiple props from one property are present
