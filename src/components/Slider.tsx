import { Grid } from "@mui/material";
import '../App.css'
import { useState, useEffect, useRef } from "react";
import reviewImg from "../assets/reviews/review-2.png"
import bg from '../assets/BG/93522864-tablero-de-corcho-para-fondos-o-texturas.jpg';
import image1 from '../assets/reviews/start-removebg-preview.png';

const reviewsImages = [ reviewImg ,reviewImg ,reviewImg ,reviewImg ];
const delay = 3500;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviewsImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Grid container spacing={2} className='h-[28rem] w-[100%] p-6 shadow-md hover:shadow-lg' style={{ backgroundImage: `url(${bg})` }}>
        <Grid item xs={12} md={12} lg={12} xl={12} className="flex justify-center py-3">
          <h3 className="mt-2 font-titles text-[24px] tracking-normal text-blacky sm:text-3xl">With the trust of Professionals who advise <strong>3M+</strong> of Newbie Writers</h3>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <img style={{ position: 'absolute', width: '130px', zIndex: '2', left: '46vh' }} src={image1} />
          <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {reviewsImages.map((reviewsImage, index) => (
                <div className="slide" key={index} style={{ backgroundImage: `url(${reviewsImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', flex: 1, backgroundColor: '#FC337B'}}  />
              ))}
            </div>
            <div className="slideshowDots">
              {reviewsImages.map((_, idx) => (
                <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}></div>
              ))}
            </div>
          </div>
          <img style={{ position: 'absolute', width: '130px', zIndex: '2', right: '46vh',top: '196vh' }} src={image1} />
        </Grid>
      </Grid>
    </>

  );
};

export { Slider }
