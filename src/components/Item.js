import React from 'react'
import { useSpring, animated } from 'react-spring';

function Item (props) {
  const {logo, value, text, isActive, setActive} = props;
  const {xy, clipPath1} = useSpring({
    clipPath1: isActive ? 
    'polygon(5px -20px, 42px -20px, 41px -1px, 6px -8px)' 
    : 
    'polygon(5px -20px, 42px -20px, 42px 33px, 5px 20px)',
    xy: !isActive ? [0, 10] : [0, -10],
  })

  const {xy2, clipPath2, size} = useSpring({
    xy2: !isActive ? [0, 0] : [0, -15],
    clipPath2: isActive ? 
    'polygon(-2px -2px, 73px 11px, 73px 32px, -1px 23px)' 
    : 
    'polygon(-2px -20px, 42px -20px, 41px 8px, 0px 0px)',
    size: isActive ? 1 : 0
  })

  return (
    <div onClick={() => setActive(value)} style={{ padding: 10, cursor: 'pointer' }}>
      <animated.div
        style={{
          transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`)
        }}>
        <animated.div style={{
          clipPath: clipPath1
        }}>
          <img src={logo} alt={'aotuaeou'} height={15} /> 
        </animated.div>
      </animated.div>
      <animated.div
        style={{
          transform: xy2.interpolate((x, y) => `translate(${x}px, ${y}px)`)
        }}>
        <animated.div
        style={{
          clipPath: clipPath2
        }}>
          <span style={{ fontSize: 12, fontWeight: 'bold', color: '#050950'}}>
            {text}
          </span>
        </animated.div>
      </animated.div>
      <animated.div
        style={{
          height: 5,
          width: 5,
          borderRadius: '50%',
          backgroundColor: '#050950',
          margin: 'auto',
          transform: size.interpolate(size => `translateY(-10px) scale(${size})`)
        }}
      />
    </div>
  )
}
// polygon(52.31% -100.09%, 47.38% -102.19%, 47.8% -30.07%, 51.73% -5.27%)
// style={{clipPath: 'polygon(53.21% 58.79%, 46.19% 77.25%, 46.25% 164.65%, 53.27% 146.73%)'}}
export default Item;