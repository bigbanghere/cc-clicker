import React, { useState } from 'react';
import storageKeys from '../storageKeys/storageKeys';
import money from '../assets/print_navbar_icon.png'
import { IoPrintOutline, IoVideocam } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import DownPopUp from '../components/DownPopUp';

function Boost({ setPage }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpData, setPopUpData] = useState({})
    return (
        <div className='container boost_'>
            <div className="bal">
                <h3>Your balance:</h3>
                <div className="bal__2">
                    <img src={money} alt="" />
                    <h1>{localStorage.getItem(storageKeys.coins)}</h1>
                </div>
            </div>
            <h5>Your daily boosters:</h5>
            <div className="daily_btns">
                <button><IoVideocam color='#fff' size={40} /><div className="text"><p>Short video</p><p>3/3</p></div></button>
                <button onClick={() => { setShowPopUp(true); setPopUpData({ 'name': 'Full Tank', 'description': 'Fill your energy to the max.', 'price_lvl': 'Free', 'image': SlEnergy }) }}><SlEnergy color='#fff' size={40} /><div className="text"><p>Full Tank</p><p>3/3</p></div></button>
            </div>
            <h5>Boosters:</h5>
            <div className="boosts">
                <button onClick={() => { setShowPopUp(true); setPopUpData({ 'name': 'Multiprint', 'description': 'Increase amount of Cryptocash you can earn per swipe. +1 per swipe for each level.  ', 'price_lvl': '200  | 2 level', 'image': MdTouchApp }) }}><div className='r'><MdTouchApp size={32} /> <div className="text"><h6>Multiprint</h6><p>200      |      1 level</p></div></div><FaAngleRight /></button>
                <button onClick={() => { setShowPopUp(true); setPopUpData({ 'name': 'Energy Limit', 'description': 'Increase the limit of energy storage. energy limit for each level.', 'price_lvl': '200  | 2 level', 'image': SlEnergy }) }}><div className='r'><SlEnergy size={32} /> <div className="text"><h6>Energy Limit</h6><p>200      |      1 level</p></div></div><FaAngleRight /></button>
                <button onClick={() => { setShowPopUp(true); setPopUpData({ 'name': 'Recharging Speed', 'description': 'Increase speed of recharge. +1 per second.', 'price_lvl': '200  | 2 level', 'image': SiSpeedtest }) }}><div className='r'><SiSpeedtest size={32} /> <div className="text"><h6>Recharging Speed</h6><p>200      |      1 level</p></div></div><FaAngleRight /></button>
                <button onClick={() => { setShowPopUp(true); setPopUpData({ 'name': 'Print Bot', 'description': 'Print Bot will tap when your energy is full. Max bot work duration is 12 hours.', 'price_lvl': '200 000', 'image': IoPrintOutline }) }}><div className='r'><IoPrintOutline size={32} /> <div className="text"><h6>Print Bot</h6><p>200 000</p></div></div><FaAngleRight /></button>
            </div>
            {showPopUp && (
                <DownPopUp closeHandler={() => { setShowPopUp(false) }}>
                    <div className="popup_data_boost">
                        <popUpData.image size={48} />
                        <h1 style={{ fontWeight: 'bold' }}>{popUpData.name}</h1>
                        <h6 style={{ fontWeight: '500' }}>{popUpData.description}</h6>
                        <p style={{ fontWeight: 'bold' }}>{popUpData.price_lvl}</p>
                        <button>Get it!</button>
                    </div>
                </DownPopUp>
            )}
        </div>
    );
}

export default Boost;