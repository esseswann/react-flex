import React from 'react'
import forEach from 'lodash.forEach'

const properties = {
  row:           ['flexDirection',  'row'],
  rowReverse:    ['flexDirection',  'row-reverse'],
  column:        ['flexDirection',  'column'],
  columnReverse: ['flexDirection',  'column-reverse'],
  hStart:        ['justifyContent', 'flex-start'],
  hEnd:          ['justifyContent', 'flex-end'],
  hCenter:       ['justifyContent', 'center'],
  hBetween:      ['justifyContent', 'space-between'],
  hAround:       ['justifyContent', 'space-around'],
  vStretch:      ['alignContent',   'stretch'],
  vCenter:       ['alignContent',   'center'],
  vStart:        ['alignContent',   'flex-start'],
  vEnd:          ['alignContent',   'flex-end'],
  vBetween:      ['alignContent',   'space-between'],
  vAround:       ['alignContent',   'space-around'],
  itemStretch:   ['alignItems',     'stretch'],
  itemCenter:    ['alignItems',     'center'],
  itemStart:     ['alignItems',     'flex-start'],
  itemEnd:       ['alignItems',     'flex-end'],
  baseline:      ['alignItems',     'baseline'],
  noWrap:        ['flexWrap',       'nowrap'],
  wrap:          ['flexWrap',       'wrap'],
  wrapReverse:   ['flexWrap',       'wrap-reverse']
}

const computeProps = (props) => {
  const computedProps = {}
  const style = {display: 'flex'}

  forEach(props, (prop, key) => {
      if (properties[key] !== undefined) {
        style[properties[key][0]] = properties[key][1]
      } else {
        computedProps[key] = prop
      }
    }
  )
  computedProps.style = Object.assign(computedProps.style || {}, style)
  return computedProps
}

const Flex = (props) => React.createElement('div', computeProps(props))

Flex.propTypes = {
  row:           React.PropTypes.bool,
  rowReverse:    React.PropTypes.bool,
  column:        React.PropTypes.bool,
  columnReverse: React.PropTypes.bool,
  hStart:        React.PropTypes.bool,
  hEnd:          React.PropTypes.bool,
  hCenter:       React.PropTypes.bool,
  hBetween:      React.PropTypes.bool,
  hAround:       React.PropTypes.bool,
  vStretch:      React.PropTypes.bool,
  vCenter:       React.PropTypes.bool,
  vStart:        React.PropTypes.bool,
  vEnd:          React.PropTypes.bool,
  vBetween:      React.PropTypes.bool,
  vAround:       React.PropTypes.bool,
  itemStretch:   React.PropTypes.bool,
  itemCenter:    React.PropTypes.bool,
  itemEnd:       React.PropTypes.bool,
  baseline:      React.PropTypes.bool,
  noWrap:        React.PropTypes.bool,
  wrap:          React.PropTypes.bool,
  wrapReverse:   React.PropTypes.bool,
}

export default Flex
