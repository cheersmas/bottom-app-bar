import React from 'react';
import {
    useSpring,
		animated,
		useTransition
} from 'react-spring';

function MenuItem(propsComp) {
	const {text, setActive, value, logo, isActive, color, backgroundColor} = propsComp;
	const transitions = useTransition(isActive, null, {
		from: { opacity: 0, width: 0 },
		enter: { opacity: 1, width: 40 },
		leave: { opacity: 0, width: 0 },
	})

	const {x} = useSpring({
		x: isActive ? 1 : 0,
	})

	return(
		<animated.div style={{
			display: 'flex', 
			alignItems: 'center',
			margin: '20px 10px 20px 0', 
			cursor: 'pointer',
			padding: '10px 20px',
			backgroundColor: x.interpolate({ range: [0, 1], output: ['transparent', backgroundColor]}),
			borderRadius: 20
		}}
			onClick={() => setActive(value)}
		>
			{logo}
			{transitions.map(({ item, key, props }) =>
				item && <animated.div key={key} style={{...props, fontSize: 10, fontWeight: 'bold', color: color }}>{text}</animated.div>)
			}
			</animated.div>
	)
	
}

export default MenuItem