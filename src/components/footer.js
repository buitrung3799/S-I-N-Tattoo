/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../assets/footer.css';
export default class Footer extends React.Component {
    render() {
        return(
            <>
            <div className='break-line'></div>
            <div className='appointment'>
                    <h1 id='appointment-title'>Get an appointment</h1>
                    <a href='https://www.facebook.com/profile.php?id=100043463207936' target='_blank' rel='noreferrer'><button className='check-appointment'>Click me!</button></a>
                </div>
            <div className="footer">
                <div className='social' >
                <a className='social-link' href='https://www.facebook.com/profile.php?id=100043463207936' target='_blank' rel='noreferrer'><i className='fab fa-facebook' href='https://www.facebook.com/profile.php?id=100043463207936'></i></a>
                <a className='social-link'><i className='fab fa-instagram'></i></a>
                </div>
                <ul className='contact-list'>
                <li><a href='tel:+84%2070%202205%20307' target='_blank' rel='noreferrer'><span><i className="fas fa-phone" aria-hidden="true"></i></span><span className="list-text">+84 702 205 307</span></a></li>
                        <li><a href="mailto:buiduythanh@gmail.com" target="_blank" rel='noreferrer'><span><i className='fas fa-envelope-square' aria-hidden="true"></i></span><span className="list-text">buiduythanh@gmail.com</span></a></li>
                        <li><a href="https://www.google.com/maps/dir/91+Tu%E1%BB%87+T%C4%A9nh,+Nguyen+Du,+Hai+B%C3%A0+Tr%C6%B0ng+District,+Hanoi/91+Tu%E1%BB%87+T%C4%A9nh,+Nguyen+Du,+Hai+B%C3%A0+Tr%C6%B0ng+District,+Hanoi/@21.0151934,105.8452039,17.26z/data=!4m13!4m12!1m5!1m1!1s0x3135ab8c3c5bc1a9:0xb407cdb9d12917ce!2m2!1d105.847589!2d21.015218!1m5!1m1!1s0x3135ab8c3c5bc1a9:0xb407cdb9d12917ce!2m2!1d105.847589!2d21.015218"
                            rel='noreferrer'>
                            <span><i className='fas fa-home' aria-hidden='true'></i></span><span className="list-text">91 , Tuệ Tĩnh, Hai Ba Trung District , Hanoi</span></a></li>
                </ul>
            </div>
            </>
        )
    }
}