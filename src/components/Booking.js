import React from 'react'
import MediaQuery from 'react-responsive'
import BookingForm from './BookingForm'
import BookingFormMob from './BookingFormMob'

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>If you would like to secure a place for the next course then please fill out the form below and pay the initial installment of £99 by bank transfer.</p>
            </div>
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
                        <Text1 />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <div className="panel-header">Booking</div>
                    <div className="panel-body">
                        <Text1 />
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={600}>
                    <BookingFormMob />
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <BookingForm />
                </MediaQuery>
            </div>
        )
    }
}

export default Booking
