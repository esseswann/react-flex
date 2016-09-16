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
 - row:           { flexDirection: row }
 - rowReverse:    { flexDirection: row-reverse }
 - column:        { flexDirection: column }
 - columnReverse: { flexDirection: column-reverse }
 - hStart:        { justifyContent: flex-start }
 - hEnd:          { justifyContent: flex-end }
 - hCenter:       { justifyContent: center }
 - hBetween:      { justifyContent: space-between }
 - hAround:       { justifyContent: space-around }
 - vStretch:      { alignContent: stretch }
 - vCenter:       { alignContent: center }
 - vStart:        { alignContent: flex-start }
 - vEnd:          { alignContent: flex-end }
 - vBetween:      { alignContent: space-between }
 - vAround:       { alignContent: space-around }
 - itemStretch:   { alignItems: stretch }
 - itemCenter:    { alignItems: center }
 - itemStart:     { alignItems: flex-start }
 - itemEnd:       { alignItems: flex-end }
 - baseline:      { alignItems: baseline }
 - noWrap:        { flexWrap: nowrap }
 - wrap:          { flexWrap: wrap }
 - wrapReverse:   { flexWrap: wrap-reverse'}

## TODO
  - Throw error if multiple props from one property are present
  - Item component
  - Rule out lodash.merge for it's big
