import React from 'react'
import MediaQuery from 'react-responsive'
import BookingForm from './BookingForm'
import BookingFormMob from './BookingFormMob'

class TextIntro extends React.Component {
    render() {
        return (
            <div>
                <p>If you would like to secure a place for the next course then please fill out the form below and pay the initial installment of £125 by bank transfer.</p>
            </div>
        );
    }
}

class TextDisclaimer extends React.Component {
    render() {
        return (
            <div>
                <p>Our cancellation policy allows you to receive a full refund if cancelling within 14 days of booking.</p>
            </div >
        );
    }
}

class Booking extends React.Component {


    render() {
        return (
            <div>
                <MediaQuery maxWidth={600}>
                    <div className="panel-header-mob">Booking</div>
                    <div className="panel-body-mob">
                        <TextIntro />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <div className="panel-header">Booking</div>
                    <div className="panel-body">
                        <TextIntro />
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={600}>
                    <BookingFormMob />
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <BookingForm />
                </MediaQuery>

                <div className="panel-body-mob">
                    <TextDisclaimer />
                </div>
            </div>
        )
    }
}

export default Booking
