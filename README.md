react-flex-bool
====================

Simple React component for creating flex nodes with only boolean props

## Installation
```sh
npm install react-flex-bool
```
## Code Example

```js
<Flex
  rowReverse
  hBetween
  vStretch>
  <div>My content</div>
  <div>Another content</div>
</Flex>
```
## Props
 | Boolean prop | CSS Property | CSS Value |
 | - | - | - |
 | flexDirection | row | row           |
| flexDirection | row-reverse | rowReverse    |
| flexDirection | column | column        |
| flexDirection | column-reverse | columnReverse |
| justifyContent | flex-start | hStart        |
| justifyContent | flex-end | hEnd          |
| justifyContent | center | hCenter       |
| justifyContent | space-between | hBetween      |
| justifyContent | space-around | hAround       |
| alignContent | stretch | vStretch      |
| alignContent | center | vCenter       |
| alignContent | flex-start | vStart        |
| alignContent | flex-end | vEnd          |
| alignContent | space-between | vBetween      |
| alignContent | space-around | vAround       |
| alignItems | stretch | itemStretch   |
| alignItems | center | itemCenter    |
| alignItems | flex-start | itemStart     |
| alignItems | flex-end | itemEnd       |
| alignItems | baseline | baseline      |
| flexWrap | nowrap | noWrap        |
| flexWrap | wrap | wrap          |
| flexWrap | wrap-reverse | wrapReverse   |

## TODO
  - Throw error if multiple props from one property are present
  - Item component
  - Rule out lodash.merge for it's big
