import React from 'react'
import { Flex, Item } from '../dist/react-flex'
import { render } from 'react-dom'

const Title = ({attrs = [], styles = []}) =>
  <h3>
    {'<'}<strong>Flex</strong> {attrs.map((attr, j) => <div style={{marginLeft:'2ex'}} key={j}>{attr} </div>)} <span style={{paddingLeft:'2ex'}}>></span>
    {' = '}
    {styles.length === 0 ? 'default styles' : <span>{'{'} {styles.map((style) => style + '; ')}{'}'}</span>}
  </h3>

const Example = () =>
  <div>
    <Title />
    <div className = 'block'>
      <Flex>
        <div>Slaanesh</div>
        <div>Tzeentch</div>
        <div>Kharn</div>
        <div>Nurgle</div>
      </Flex>
    </div>
    <Title attrs={['hBetween']} styles={['justify-content: space-between']} />
    <div className = 'block'>
      <Flex hBetween>
        <div>Slaanesh</div>
        <div>Tzeentch</div>
        <div>Kharn</div>
        <div>Nurgle</div>
      </Flex>
    </div>
    <Title attrs={['hBetween', 'rowReverse']} styles={['justify-content: space-between', 'flex-direction: row-reverse']} />
    <div className = 'block'>
      <Flex hBetween rowReverse>
        <div>Slaanesh</div>
        <div>Tzeentch</div>
        <div>Kharn</div>
        <div>Nurgle</div>
      </Flex>
    </div>
    <Title attrs={['hBetween', 'rowReverse', 'onClick = {() => alert("Hi!")}']} styles={['justify-content: space-between', 'flex-direction: row-reverse']} />
    <div className = 'block'>
      <Flex hBetween rowReverse onClick={() => alert('Hi!')}>
        <div>Slaanesh</div>
        <div>Tzeentch</div>
        <div>Kharn</div>
        <div>Nurgle</div>
      </Flex>
    </div>
    <Title/>
    <div className = 'block'>
      <Flex >
        <Item
          grow  = {2}
          order = {2}>
          {'<Item grow={2} order={2}/>'}
        </Item>
        <div>Tzeentch</div>
        <div>Kharn</div>
        <div>Nurgle</div>
      </Flex>
    </div>
  </div>

render(<Example />, document.getElementById('root'))
