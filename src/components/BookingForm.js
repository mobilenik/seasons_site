import React from 'react'
import BookingPopup from "./Popup";

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

class BookingForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameFirst: "",
            nameLast: "",
            email1: "",
            email2: "",
            class: "",
            pack: "",
            payments: "",
            comments: "",
            payment: "",
            terms: false,
            open: false,
            openError: false,
            valid: false,
            emailMatch: true
        }
    }

    componentDidMount() {
        let search = window.location.search
        const success = search.split("=")[1]
        if (success) {
            if (success === 'true' || success === true) {
                this.setState({
                    open: true
                })
            } else if (success === 'false') {
                this.setState({
                    openError: true
                })
            }
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.checkValid()
    }

    handleRadioChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        this.checkValid()
    }

    checkValid = () => {
        this.setState({ valid: (this.state.nameFirst !== "" && this.state.nameLast !== "" && this.state.email1 !== "" && (this.state.email1 === this.state.email2) && this.state.class !== "" && this.state.pack !== "") ? true : false })
    }

    checkEmail = () => {
        this.setState({ emailMatch: (this.state.email1 === "" || this.state.email2 === "" || (this.state.email1 !== "" && (this.state.email1 === this.state.email2))) ? true : false })
        this.checkValid()
    }

    handleClose = () => {
        this.setState({ open: false })
        window.location.href = "/"
    }

    handleCloseError = () => {
        this.setState({ openError: false })
        window.location.href = "/"
    }

    x_getRequest = (to, subject, msg) => {

        var url = 'https://www.seasonssidcup.co.uk/php/sendmail.php?subject=' + subject + '&to=' + to + '&msg=' + msg

        fetch(url,
            {
                'headers': {
                    'Accept': 'text/html',
                    'Content-Type': 'text/html'
                },
                'method': 'GET',

            })
            .then(
                (result) => {
                    if (result.status === 200) {
                        this.setState({ open: true })
                        this.setState({
                            nameFirst: "",
                            nameLast: "",
                            email1: "",
                            email2: "",
                            class: "",
                            pack: "",
                            payments: "",
                            comments: "",
                            terms: false,
                            valid: false,
                            emailMatch: true
                        })
                    } else {
                        console.log('failed')
                        this.setState({ openError: true })
                    }
                },
                (error) => {
                    console.log('ERROR')
                    console.log(error)
                    this.setState({ openError: true })
                }
            )
    }

    x_sendMail = (event) => {
        event.preventDefault()
        if (this.state.nameFirst !== '' && this.state.nameLast !== '' && this.state.email !== '') {
            const msg = "nameFirst=" + this.state.nameFirst + ", nameLast=" + this.state.nameLast + ", email=" + this.state.email1 + ", class=" + this.state.class + ", pack=" + this.state.pack + ", comment=" + this.state.comments
            this.getRequest('seasonssidcup@gmail.com, info@seasonssidcup.co.uk', 'New Booking', msg)
        }
    }

    sendMail = (event) => {
        event.preventDefault()
        if (this.state.terms === false && this.state.nameFirst !== '' && this.state.nameLast !== '' && this.state.email1 !== '') {

            var msg = 'First Name: ' + this.state.nameFirst
            msg = msg + '\r\nLast Name: ' + this.state.nameLast
            msg = msg + '\r\nEmail: ' + this.state.email1
            msg = msg + '\r\nClass: ' + this.state.class
            msg = msg + '\r\nPack: ' + this.state.pack
            msg = msg + '\r\nComment: ' + this.state.comments

            var url = '/backend/sendmail.php?subject=New Booking&to=seasonssidcup@gmail.com,info@seasonssidcup.co.uk&page=booking&msg=' + msg
            const encoded = encodeURI(url)

            window.location.replace(encoded)

        } else if (this.state.terms === true) {
            //this.togglePop();
        }
    }

    render() {
        return (
            <div>
                <div className="panel">
                    <div className="panel-body">
                        <form className="form">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="column" width="50%">
                                            <label>First Name *</label>
                                            <input type="text" name="nameFirst" value={this.state.nameFirst} onBlur={this.checkValid} onChange={this.handleInputChange} width="100%" className="field" required />
                                            <br />
                                            <br />
                                            <label>Last Name *</label>
                                            <input type="text" name="nameLast" value={this.state.nameLast} onBlur={this.checkValid} onChange={this.handleInputChange} width="100%" className="field" required />
                                            <br />
                                            <br />
                                            <label>Email Address *</label>
                                            <input type="email" name="email1" value={this.state.email1} onBlur={this.checkEmail} onChange={this.handleInputChange} width="100%" className="field" />
                                            <br />
                                            <br />
                                            <label>Confirm Email Address *</label>
                                            <input type="email" name="email2" value={this.state.email2} onBlur={this.checkEmail} onChange={this.handleInputChange} width="100%" className={this.state.emailMatch ? "field" : "fieldError"} />
                                            <br />
                                            <br />
                                            <p className="label">We will only use these details to manage your booking.  You can read our privacy policy <u><a href="/privacy">here</a></u>.</p>
                                        </td>
                                        <td className="column">
                                            <label>Which session would you like to attend? *</label><br />
                                            <div id="class" onChange={this.handleRadioChange}>
                                                <input type="radio" id="class" name="class" value="am" />AM
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" id="class" name="class" value="pm" />PM
                                            </div>
                                            <br />
                                            <br />
                                            <label>Would you like an optional starter pack? *</label><br />
                                            <div id="pack" onChange={this.handleRadioChange}>
                                                <input type="radio" id="pack" name="pack" value="yes" />Yes
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" id="pack" name="pack" value="no" />No
                                            </div>
                                            <br />
                                            <br />
                                            <label>Comments</label>
                                            <textarea name="comments" rows="2" value={this.state.comments} onChange={this.handleInputChange} onFocus={this.checkValid} className='field'></textarea>
                                            <br />
                                            <br />
                                            <Text2 />
                                            <input type="checkbox" id="terms" name="terms" value="false" className="terms"></input><label className="terms">Do you agree to our terms and conditions?</label>
                                            <input type="submit" value="Submit" className="button" onClick={this.sendMail} disabled={!this.state.valid} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {this.state.open ? <BookingPopup toggle={this.handleClose} msg="Thank you for your booking.  It will be confirmed once payment of the initial installment is received." /> : null}
                            {this.state.openError ? <BookingPopup toggle={this.handleCloseError} msg="There was a problem submitting your booking request.  Please try again shortly." /> : null}
                        </form>
                    </div >
                </div>
            </div>
        )
    }
}

export default BookingForm
