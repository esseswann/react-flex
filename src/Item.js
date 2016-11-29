import React from 'react'
import forEach from 'lodash.forEach'

const properties = {
  grow:   'flexGrow',
  shrink: 'flexShrink',
  basis:  'flexBasis',
  align:  'alignSelf',
  order:  'order',
  flex:   'flex'
}

const computeProps = (props) => {
  let computedProps   = {}
  computedProps.style = props.style || {}

  forEach(props, (prop, key) => {
      if (properties[key] !== undefined) {
        computedProps.style[properties[key]] = prop
      } else {
        computedProps[key] = prop
      }
    }
  )

  return computedProps
}

const Item = (props) => React.createElement('div', computeProps(props))

Item.propTypes = {
  grow:   React.PropTypes.number,
  shrink: React.PropTypes.number,
  basis:  React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number]),
  align:  React.PropTypes.oneOf([
            'auto',
            'stretch',
            'center',
            'flex-start',
            'flex-end',
            'baseline',
            'initial',
            'inherit']),
  order:  React.PropTypes.number,
  flex:   React.PropTypes.string
}

export default Item
