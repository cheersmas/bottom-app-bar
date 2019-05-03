import React from 'react'
import Item from './Item';
import events from '../assets/events.svg'
import featured from '../assets/featured.svg';
import search from '../assets/search.svg'
import slider from '../assets/slider.svg'

function MenuBar(props) {
    const {active, setActive} = props; 
    return(
        <div className={'menu-bar'} id={'menu-bar'}>
            <Item
                key={'events-menu-bar'}
                value={'events'}
                logo={events}
                text={'Events'}
                isActive={active === 'events'}
                setActive={setActive}
            />
            <Item
                key={'search-menu-bar'}
                value={'search'}
                logo={search}
                text={'Search'}
                isActive={active === 'search'}
                setActive={setActive}
            />
            <Item
                key={'featured-menu-bar'}
                value={'featured'}
                logo={featured}
                text={'Featured'}
                isActive={active === 'featured'}
                setActive={setActive}
            />
            <Item
                key={'settings-menu-bar'}                
                value={'settings'}
                logo={slider}
                text={'Settings'}
                isActive={active === 'settings'}
                setActive={setActive}
            />
        </div>
    )
}


export default MenuBar;