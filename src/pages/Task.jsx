import React, { useState } from 'react';
import taskTypes from '../constants/taskTypes';
import storageKeys from '../storageKeys/storageKeys';
import { FaChevronRight } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import money from '../assets/print_navbar_icon.png'
import { PiCurrencyBtcFill } from "react-icons/pi";

function Task(props) {
    const [subPage, setSubPage] = useState(taskTypes.special)
    const [currentTask, setCurrentTask] = useState(null)
    return (
        <div className='container task_'>
            {currentTask === null && (
                <>
                    <div className="bal">
                        <h1>{localStorage.getItem(storageKeys.coins)}</h1>
                    </div>
                    <hr />
                    <div className="pages">
                        <button onClick={() => { setSubPage(taskTypes.special) }} className={subPage === taskTypes.special ? 'active' : ''}>Special</button>
                        <button onClick={() => { setSubPage(taskTypes.leagues) }} className={subPage === taskTypes.leagues ? 'active' : ''}>Leagues</button>
                        <button onClick={() => { setSubPage(taskTypes.ref) }} className={subPage === taskTypes.ref ? 'active' : ''}>Ref task</button>
                    </div>
                    {subPage === taskTypes.special && (
                        <div className="current_tasks">
                            <div className="item">
                                <div className="data">
                                    <div className="img"><TiSocialYoutube size={'100%'} /></div>
                                    <div className="text"><h6>Join our socials</h6><p><img src={money} alt="" />600 000</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                            <div className="item">
                                <div className="data">
                                    <div className="img"><PiCurrencyBtcFill size={'100%'} /></div>
                                    <div className="text"><h6>Binance Registration</h6><p><img src={money} alt="" />300 000</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                            <div className="item">
                                <div className="data">
                                    <div className="img"><TiSocialYoutube size={'100%'} /></div>
                                    <div className="text"><h6>Join our socials</h6><p><img src={money} alt="" />600 000</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                            <div className="item">
                                <div className="data">
                                    <div className="img"><TiSocialYoutube size={'100%'} /></div>
                                    <div className="text"><h6>Join our socials</h6><p><img src={money} alt="" />600 000</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                        </div>
                    )}
                    {subPage === taskTypes.leagues && (
                        <div className="current_tasks">
                            <div className="item">
                                <div className="data">
                                    <div className="img"><TiSocialYoutube size={'100%'} /></div>
                                    <div className="text"><h6>Iron</h6><p><img src={money} alt="" />+ 5000</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                            <div className="item">
                                <div className="data">
                                    <div className="img"><PiCurrencyBtcFill size={'100%'} /></div>
                                    <div className="text"><h6>Master</h6><p><img src={money} alt="" />+ 10 000</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                        </div>
                    )}
                    {subPage === taskTypes.ref && (
                        <div className="current_tasks">
                            <div className="item">
                                <div className="data">
                                    <div className="img"><TiSocialYoutube size={'100%'} /></div>
                                    <div className="text"><h6>Invite bonus</h6><p><img src={money} alt="" />10k for one countryman</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                            <div className="item">
                                <div className="data">
                                    <div className="img"><PiCurrencyBtcFill size={'100%'} /></div>
                                    <div className="text"><h6>Invite 3 countrymen</h6><p><img src={money} alt="" />+35,000</p></div>
                                </div>
                                <FaChevronRight size={20} />
                            </div>
                        </div>
                    )}

                </>
            )}

        </div>
    );
}

export default Task;