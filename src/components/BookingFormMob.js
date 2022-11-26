import React from 'react'
import BookingPopup from "./Popup";

class BookingFormMob extends React.Component {

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
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRadioChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    checkValid = () => {
        this.setState({ valid: (this.state.nameFirst !== "" && this.state.nameLast !== "" && this.state.email1 !== "" && (this.state.email1 === this.state.email2)) ? true : false })
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


    sendMail = (event) => {
        event.preventDefault()

        if (this.state.terms === false && this.state.nameFirst !== '' && this.state.nameLast !== '' && this.state.email1 !== '') {

            console.log(this.state.class)
            console.log(this.state.pack)

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
            <div className="panel-mobile">
                <div className="panel-body-mob">
                    <form className="form-mobile">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="column-mobile">
                                        <label>First Name *</label>
                                        <input type="text" name="nameFirst" value={this.state.nameFirst} onBlur={this.checkValid} onChange={this.handleInputChange} className="field" required />
                                        <br />
                                        <br />
                                        <label>Last Name *</label>
                                        <input type="text" name="nameLast" value={this.state.nameLast} onBlur={this.checkValid} onChange={this.handleInputChange} className="field" required />
                                        <br />
                                        <br />
                                        <label>Email Address *</label>
                                        <input type="email" name="email1" value={this.state.email1} onBlur={this.checkEmail} onChange={this.handleInputChange} className={this.state.emailMatch ? "field" : "fieldError"} required />
                                        <br />
                                        <br />
                                        <label>Confirm Email Address *</label>
                                        <input type="email" name="email2" value={this.state.email2} onBlur={this.checkEmail} onChange={this.handleInputChange} width="100%" className={this.state.emailMatch ? "field" : "fieldError"} required />
                                        <br />
                                        <br />
                                        <label>Which session would you like to attend?</label><br />
                                        <div id="class" onChange={this.handleRadioChange}>
                                            <input type="radio" id="class" name="class" value="am" />AM
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" id="class" name="class" value="pm" />PM
                                        </div>
                                        <br />
                                        <br />
                                        <label>Would you like an optional starter pack?</label><br />
                                        <div id="pack" onChange={this.handleRadioChange}>
                                            <input type="radio" id="pack" name="pack" value="yes" />Yes
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" id="pack" name="pack" value="no" />No
                                        </div>
                                        <br />
                                        <br />
                                        <label>Comments</label>
                                        <textarea name="comments" rows="2" value={this.state.comments} onChange={this.handleInputChange} className='field'></textarea>
                                        <br />
                                        <p className="label">We will only use these details to manage your booking.  You can read our privacy policy <u><a href="/privacy">here</a></u>.</p>
                                        <p>Payment can be made by bank transfer to the following account:</p>
                                        <div className='bankDetails'>Account: The Seasons Art Class Sidcup</div>
                                        <div className='bankDetails'>Sort code: 23-69-72</div>
                                        <div className='bankDetails'>Account Number: 29634320</div>
                                        <input type="checkbox" id="terms" name="terms" value="false" className="terms"></input><label className="terms">Do you agree to our terms and conditions?</label>
                                        <input type="submit" value="Submit" className="button" onClick={this.sendMail} disabled={!this.state.valid} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {this.state.open ? <BookingPopup toggle={this.handleClose} msg="Thank you for your booking.  It will be confirmed once payment of the initial installment is received." /> : null}
                        {this.state.openError ? <BookingPopup toggle={this.handleCloseError} msg="There was a problem submitting your booking request.  Please try again shortly." /> : null}
                    </form>
                    <br />
                </div >
            </div>
        )
    }
}

export default BookingFormMob
