import React from 'react';
import pageTypes from '../constants/pageTypes';
import boost from '../assets/boost_navbar_icon.png'
import stats from '../assets/stats_navbar_icon.png'
import printIcon from '../assets/print_navbar_icon.png'

function NavBar({ page, setPage }) {
    return (
        <div className='navbar'>
            <div className={"navbar__item" + (page === pageTypes.ref ? " navbar__item_active" : '')} onClick={() => { setPage(pageTypes.ref) }}><img src={stats} alt="" /><p>Ref</p></div>
            <div className={"navbar__item" + (page === pageTypes.task ? " navbar__item_active" : '')} onClick={() => { setPage(pageTypes.task) }}><img src={boost} alt="" /><p>Task</p></div>
            <div className={"navbar__item" + (page === pageTypes.earn ? " navbar__item_active" : '')} onClick={() => { setPage(pageTypes.earn) }}><img src={printIcon} alt="" /><p>Print</p></div>
            <div className={"navbar__item" + (page === pageTypes.boost ? " navbar__item_active" : '')} onClick={() => { setPage(pageTypes.boost) }}><img src={boost} alt="" /><p>Boost</p></div>
            <div className={"navbar__item" + (page === pageTypes.stats ? " navbar__item_active" : '')} onClick={() => { setPage(pageTypes.stats) }}><img src={stats} alt="" /><p>Stats</p></div>
        </div>
    );
}

export default NavBar;