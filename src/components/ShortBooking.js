import React from 'react'
import MediaQuery from 'react-responsive'
import ShortBookingForm from './ShortBookingForm'
import ShortBookingFormMob from './ShortBookingFormMob'

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>If you would like to secure a place on one of our afternoon short courses then please fill out the form below and pay the full amount by bank transfer.</p>
            </div>
        )
    }
}

class ShortBooking extends React.Component {


    render() {
        return (
            <div>
                <MediaQuery maxWidth={600}>
                    <div className="panel-header-mob">Short Course Booking</div>
                    <div className="panel-body-mob">
                        <Text1 />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <div className="panel-header">Short Course Booking</div>
                    <div className="panel-body">
                        <Text1 />
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={600}>
                    <ShortBookingFormMob />
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <ShortBookingForm />
                </MediaQuery>
            </div>
        )
    }
}

export default ShortBooking
