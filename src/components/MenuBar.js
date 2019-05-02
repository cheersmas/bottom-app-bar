import React, { useState } from 'react'
import Item from './Item';
import events from '../assets/events.svg'
import featured from '../assets/featured.svg';
import search from '../assets/search.svg'
import slider from '../assets/slider.svg'

function MenuBar() {
    const [active, setActive] = useState('events') 
    return(
        <div className={'menu-bar'}>
            <Item 
                id={'events'}
                logo={events}
                text={'Events'}
                isActive={active === 'events'}
                setActive={setActive}
            />
            <Item 
                id={'search'}
                logo={search}
                text={'Search'}
                isActive={active === 'search'}
                setActive={setActive}
            />
            <Item 
                id={'featured'}
                logo={featured}
                text={'Featured'}
                isActive={active === 'featured'}
                setActive={setActive}
            />
            <Item
                id={'settings'}
                logo={slider}
                text={'Settings'}
                isActive={active === 'settings'}
                setActive={setActive}
            />
        </div>
    )
}


export default MenuBar;