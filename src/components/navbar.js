/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/navbar.css';

function Navbar(props) {
    var [sticky,setSticky] = React.useState('');
    React.useEffect(() =>
    {   
        const updateScroll = () => {
            if (
                document.documentElement.scrollTop > 200 ||
                document.body.scrollTop > 200
              ) {
                setSticky("sticky");
              }
              else if (
                document.documentElement.scrollTop < 200 ||
                document.body.scrollTop < 200
              ) {
                setSticky("");
              }
        };
        window.addEventListener("scroll", updateScroll);
        return function cleanup() {
            window.removeEventListener("scroll", updateScroll);
        }
    })
    return (
        <div className={`navbar ${sticky}`}>
            <div className="brand">
                <p>Tattoo</p>
            </div>
            <div className="link">
               <div><a href="/body">Home</a></div>
               <div><a href='/about'>About Us</a></div> 
               <div><a href='/gallery'>Gallery</a></div> 
               <div><a href='/booking'>Booking</a></div>
            </div>
            <div className='link2'>
              <a href='https://www.facebook.com/profile.php?id=100043463207936' target='_blank' rel='noreferrer'><button className='bookingOnline'><i class="fa fa-calendar" aria-hidden='true' style={{marginRight:'10px'}}></i>
              Booking Online</button></a>
            </div>   
        </div>

    );
};
export default Navbar;