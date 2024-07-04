import React from 'react';
import gift_1 from '../assets/gift_1.svg'
import gift_2 from '../assets/gift_2.svg'
import ref_coin_icon from '../assets/ref_coin_icon.svg'
import { TfiReload } from "react-icons/tfi";
import { IoCopyOutline } from "react-icons/io5";

function Refs({ setPage }) {
    return (
        <div className='container refs_'>
            <h2>Invite friends!</h2>
            <p>You and your friends will receive bonuses</p>
            <div style={{ marginTop: 20 }} className="bonus">
                <img src={gift_1} alt="" />
                <div className="datas">
                    <p>Invite a friend</p>
                    <p><img alt="" src={ref_coin_icon} />+ 5,000 for you and your friend</p>
                </div>
            </div>
            <div className="bonus">
                <img src={gift_2} alt="" />
                <div className="datas">
                    <p>Invite a friend with Telegram Premium</p>
                    <p><img alt="" src={ref_coin_icon} />+ 25,000 for you and your friend</p>
                </div>
            </div>
            <div className="start_list">
                <h6>List of your friends</h6>
                <TfiReload size={32} />
            </div>
            <p className="ref_count">
                0 Referrals | <span style={{ color: '#051244' }}>+0</span>
            </p>
            <div className="list list__empty">
                <p>You haven't invited anyone yet 😭</p>
            </div>
            <div className="buttons">
                <button style={{ flex: 1 }}><h3>Invite a friend</h3></button>
                <button><IoCopyOutline size={28} /></button>
            </div>

        </div>
    );
}

export default Refs;