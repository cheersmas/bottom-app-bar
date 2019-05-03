import React from 'react'
import MenuItem from './MenuItem';
import EventsLogo from './Icons/Events'
import FeaturedLogo from './Icons/Featured'
import Search from './Icons/Search'
import Slider from './Icons/Slider'

function MenuBar2(props) {
    const {active, setActive} = props; 
    return(
        <div className={'menu-bar-horizontal'} id={'menu-bar-horizontal'}>
            <MenuItem 
                value={'events'}
                logo={<EventsLogo width={15} height={15} fill={ active === 'events' ? '#5B37B7' : '#9292B0' }/>}
                text={'Events'}
                isActive={active === 'events'}
                setActive={setActive}      
                color={'#5B37B7'}  
                backgroundColor={'rgba(91, 55, 183, 0.3)'}       
            />
            <MenuItem 
                value={'search'}
                logo={<Search width={15} height={15} fill={ active === 'search' ? '#BE3099' : '#9292B0'}/>}
                text={'Search'}
                isActive={active === 'search'}
                setActive={setActive}
                color={'#BE3099'}
                backgroundColor={'rgb(190, 48, 153, 0.3)'}
            />
            <MenuItem 
                value={'featured'}
                logo={<FeaturedLogo width={15} height={15} fill={active === 'featured' ? '#E39A28' : '#9292B0'} />}
                text={'Featured'}
                isActive={active === 'featured'}
                setActive={setActive}
                color={'#E39A28'}
                backgroundColor={'rgb(227, 154, 40, 0.3)'}
            />
            <MenuItem
                value={'settings'}
                logo={<Slider width={15} height={15} fill={active === 'settings' ? '#1194AA' : '#9292B0'} />}
                text={'Settings'}
                isActive={active === 'settings'}
                setActive={setActive}
                color={'#1194AA'}
                backgroundColor={'rgb(17, 148, 170, 0.3)'}
            />
        </div>
    )
}


export default MenuBar2;