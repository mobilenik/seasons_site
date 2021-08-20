import React from 'react';
import ContactForm from './ContactForm.js';
import ContactFormMob from './ContactFormMob.js';
import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import {IoLogoFacebook} from 'react-icons/io'
import MediaQuery from 'react-responsive'

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>If you would like to speak to somebody about the class or book up for our next course, call or email us directly or fill out the form below and we will call you back.</p>
            </div>
        );
    }
}

class Text2 extends React.Component {
    render() {
        return (
            <div>
                <p>There are many more Seasons Art Classes across the country.  If you are not in our area and would like to be directed to an art class near you, please visit the central website <u><a href="http://www.theseasonsartclass.com/" target="_blank" rel="noreferrer">here</a></u>.</p>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return <div>
            <div className="panel">
                <MediaQuery maxWidth={600}>
                <div className="panel-header-mob">Contact Us</div>
                    <div className={"panel-body-mob"}>
                        <Text1 />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                <div className="panel-header">Contact Us</div>
                    <div className={"panel-body"}>
                        <Text1 />
                    </div>
                </MediaQuery>
                <div className="container"><div className="container-cell"><HiPhone className="contact-phone-icon" /></div><div className="container-cell"><div className="contact-phone">&nbsp;0208 252 2310</div></div></div>
                <div className="container"><div className="container-cell"><a href="mailto:seasonssidcup@gmail?subject=Class Enquiry"><HiOutlineMail className="contact-phone-icon" /></a></div><div className="container-cell"><div className="contact-email">&nbsp;<a href="mailto:seasonssidcup@gmail?subject=Class Enquiry">Mail seasonssidcup@gmail.com</a></div></div></div>
                <div className="container"><div className="container-cell"><a href="https://www.facebook.com/seasonssidcup/"><IoLogoFacebook className="contact-phone-icon" /></a></div><div className="container-cell"><div className="contact-email">&nbsp;<a href="http://www.facebook.com/seasonssidcup/" target="_blank" rel="noreferrer">Click for Facebook page</a></div></div></div>
                <MediaQuery maxWidth={600}>
                    <ContactFormMob></ContactFormMob>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <ContactForm></ContactForm>
                </MediaQuery>

                <MediaQuery maxWidth={600}>
                    <div className={"panel-body-mob"}>
                        <Text2 />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <div className={"panel-body"}>
                        <Text2 />
                    </div>
                </MediaQuery>

            </div>
        </div>
    }
}

export default Contact;
