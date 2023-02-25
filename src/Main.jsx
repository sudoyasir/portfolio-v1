import Logo from '../src/img/logo.png'
import MyPicture from '../src/img/me.jpg'
import Product1 from '../src/img/product-1.png'
import Product2 from '../src/img/product-2.png'
import Product3 from '../src/img/product-3.png'
import Product4 from '../src/img/product-4.png'

export default function Main(){
    return(<>
    
    <section id='NavigationBar'data-aos="fade" data-aos-duration="4000">
    <div className="container">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={Logo} alt="" /> <b> &nbsp;Yasir</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#NavigationBar">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    </section>


    <section id='hero'>
        <div className="container">
            <div className="row" >
                <div className="col-md-7 col-sm-12 topContact" data-aos="fade" data-aos-duration="2000">
                <div className=" rounded-5 position-relative p-5 bg_light" >
                    <img src={MyPicture} className='bgImg1' alt="" />
                    <h1 style={{fontWeight:'700'}}>Hello, I'm Yasir, a web <br />Developer with 2+ years of <br />experience</h1>
                    <p  className='my-4'>As a frontend web developer, I am dedicated to creating visually stunning and highly functional websites that meet the needs of my clients and their users. With a keen eye for design and a passion for clean, efficient code, I strive to create websites that are both beautiful and intuitive, delivering seamless user experiences across all devices.</p>
                    <div className="homeContact" style={{marginTop:'5rem'}}>
                        <a href="mailto:y451rmahar@gmail.com"><button className='btn btnContact rounded-pill px-4 py-2'>Contact Me</button></a>
                        <ul>
                            <li>
                                <a href="https://instagram.com/yasirnawazzz" target='_blank'><i className='fa fa-instagram'></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/YasirsThoughts" target='_blank'><i className='fa fa-twitter'></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/yasirnawaz24/" target='_blank'><i className='fa fa-linkedin'></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/yasir2002" target='_blank'><i className='fa fa-github'></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

                <div className="col-md-5 col-sm-12 imgContainer " data-aos="fade" data-aos-duration="3000">
                    <img src={MyPicture} className='img-fluid rounded-5 ' alt="" />
                </div>
            </div>
        </div>
    </section>


    <section id='projects'>
        <div className="container px-0">
            <div className="row">
                <div className="col-md-6 rounded-5 mt-4" data-aos="fade" data-aos-duration="2500">
                    <div className="product">
                        <div><img src={Product1} className='img-fluid rounded-5' alt="" /></div>
                        <h3 className='productText'>Bits & Bytes</h3>
                        <a href='https://yasir2002.github.io/projects/bitsbytes/' target='_blank' className='eyeIcon shadow'><i className='fa fa-eye'></i></a>
                        <a data-bs-toggle="offcanvas" data-bs-target="#bitsbytes" aria-controls="offcanvasRight" className='linkIcon'><i className='fa fa-circle-info'></i></a>
                    </div>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="bitsbytes" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Bits & Bytes</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>
                        The Bits&Bytes website project is a front-end template for an online coding academy that was assigned by my university teacher. The template is designed to showcase my front-end web development skills and create a user-friendly interface for an online coding academy.
                        </p>
                        <p>
                            The website template has a modern and professional design that reflects the image of the online coding academy. The home page introduces the academy and provides a brief overview of the courses and programs offered. The website also has a registration page where new students can sign up and create an account.
                        </p>
                        <p>
                        The website template has a responsive design that allows students to access the course content on different devices, such as desktop computers, laptops, tablets, and smartphones.
                        </p>
                        <p>
                        Overall, the Bits&Bytes website template project is an excellent way to demonstrate my front-end web development skills and create a user-friendly interface for an online coding academy. The template can be customized and used as a starting point for a full-scale online coding academy website with a back-end functionality.
                        </p>
                        <a href="https://yasir2002.github.io/projects/bitsbytes/" target='_blank'><button className='btn btnContact rounded-pill px-4 py-2'>Visit Site</button></a>
                    </div>
                </div>


                <div className="col-md-6 rounded-5 mt-4" data-aos="fade" data-aos-duration="2000">
                    <div className="product">
                        <a><img src={Product2} className='img-fluid rounded-5' alt="" /></a>
                        <h3 className='productText'>Codecademy</h3>
                        <a href='https://yasir2002.github.io/projects/codecademy/' target='_blank' className='eyeIcon'><i className='fa fa-eye'></i></a>
                        <a data-bs-toggle="offcanvas" data-bs-target="#codecademy" aria-controls="offcanvasLeft" className='linkIcon'><i className='fa fa-circle-info'></i></a>
                    </div>
                </div>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="codecademy" aria-labelledby="offcanvasLeftLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasLeftLabel">Codycademy</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <p>
                        The Codecademy website project is a front-end template for an online coding academy that was assigned by my university teacher. The template is designed to showcase my front-end web development skills and create a user-friendly interface for an online coding academy.
                        </p>
                        <p>
                            The website template has a modern and professional design that reflects the image of the online coding academy. The home page introduces the academy and provides a brief overview of the courses and programs offered. The website also has a registration page where new students can sign up and create an account.
                        </p>
                        <p>
                        The website template has a responsive design that allows students to access the course content on different devices, such as desktop computers, laptops, tablets, and smartphones.
                        </p>
                        <p>
                        Overall, the Codecademy website template project is an excellent way to demonstrate my front-end web development skills and create a user-friendly interface for an online coding academy. The template can be customized and used as a starting point for a full-scale online coding academy website with a back-end functionality.
                        </p>
                        <a href="https://yasir2002.github.io/projects/codecademy/" target='_blank'><button className='btn btnContact rounded-pill px-4 py-2'>Visit Site</button></a>
                    </div>
                </div>

            </div>

            <div className="row" data-aos="" data-aos-duration="2000">
                <div className="col-md-6 rounded-5 mt-4" data-aos="fade" data-aos-duration="3000">
                    <div className="product">
                        <a><img src={Product3} className='img-fluid rounded-5' alt="" /></a>
                        <h3 className='productText'>Conky Configuration</h3>
                        <a href='https://github.com/yasir2002/Conky-Config-Files' target='_blank' className='eyeIcon'><i className='fa fa-eye'></i></a>
                        <a href='https://github.com/yasir2002/Conky-Config-Files' target='_blank' className='linkIcon'><i className='fa fa-circle-info'></i></a>
                    </div>
                </div>

                <div className="col-md-6 rounded-5 mt-4" data-aos="fade" data-aos-duration="2000">
                    <div className="product">
                        <a><img src={Product4} className='img-fluid rounded-5' alt="" /></a>
                        <h3 className='productText'>Tweeting Bot</h3>
                        <a href='https://github.com/yasir2002/Conky-Config-Files' target='_blank' className='eyeIcon'><i className='fa fa-eye'></i></a>
                        <a href='https://github.com/yasir2002/Auto-Tweeting-Twitter-Bot' target='_blank' className='linkIcon'><i className='fa fa-circle-info'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id='footer' data-aos="fade" data-aos-duration="3000">
    <div className="container mt-4 rounded-5 position-relative p-5 bg_light">
            <img src={MyPicture} className='bgImg1' alt="" />
            <h1 style={{fontWeight:'700'}}>Want to work together?</h1>
            <p  className='my-4'>Feel free to reach out for collaborations or just a friendly hello.</p>
            <a href="mailto:y451rmahar@gmail.com" style={{textDecoration:'none', color:'#1d1d1d'}}>y451rmahar@gmail.com</a>
            <div className="homeContact" style={{marginTop:'5rem'}}>
            <a href="mailto:y451rmahar@gmail.com"><button className='btn btnContact rounded-pill px-4 py-2'>Contact Me</button></a>
                <ul>
                    <li>
                        <a href="https://instagram.com/yasirnawazzz" target='_blank'><i className='fa fa-instagram'></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/YasirsThoughts" target='_blank'><i className='fa fa-twitter'></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yasirnawaz24/" target='_blank'><i className='fa fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/yasir2002" target='_blank'><i className='fa fa-github'></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    
    </>);
}