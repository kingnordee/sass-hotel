import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import aboutUsImg from "../media/images/about-us-img.png"
import img1 from "../media/images/gallery-img-1.jpeg"
import img2 from "../media/images/gallery-img-2.jpeg"
import img3 from "../media/images/gallery-img-3.jpeg"
import img4 from "../media/images/gallery-img-4.jpeg"
import img5 from "../media/images/gallery-img-5.jpeg"
import img6 from "../media/images/gallery-img-6.jpeg"
import NavBar from "./NavBar";


const Home = () => {
    return(
        <div className="Home">
            <NavBar/>
            {/* HEADER */}
            <header className="header">
                <div className="brand">
                    <a href="#" className="logo"><FontAwesomeIcon icon={fas.faUtensils} /></a>
                    <div>
                        <h1 className="main-name">Bon Feast</h1>
                        <p className="sub-name">Restaurant</p>
                    </div>
                </div>

                <div className="header-banner">
                    <h1 className="main-heading">Welcome</h1>
                    <h3 className="sub-heading">Try Great 9ja Dishes!</h3>
                    <button type="button" className="main-btn">Reservation</button>
                </div>
            </header>
            {/* END OF HEADER* /}

        {/*  ABOUT US  */}
        <section className="about-us">
            <div className="about-us-left">
                <img src={aboutUsImg} alt="../media/images/about-us-img.png"/>
            </div>
            <div className="about-us-right">
                <h1 className="main-heading">About us</h1>
                <h3 className="sub-heading">Get to know about 9ja dishes</h3>
                <div className="stars">
                    <FontAwesomeIcon className="star" icon={fas.faStarOfLife} />
                    <FontAwesomeIcon className="star" icon={fas.faStarOfLife} />
                    <FontAwesomeIcon className="star" icon={fas.faStarOfLife} />
                </div>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis culpa dicta dignissimos exercitationem fuga illo
                        itaque iusto laudantium nemo nisi porro, quae quas vel voluptas
                        voluptates. Animi asperiores, blanditiis consectetur eaque illum
                        incidunt, inventore maiores officia perspiciatis provident quae veritatis,
                        voluptatem voluptatum! Ab cupiditate eius fugit natus quasi recusandae ut!
                    </p>
                <div className="stars">
                    <FontAwesomeIcon className="star" icon={fas.faStarOfLife} />
                    <FontAwesomeIcon className="star" icon={fas.faStarOfLife} />
                    <FontAwesomeIcon className="star" icon={fas.faStarOfLife} />
                </div>

                <button type="button" className="main-btn">Read more...</button>
            </div>
        </section>
        {/*  END OF ABOUT US  */}

        {/* GALLERY */}
        <section className="gallery">
            <div className="cards-wrapper">
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={img1} className="card-img"/>
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={img2} className="card-img"/>
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={img3} className="card-img"/>
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={img4} className="card-img"/>
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={img5} className="card-img" alt="Menu Item"/>
                </div>
                <div className="card">
                    <div className="card-overlay">
                        <h1 className="card-overlay-heading">Food Name</h1>
                        <p className="card-overlay-paragraph">Price: $30.00</p>
                        <button type="button" className="card-overlay-btn">Order Now</button>
                    </div>
                    <img src={img6} className="card-img"/>
                </div>
            </div>
        </section>
        {/* END OF GALLERY */}

        {/* FOOTER */}
            <div className="footer">
                <div className="footer-header">
                    <a href="#" className="logo"><FontAwesomeIcon icon={fas.faUtensils} /></a>
                    <div>
                        <h1 className="main-name">Bon Feast</h1>
                        <p className="sub-name">Restaurant</p>
                    </div>
                </div>
                <div className="footer-social-media">
                    <ul className="social-media">
                        <li className="social-media-item">
                            <a href="" className="social-media-link">
                                <i><FontAwesomeIcon icon={ fab.faFacebookSquare } /></i>
                            </a>
                        </li>
                        <li className="social-media-item">
                            <a href="" className="social-media-link">
                                <i><FontAwesomeIcon icon={ fab.faInstagram } /></i>
                            </a>
                        </li>
                        <li className="social-media-item">
                            <a href="" className="social-media-link">
                                <i><FontAwesomeIcon icon={ fab.faGooglePlusSquare } /></i>
                            </a>
                        </li>
                        <li className="social-media-item">
                            <a href="" className="social-media-link">
                                <i><FontAwesomeIcon icon={ fab.faYoutube } /></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p className="footer-copyright-paragraph">
                        &copy; Copyright. Bon Feast. All Rights Reserved.
                    </p>
                </div>
            </div>
        {/* FOOTER ENDS */}

        </div>//END OF HOME
    )
}

export default Home;
