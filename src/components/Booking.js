import React from 'react';
import MediaQuery from 'react-responsive';
import BookingForm from './BookingForm';
import BookingFormMob from './BookingFormMob';

class TextIntro extends React.Component {
  render() {
    return (
      <div>
        <p>
          If you would like to secure a place for the next course then please
          check the terms and conditions at the bottom of this page, fill out
          the booking form and pay the initial installment of £125 by bank
          transfer.
        </p>
      </div>
    );
  }
}

class TextTerms extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <div className="panel-title font-bold">Terms and Conditions</div>
        <br />
        <div className="font-bold">Cancellation</div>
        <ol>
          <li>
            Cancellation by you of a course 14 days prior to the commencement
            date of a course will entitle you to a 70% refund of your course fee
            paid. Please note, If you cancel a course less than 5 days before
            the start of the course no course fees will be refunded.
          </li>
          <li>All cancellations must be made in writing by email.</li>
          <li>
            It is very rare that we have to cancel a course and we reserve the
            right to cancel a course or event, if this should happen you will be
            refunded 100% of course fees with no administration charge.
          </li>
          <li>
            In the event that a class is postponed for reasons that are outside
            of our control we will give you notice as soon we are aware of the
            problem. We reserve the right to change the date of a class during
            the course.
          </li>
        </ol>
        <div className="font-bold">Curriculum</div>
        <ol>
          <li>
            We reserve the right to make changes to the course curriculum as may
            be necessary.
          </li>
        </ol>
        <div className="font-bold">Missed Classes</div>
        <ol>
          <li>
            We are unable to discount our courses. For those students who are
            not returning for another term they will be able to make up a
            maximum of three missed lessons the following term.
          </li>
        </ol>
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
          <TextTerms />
        </div>
      </div>
    );
  }
}

export default Booking;
