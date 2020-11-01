import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" 
                    alt="Netflix Logo" 
                    />
            <img className="nav__avatar" 
                    src="https://occ-0-2042-2164.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABd0VJiB-jlZOa4mPM_JZLqrwJamcrjh4ZVC5RcX3P3tEVQ-uJNJ36uHQcaIQvtthwlh1Xj_6lCjDxONOY6wr8ow.png?r=f71" 
                    alt="Netflix Logo" 
                    />
        </div>
    )
}

export default Nav;