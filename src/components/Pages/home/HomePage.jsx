import React from "react";
import { Slide } from "react-slideshow-image";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const buttonStyle = {
    color: "white",
  };
  const indicators = (index) => <div className={styles.indicator}></div>;
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    ),
  };
  return (
    <div className={`${styles.home__container} min-h-screen`}>
      <div className={styles.home__title}>
        Chào mừng bạn đến với <span>Computer World</span> !
      </div>
      <div className={styles.home__wrapper}>
        <div className={styles.banner__left}>
          <Slide {...properties} indicators={indicators}>
            {images.map((item, index) => (
              <div className="each-slide-effect">
                <NavLink to="#">
                  <div
                    style={{
                      backgroundImage: `url(${item})`,
                      borderRadius: "20px",
                    }}
                  >
                  </div>
                </NavLink>
              </div>
            ))}
          </Slide>
        </div>
        <div className="banner__right"></div>
      </div>
    </div>
  );
};

export default HomePage;
