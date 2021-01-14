import img1 from '../assets/img/collection/arms/axe.jpg';
import img2 from '../assets/img/collection/arms/date month.jpg';
import img3 from '../assets/img/collection/arms/karambit knife.jpg';
import img4 from '../assets/img/collection/arms/no fk ways.jpg';
import img5 from '../assets/img/collection/arms/skull clock.jpg';
import img6 from '../assets/img/collection/body/1996.jpg';
import img7 from '../assets/img/collection/body/ambition.jpg';
import img8 from '../assets/img/collection/body/elephant.jpg';
import img9 from '../assets/img/collection/body/fallen king.jpg';
import img10 from '../assets/img/collection/body/la familia es para siempre.jpg';
import img11 from '../assets/img/collection/body/nude.jpg';
import React from 'react';
import '../assets/gallery.css';
import Modal from './modal';

export default function Gallery(){
    const arms = [
        {src: img1 , caption:'axe'},
        {src: img2 , caption:'date month'}, 
        {src: img3 , caption:'karambit knife'},
        {src: img4 , caption:'no fk ways'}, 
        {src: img5 , caption: 'skull clock'} 
    ];
    const body = [
        {src: img6 , caption: '1996'},
        {src: img7 , caption: 'ambition'}, 
        {src: img8 , caption: 'elephant'},
        {src: img9 , caption: 'fallen king'},
        {src: img10, caption: 'la familia es para siempre'},
        {src: img11 , caption: 'nude'}
    ]
    const [bodyAnimated , setBodyAnimated] = React.useState('');
    const [imageToShow , setImageToShow] = React.useState('');
    const [imageName , setImageName] = React.useState('');
    const [status, setStatus] = React.useState(false);

    function showImage(img , imgName) {
        setImageToShow(img);
        setImageName(imgName);
    }
    React.useEffect(() => {
        function updateScroll() {
            if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
                setBodyAnimated('animated');
            }
        };
        window.addEventListener('scroll', updateScroll);
        return function cleanup() {
            window.removeEventListener('scroll', updateScroll);
        }
    })
    return(
        <>
        <div className="banner">
                <div className="text">
                <h1>Gallery</h1> 
                <p>Take a glance</p>
                </div>
            </div>
        <div className="Gallery">
            <div className='arms-gallery'>
            <h1>Tattoo for arms</h1>
            <div className='arm-row-images animated'>
            {arms.map((arm , index) => {
                    return(
                    <div className='image-links'>
                    <img src={arm.src} alt={arm.caption} 
                    className='arm-images' onClick={() => {showImage(arm.src , arm.caption) ; setStatus(true)}} key={index}/><span className='description'>{arm.caption}</span>
                    </div>
                    )
                })}
            </div>
            </div> 
            <div>
              { status && (<Modal closeModal={() => setStatus(false)}
                src={imageToShow}
                name = {imageName}
              />)}
            </div>
            <div className='body-gallery'>
                <h1>Tattoo for body</h1>
                <div className={`body-row-images ${bodyAnimated}`}>
                    {body.map((body, index) =>{
                        return(
                            // eslint-disable-next-line react/jsx-no-target-blank
                            <div className='image-links'> 
                            <img src={body.src} alt={body.caption} 
                            className='body-images' onClick={() => {showImage(body.src , body.caption) ; setStatus(true)}}  key={index} /><span className='description'>{body.caption}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}