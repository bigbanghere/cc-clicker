import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { SlEnergy } from "react-icons/sl";
import storageKeys from '../storageKeys/storageKeys';
import updateCoins from '../api/updateCoins';
import tg_user_id from '../constants/telegramUserId';
import pageTypes from '../constants/pageTypes';
import getCoins from '../api/getCoins';
import { useSwipeable } from 'react-swipeable';
//import videoEarn from '../assets/earn.mp4'
import video_poster from '../assets/video_img.png'


function Earn({ setPage, videoEarn }) {
    const [coinCount, setCoinCount] = useState(Number(localStorage.getItem(storageKeys.coins)));
    const [energy, setEnergy] = useState(500)
    const [maxEnergy, setMaxEnergy] = useState(500)
    const [canSwipe, setCanSwipe] = useState(true)
    const swipeConfig = {
        delta: 20,                             // min distance(px) before a swipe starts. *See Notes*
        preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
        trackTouch: true,                      // track touch input
        trackMouse: false,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
        swipeDuration: 750,               // allowable duration of a swipe (ms). *See Notes*
        touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
    }

    const swipeHandler = async (eventData) => {
        if (eventData.dir === "Right" && energy > 0 && canSwipe) {
            setCanSwipe(false)
            let velocity = eventData.velocity
            console.log(velocity, Math.min(Math.max(2, velocity * 10), 15));
            const video_el = document.querySelector('video.click__video')
            video_el.playbackRate = Math.min(Math.max(2, velocity * 12), 15)
            console.log(video_el);
            video_el.play()
            video_el.addEventListener('ended', () => { video_el.currentTime = 0; setCanSwipe(true) })
            setCoinCount(coinCount + 1);
            setEnergy(energy - 1);
            localStorage.setItem(storageKeys.coins, coinCount + 1);
            updateCoins(tg_user_id, coinCount + 1).then(res => {
                if (res.data.status === 401) { localStorage.clear(); setPage(pageTypes.country_select) }
            });
            setMaxEnergy(500);
        }
    };

    const handlers = useSwipeable({
        onSwiping: swipeHandler,
        ...swipeConfig,
    });
    useEffect(() => {
        (async () => {
            let res = await getCoins(tg_user_id)
            if (res.data.status === 401) { localStorage.clear(); setPage(pageTypes.country_select) }
            localStorage.setItem(storageKeys.coins, res.data.coins)
            setCoinCount(res.data.coins)
        })()
    }, [setPage])



    return (
        <div className='container earn_'>
            <div className="coins_c">
                <h1>{coinCount}</h1>
            </div>
            <button {...handlers} className='click'>
                <video className='click__video' src={videoEarn} muted="muted" poster={video_poster} />
            </button>
            <div className='bar'>
                <div className="bar__1">
                    <SlEnergy color='#F8CF29' size={28} />
                    <h5>{energy} / {maxEnergy}</h5>
                </div>
                <ProgressBar now={energy} max={maxEnergy} min={0} style={{ width: '100%' }} />
            </div>
        </div>
    );
}
export default Earn;