

import './App.css'

import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import './ImageSlider.css';
import './style.css';
import 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/css/lg-video.css';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'lightgallery/css/lg-pager.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-comments.css';
import 'lightgallery/css/lg-fullscreen.css';

import "react-image-gallery/styles/css/image-gallery.css";


import LightGallery from 'lightgallery/react';

import lgVideo from 'lightgallery/plugins/video';
import lgShare from 'lightgallery/plugins/share';
import lgZoom from 'lightgallery/plugins/zoom';
import lgpager from 'lightgallery/plugins/pager';
import lgfullscreen from 'lightgallery/plugins/fullscreen';
import lgthumbnail from 'lightgallery/plugins/thumbnail';
import lgcomments from 'lightgallery/plugins/comment';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Crousels = (AppProps, AppState) => {



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (

    <div>
        <h1>Carousel</h1>
      <div className="main">



        <Carousel autoPlay={1000} interval={1000}
          data-bs-theme="dark"

        >




          <div className='add'>


            <img src="img/2.jpeg" />
            <LightGallery plugins={[lgZoom, lgVideo, lgShare, lgfullscreen, lgpager, lgthumbnail, lgcomments,]} mode="lg-fade">
              <a
                data-lg-size="400-400"
                // data-pinterest-text="Shinimamiya, Osaka, Japan"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                // data-tweet-text="Shinimamiya, Osaka, Japan"
                data-src="img/2.jpeg"
              >

                <p className="legend" style={{ height: '100vh', opacity: '0' }}>show ed </p>
              </a>
            </LightGallery>
          </div>



          <div className='add'>


            <img src="img/4.png" />
            <LightGallery plugins={[lgZoom, lgVideo, lgShare, lgfullscreen, lgpager, lgthumbnail, lgcomments,]} mode="lg-fade">
              <a
                data-lg-size="400-400"
                // data-pinterest-text="Shinimamiya, Osaka, Japan"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                // data-tweet-text="Shinimamiya, Osaka, Japan"
                data-src="img/4.png"
              >

                <p className="legend" style={{ height: '100vh', opacity: '0' }}>show ed </p>
              </a>
            </LightGallery>
          </div>

          <div className='add'>


            <img src="img/2.jpeg" />
            <LightGallery plugins={[lgZoom, lgVideo, lgShare, lgfullscreen, lgpager, lgthumbnail, lgcomments,]} mode="lg-fade">
              <a
                data-lg-size="400-400"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                data-src="img/2.jpeg"
              >
                <p className="legend" style={{ height: '100vh', opacity: '0' }}>show ed </p>
              </a>
            </LightGallery>
          </div>
          <div className='add'>
            <img src="img/4.png" />
            <LightGallery plugins={[lgZoom, lgVideo, lgShare, lgfullscreen, lgpager, lgthumbnail, lgcomments,]} mode="lg-fade">
              <a
                data-lg-size="400-400"
                data-sub-html="<h4>Photo by -Ahmed  </a></h4><p> Location - <a href='http://localhost:3000/'>Detawy</a></p>"
                data-src="img/4.png"
              >
                <p className="legend" style={{ height: '100vh', opacity: '0' }}>show ed </p>
              </a>
            </LightGallery>
          </div>
        </Carousel>
      </div>
      <br></br>
      <br></br>

     




    </div>

  );
}


export default Crousels;



