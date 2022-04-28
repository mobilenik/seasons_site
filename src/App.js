import './css/site.css'
//import './css/App.css'
import { slide as Menu } from 'react-burger-menu'
import logo from './img/logo_wo.webp'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Location from './components/Location.js'
import Contact from './components/Contact.js'
import Curriculum from './components/Curriculum.js'
import Privacy from './components/Privacy.js'
import Home from './components/Home.js'
import ExSum21 from './components/ExSum21'
import ExAut21 from './components/ExAut21'
import Booking from './components/Booking'
import ExSpr22 from './components/ExSpr22'
import MediaQuery from 'react-responsive'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import { IoLogoFacebook } from 'react-icons/io'


function App() {

  return (
    <div>
      <Router>
        <MediaQuery minWidth={601}>
          <Menu width={'220px'}>
            <a id="home" className="menu-item" href="/">Home</a>
            <div id="course" className="menu-group">Course</div>
            <a id="curriculum" className="menu-item-small" href="/curriculum">Curriculum</a>
            <a id="location" className="menu-item-small" href="/location">Location</a>
            <div id="exhibition" className="menu-group">Exhibitions</div>
            <a id="sum21" className="menu-item-small" href="/exsum21">Summer 2021</a>
            <a id="aut21" className="menu-item-small" href="/exaut21">Autumn 2021</a>
            <a id="spr22" className="menu-item-small" href="/exspr22">Spring 2022</a>
            <div id="info" className="menu-group">Extra Info</div>
            <a id="contact" className="menu-item-small" href="/contact">Contact Us</a>
            <a id="privacy" className="menu-item-small" href="/privacy">Privacy Statement</a>
          </Menu>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Menu width={'250px'}>
            <a id="home" className="menu-item-mob" href="/">Home</a>
            <div id="course" className="menu-group-mob">Course</div>
            <a id="curriculum" className="menu-item-small-mob" href="/curriculum">Curriculum</a>
            <a id="location" className="menu-item-small-mob" href="/location">Location</a>
            <div id="exhibition" className="menu-group-mob">Exhibitions</div>
            <a id="sum21" className="menu-item-small-mob" href="/exsum21">Summer 21</a>
            <a id="aut21" className="menu-item-small-mob" href="/exaut21">Autumn 21</a>
            <a id="spr22" className="menu-item-small-mob" href="/exspr22">Spring 22</a>
            <div id="info" className="menu-group-mob">Extra Info</div>
            <a id="contact" className="menu-item-small-mob" href="/contact">Contact Us</a>
            <a id="privacy" className="menu-item-small-mob" href="/privacy">Privacy Statement</a>
          </Menu>
        </MediaQuery>

        <div className="menu-bar">

          <div className="menu-left">
            <MediaQuery minWidth={600}>
              <img src={logo} className="logo" alt=""></img>
            </MediaQuery>
          </div>
          <div className="menu-center">

            <MediaQuery minWidth={1001}>
              <div className="title-center-l">The Seasons Art Class</div>
              <div className="title-center-l-sub">Sidcup &amp; Chislehurst</div>
            </MediaQuery>

            <MediaQuery minWidth={601} maxWidth={1000}>
              <div className="title-center-m">The Seasons Art Class</div>
              <div className="title-center-m-sub">Sidcup &amp; Chislehurst</div>
            </MediaQuery>

            <MediaQuery maxWidth={600}>
              <div className="title-center-s">The Seasons Art Class</div>
              <div className="title-center-s-sub">Sidcup &amp; Chislehurst</div>
            </MediaQuery>

          </div>
          <div className="menu-right">
            <MediaQuery minWidth={601}>
              <a href="/contact"><HiPhone className="contact-phone" /><HiOutlineMail className="contact-phone" /><IoLogoFacebook className="contact-phone" /></a>
            </MediaQuery>
            <MediaQuery maxWidth={600}>
              <a href="/contact"><HiPhone className="contact-phone" /></a>
            </MediaQuery>
          </div>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/curriculum" component={Curriculum} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/location" component={Location} />
        <Route path="/exsum21" component={ExSum21} />
        <Route path="/exaut21" component={ExAut21} />
        <Route path="/exspr22" component={ExSpr22} />
        <Route path="/booking" component={Booking} />

      </Router>
    </div>
  );
}


export default App;
