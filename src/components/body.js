/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/body.css';
import avatar from '../assets/img/ava.jpg';
import img1 from '../assets/img/elephant.jpg';
import img2 from '../assets/img/arm.jpg';
import img3 from '../assets/img/leg.jpg';
import img4 from '../assets/img/chest.jpg';
import Slideshow from '../components/header';
import img5 from '../assets/img/tattoo.jpg';
import img6 from '../assets/img/tattoo2.jpg';
import img7 from '../assets/img/tattoo3.jpg';
const collection = [
  { src: img5, caption: "Xăm đê " },
  { src: img6, caption: "Xăm đê anh em" },
  { src: img7, caption: "Xăm nhiệt tình đê anh em" },
];

const images = [
    {src: img1},
    {src: img2},
    {src: img3},
    {src: img4},
]
export default class PageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeInUp:'',
            zoomIn: '',
        };
        this.updateScroll = this.updateScroll.bind(this);
    }
    updateScroll() {
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            this.setState({fadeInUp: 'animated'});
        }
        if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
            this.setState({zoomIn: 'animated'});
        }
    }
    componentDidMount() {
        this.updateScroll();
        window.addEventListener('scroll',this.updateScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.updateScroll);
    }
    render() {
        return(
            <>
            <Slideshow input={collection}/>
            <div className={`artist ${this.state.fadeInUp}`}>
                <h1 id='artistName'>S I N</h1>
                <h1 id='tattooArtist'>Tattoo artist</h1>
                <img src={avatar} alt='Avatar' className='avatar' />
                <div className='social' >
                <a href='https://www.facebook.com/profile.php?id=100043463207936' target='_blank' rel='noreferrer' className='fab fa-facebook'></a>
                <a href='#' className='fab fa-instagram'></a>
                </div>
            </div>
            <div className={`tab-gallery ${this.state.zoomIn}`}>
                <h1 id='artistName'>S I N</h1>
                <h1 id='gallery-title'>Gallery</h1>
                <div className='row-image'>
                    {images.map(
                        (image , index) => {
                            return (
                               <a href='/gallery' className='gallery-image'><img src={image.src}
                                key={index} alt='showup' className='image'
                                 /></a>
                            )
                        }
                    )}
                </div>
            </div>
            </>
        )
    }
}