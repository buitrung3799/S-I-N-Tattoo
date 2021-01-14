import React from 'react';
import '../assets/booking.css';
import MapDisplay from './map';
 class Booking extends React.Component {
    render() {
        return (
            <>
                <div className='banner'>
                    <div className='banner-text'>
                        <h1>Contact With Us</h1>
                        <p>Booking for your tattoo</p>
                    </div>
                </div>
                <div className='Contact'>
                    <div className='contact-information'>
                    <div className='information'>
                        <h3>I N F O R M A T I O N</h3>
                        <h1>THÔNG TIN LIÊN HỆ</h1>
                        <h2>S I N hoạt động từ 9.am đến 10.pm mỗi ngày</h2>

                    <ul className='contact-list'>
                        <li><a href='tel:+84%2070%202205%20307' target='_blank' rel='noreferrer'><span><i className="fas fa-phone" aria-hidden="true"></i></span><span className="list-text">+84 702 205 307</span></a></li>
                        <li><a href="mailto:buiduythanh@gmail.com" target="_blank" rel='noreferrer'><span><i className='fas fa-envelope-square' aria-hidden="true"></i></span><span className="list-text">buiduythanh@gmail.com</span></a></li>
                        <li><a href="https://www.google.com/maps/dir/91+Tu%E1%BB%87+T%C4%A9nh,+Nguyen+Du,+Hai+B%C3%A0+Tr%C6%B0ng+District,+Hanoi/91+Tu%E1%BB%87+T%C4%A9nh,+Nguyen+Du,+Hai+B%C3%A0+Tr%C6%B0ng+District,+Hanoi/@21.0151934,105.8452039,17.26z/data=!4m13!4m12!1m5!1m1!1s0x3135ab8c3c5bc1a9:0xb407cdb9d12917ce!2m2!1d105.847589!2d21.015218!1m5!1m1!1s0x3135ab8c3c5bc1a9:0xb407cdb9d12917ce!2m2!1d105.847589!2d21.015218"
                            rel='noreferrer'>
                            <span><i className='fas fa-home' aria-hidden='true'></i></span><span className="list-text">91 , Tuệ Tĩnh, Hai Ba Trung District , Hanoi</span></a></li>
                    </ul>
                    </div>
                    <div className='contact-form'>
                        <h3>C O N T A C T</h3>
                        <h1>SEND US MESSAGES</h1>
                    </div>
                    </div>
                    <MapDisplay />
                </div>
            </>
        )
    }
}
export default Booking;