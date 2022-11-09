import React from 'react'
import MediaQuery from 'react-responsive'
import BookingPopup from "./Popup";
//import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>If you would like to secure a place for the next course then please fill out the form below and pay the initial installment of £99 by bank transfer.</p>
            </div>
        );
    }
}

class Text2 extends React.Component {
    render() {
        return (
            <div>
                <p>Payment can be made by bank transfer to the following account:</p>
                <table className='bankdetails'>
                    <tbody>
                        <tr><td className='bankDetails'>Account Name:</td><td>The Seasons Art Class Sidcup</td></tr>
                        <tr><td className='bankDetails'>Sort code:</td><td>23-69-72</td></tr>
                        <tr><td className='bankDetails'>Account Number:&nbsp;</td><td>29634320</td></tr>
                    </tbody>
                </table>
            </div >
        );
    }
}

class Booking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameFirst: "",
            nameLast: "",
            email1: "",
            email2: "",
            session: "",
            pack: "",
            payments: "",
            comments: "",
            terms: false,
            open: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    getRequest = (url, to, subject, msg) => {
        fetch(url,
            {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                'method': 'POST',
                'body': JSON.stringify({
                    'subject': subject,
                    'to': to,
                    'msg': msg,
                }),
            })
            .then(res => res)
            .then(
                (result) => {
                    console.log(result)
                    if (result.status === 200) {
                        this.setState({ open: true })
                    } else {
                        console.log('failed')
                    }
                },
                (error) => {
                    console.log('ERROR')
                    console.log(error)
                }
            )
    }

    sendMail = (event) => {
        event.preventDefault()
        if (this.state.nameFirst !== '' && this.state.nameLast !== '' && this.state.email !== '') {
            this.setState({ open: true });

            const msg = "nameFirst=" + this.state.nameFirst + "\nnameLast=" + this.state.nameLast + "\nemail=" + this.state.email1
            console.log('sending')
            this.getRequest('https://seasonssidcup.co.uk/php/sendmail.php', 'info@seasonssidcup.co.uk', 'New Booking', msg)
        }
    }

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

                <div className="panel">
                    <div className="panel-body">
                        <form className="form">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="column">
                                            <label>First Name (*)</label>
                                            <input type="text" name="nameFirst" value={this.state.nameFirst} onChange={this.handleInputChange} width="100%" className="field" required />
                                            <br />
                                            <br />
                                            <label>Last Name (*)</label>
                                            <input type="text" name="nameLast" value={this.state.nameLast} onChange={this.handleInputChange} width="100%" className="field" required />
                                            <br />
                                            <br />
                                            <label>Email Address (*)</label>
                                            <input type="text" name="email1" value={this.state.email1} onChange={this.handleInputChange} width="100%" className="field" />
                                            <br />
                                            <br />
                                            <label>Confirm Email Address (*)</label>
                                            <input type="text" name="email2" value={this.state.email2} onChange={this.handleInputChange} width="100%" className="field" />
                                        </td>
                                        <td className="column">
                                            <label>Comments</label>
                                            <textarea name="comments" value={this.state.comments} onChange={this.handleInputChange}></textarea>
                                            <br />
                                            <br />
                                            <input type="checkbox" id="terms" name="terms" value="false" className="terms"></input><label className="terms">Do you agree to our terms and conditions?</label>
                                            <input type="submit" value="Submit" className="button" onClick={this.sendMail} />

                                        </td>
                                    </tr>
                                    <tr >
                                        <td className="column" colSpan='2'>
                                            <Text2 />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {this.state.open ? <BookingPopup toggle={this.handleClose} msg="Thank you for your booking." /> : null}
                        </form>
                    </div >
                </div>
            </div>
        )
    }
}

export default Booking
