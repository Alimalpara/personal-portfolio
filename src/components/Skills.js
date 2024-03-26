import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
//for all the skills logo
import adobexd from "../assets/img/adobexd.svg";
import android from "../assets/img/android.svg";
import angular from "../assets/img/angular.svg";
import bitbucket from "../assets/img/bitbucket.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import c from "../assets/img/c--4.svg";
import canva from "../assets/img/canva-1.svg";
import css3 from "../assets/img/css-3.svg";
import figma from "../assets/img/figma-5.svg";
import firebase from "../assets/img/firebase-1.svg";
import html from "../assets/img/html-1.svg";
import jira from "../assets/img/jira-3.svg";
import json from "../assets/img/json.svg";
import java from "../assets/img/javacolor.svg";
import kotlin from "../assets/img/Kotlin_Icon.svg";
import mysql from "../assets/img/mysql-6.svg";
import nodejs from "../assets/img/nodejs-3.svg";
import php from "../assets/img/php-1.svg";
import postman from "../assets/img/postman.svg";
import python from "../assets/img/python-5.svg";
import react from "../assets/img/react-2.svg";
import sqlite from "../assets/img/sqlite.svg";
import visualstudio from "../assets/img/visual-studio-2013.svg";
import androidstudio from "../assets/img/Android_Studio_Icon_3.6.svg";
import xml from "../assets/img/xml-svgrepo-com.svg";
import javascript from "../assets/img/javascript-svgrepo-com.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}

              <div className="skills-grid">
                {/* Coding Languages */}
                <div className="skill-item">
                  <img src={java} alt="Java" />
                </div>
                <div className="skill-item">
                  <img src={kotlin} alt="Kotlin" />
                </div>
                <div className="skill-item">
                  <img src={c} alt="C#" />
                </div>
                <div className="skill-item">
                  <img src={html} alt="HTML" />
                </div>
                <div className="skill-item">
                  <img src={css3} alt="CSS" />
                </div>
                <div className="skill-item">
                  <img src={javascript} alt="JavaScript" />
                </div>
                <div className="skill-item">
                  <img src={php} alt="PHP" />
                </div>
                <div className="skill-item">
                  <img src={python} alt="Python" />
                </div>

                <div className="skill-item">
                  <img src={json} alt="JSON" />
                </div>

                {/* Mobile Development */}
                <div className="skill-item">
                  <img src={android} alt="Android" />
                </div>
                <div className="skill-item">
                  <img src={xml} alt="XML" />
                </div>

                {/* Frameworks */}
                <div className="skill-item">
                  <img src={angular} alt="Angular" />
                </div>
                <div className="skill-item">
                  <img src={react} alt="React" />
                </div>

                <div className="skill-item">
                  <img src={bootstrap} alt="Bootstrap" />
                </div>
                <div className="skill-item">
                  <img src={postman} alt="Postman" />
                </div>

                {/* Databases */}
                <div className="skill-item">
                  <img src={sqlite} alt="SQLite" />
                </div>
                <div className="skill-item">
                  <img src={firebase} alt="Firebase" />
                </div>
                <div className="skill-item">
                  <img src={mysql} alt="MySQL" />
                </div>
                <div className="skill-item">
                  <img src={nodejs} alt="NodeJs" />
                </div>

                {/* UI/UX Design Tools */}
                <div className="skill-item">
                  <img src={adobexd} alt="Adobe XD" />
                </div>
                <div className="skill-item">
                  <img src={figma} alt="Figma" />
                </div>

                <div className="skill-item">
                  <img src={canva} alt="Canva" />
                </div>

                {/* Tools */}
                <div className="skill-item">
                  <img src={androidstudio} alt="Android Studio" />
                </div>
                <div className="skill-item">
                  <img src={visualstudio} alt="Visual Studio" />
                </div>
                <div className="skill-item">
                  <img src={jira} alt="Jira" />
                </div>
                <div className="skill-item">
                  <img src={bitbucket} alt="Jira" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
