import React, { useEffect, useState } from 'react';
import money from '../assets/print_navbar_icon.png'
import { FaFlag } from "react-icons/fa";

function Statistic({ setPage }) {
    const [remainig, setRemaining] = useState('Loading...')
    useEffect(() => {
        function timer() {
            let nowDate = new Date();
            let achiveDate = new Date(2024, 7, 4, 17, 0, 0); //Задаем дату, к которой будет осуществляться обратный отсчет
            console.log(achiveDate.toLocaleString());
            //let achiveDate = new Date('04.08.2024'); //Задаем дату, к которой будет осуществляться обратный отсчет
            let result = (achiveDate - nowDate);
            if (result < 0) {
                console.log('ended');
            }
            let seconds = Math.floor((result / 1000) % 60);
            let minutes = Math.floor((result / 1000 / 60) % 60);
            let hours = Math.floor((result / 1000 / 60 / 60) % 24);
            let days = Math.floor(result / 1000 / 60 / 60 / 24);
            if (seconds < 10) seconds = '0' + seconds;
            if (minutes < 10) minutes = '0' + minutes;
            if (hours < 10) hours = '0' + hours;
            let d = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;
            console.log(d);
            setRemaining(d)

        }
        timer()
        let interval = setInterval(timer, 1000);

        return () => { clearInterval(interval) }
    }, [])
    return (
        <div className='container stats_'>
            <div className="item">
                <h6>Total balance of winner countries:</h6>
                <div className="right">
                    <img src={money} alt="" />
                    <h2>584 515 222</h2>
                </div>
            </div>
            <div className="item">
                <h6>Top 3 Countries:</h6>
                <div className="right flags">
                    <FaFlag size={38} />
                    <FaFlag size={38} />
                    <FaFlag size={38} />
                </div>
            </div>
            <div className="item totals_3">
                <h6>Total printed notes:</h6>
                <h3>2 554 221 986 221</h3>
                <h6>Total players:</h6>
                <h3>54 986 221</h3>
            </div>
            <div className="item">
                <h6>Olympic competition ends in:</h6>
                <h2>{remainig}</h2>
            </div>
        </div>
    );
}

export default Statistic;