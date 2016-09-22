react-flex-bool
====================

Simple React component for creating flex nodes with only boolean props

## Installation
```sh
npm install react-flex-bool
```
## Code Example

```jsx
<Flex
  rowReverse
  hBetween
  vStretch>
  <div>My content</div>
  <div>Another content</div>
</Flex>
```
## Props
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

## TODO
  - Throw error if multiple props from one property are present
  - Item component
