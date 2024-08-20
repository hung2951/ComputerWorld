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
        <div className={styles.home__banner}>
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
                    ></div>
                  </NavLink>
                </div>
              ))}
            </Slide>
          </div>
          <div className={styles.banner__right}>
            <div className={styles.banner____right__sub1}>
              <NavLink to="#">
                <img
                  src="https://laptop88.vn/media/banner/31_Jul756ed2b4cb3d8e2d5d96308e0e5647db.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className={styles.banner____right__sub2}>
              <NavLink to="#">
                <img
                  src="https://laptop88.vn/media/banner/31_May1d61c0dcaafb8588e929cdbd5ace0101.jpg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div className={styles.home__banner__sub}>
            <div className={styles.home__banner__sub__img1}>
              <NavLink to="#">
                <img
                  src="https://laptop88.vn/media/banner/31_Jul34c3f1c53320e2f51d2f8832b6b46e4c.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className={styles.home__banner__sub__img2}>
              <NavLink to="#">
                <img
                  src="https://laptop88.vn/media/banner/31_Julc74c45af4e38f562a364e61fb5e6274c.jpg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className={styles.home__banner__sub__img2}>
              <NavLink to="#">
                <img
                  src="https://laptop88.vn/media/banner/31_Jul7558d20659a7ef907d2818eeb7aa849e.jpg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.categories__mobile}>
          <div className={styles.category__mobile}>
            <NavLink to="#">
              <p>
                <img
                  src="https://trungtran.vn/images/menus/_0000_laptop-icon.jpg"
                  alt=""
                />
              </p>
              <span>Laptop</span>
            </NavLink>
          </div>
          <div className={styles.category__mobile}>
            <NavLink to="#">
              <p>
                <img
                  src="https://trungtran.vn/images/menus/_0000_laptop-icon.jpg"
                  alt=""
                />
              </p>
              <span>Laptop</span>
            </NavLink>
          </div>
          <div className={styles.category__mobile}>
            <NavLink to="#">
              <p>
                <img
                  src="https://trungtran.vn/images/menus/_0000_laptop-icon.jpg"
                  alt=""
                />
              </p>
              <span>Laptop</span>
            </NavLink>
          </div>
          <div className={styles.category__mobile}>
            <NavLink to="#">
              <p>
                <img
                  src="https://trungtran.vn/images/menus/_0000_laptop-icon.jpg"
                  alt=""
                />
              </p>
              <span>Laptop</span>
            </NavLink>
          </div>
          <div className={styles.category__mobile}>
            <NavLink to="#">
              <p>
                <img
                  src="https://trungtran.vn/images/menus/_0000_laptop-icon.jpg"
                  alt=""
                />
              </p>
              <span>Laptop</span>
            </NavLink>
          </div>
          <div className={styles.category__mobile}>
            <NavLink to="#">
              <p>
                <img
                  src="https://trungtran.vn/images/menus/_0000_laptop-icon.jpg"
                  alt=""
                />
              </p>
              <span>Laptop</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
