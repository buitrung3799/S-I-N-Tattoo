import React from 'react';
import '../assets/modal.css';
import FontAwesome from 'react-fontawesome';

function Modal(props) {
    const { closeModal } = props;
    return (
        <div className='overlay'>
            <div className='content'>
            <FontAwesome name='times' 
            onClick={closeModal}
            style={{
                color: '#000000',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 0,
                position: 'absolute',
                top: '0.3rem',
                right: '0.5rem',
            }}
            />
                <div className="image-container">
                    <img src={props.src} alt={props.alt} id="image-modal" />
                    <div className="information">
                        <h2>Tattoo : <span style={{fontFamily:'Gothic'}}>{props.name}</span></h2>
                        <h3>Done at : <a href="https://www.google.com/maps/dir/91+Tu%E1%BB%87+T%C4%A9nh,+Nguyen+Du,+Hai+B%C3%A0+Tr%C6%B0ng+District,+Hanoi/91+Tu%E1%BB%87+T%C4%A9nh,+Nguyen+Du,+Hai+B%C3%A0+Tr%C6%B0ng+District,+Hanoi/@21.0151934,105.8452039,17.26z/data=!4m13!4m12!1m5!1m1!1s0x3135ab8c3c5bc1a9:0xb407cdb9d12917ce!2m2!1d105.847589!2d21.015218!1m5!1m1!1s0x3135ab8c3c5bc1a9:0xb407cdb9d12917ce!2m2!1d105.847589!2d21.015218"
                            rel='noreferrer' target='_blank'>S I N Studio</a></h3>
                        <h2>Story:</h2>
                        <p>{props.story}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;