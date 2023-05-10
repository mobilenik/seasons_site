import React from 'react'
import BookingPopup from "./Popup";

class ShortBookingFormMob extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameFirst: "",
            nameLast: "",
            email1: "",
            email2: "",
            class_d: "",
            class_p: "",
            class_w: "",
            class_a: "",
            exhibition: "",
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

    handleCheckChange = (event) => {
        this.setState({ [event.target.id]: event.target.checked ? "yes" : "no" })
        this.checkValid()
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

            var msg = 'First Name: ' + this.state.nameFirst
            msg = msg + '\r\nLast Name: ' + this.state.nameLast
            msg = msg + '\r\nEmail: ' + this.state.email1
            msg = msg + '\r\nDrawing Class: ' + this.state.class_d
            msg = msg + '\r\nPastel Class: ' + this.state.class_p
            msg = msg + '\r\nWatercolour Class: ' + this.state.class_w
            msg = msg + '\r\nAcrylic Class: ' + this.state.class_a
            msg = msg + '\r\nExhibition: ' + this.state.exhibition
            msg = msg + '\r\nComment: ' + this.state.comments

            console.log(msg)
            var url = '/backend/sendmail.php?subject=New Short Course Booking&to=seasonssidcup@gmail.com,info@seasonssidcup.co.uk&page=shortbooking&msg=' + msg
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
                                        <label>Which short courses would you like to attend? *</label><br />
                                        <input type="checkbox" id="class_d" name="class_d" value="yes" onChange={this.handleCheckChange} />
                                        <label htmlFor="drawing">Drawing</label><br />
                                        <input type="checkbox" id="class_p" name="class_p" value="yes" onChange={this.handleCheckChange} />
                                        <label htmlFor="pastel">Pastel</label><br />
                                        <input type="checkbox" id="class_w" name="class_w" value="yes" onChange={this.handleCheckChange} />
                                        <label htmlFor="watercolor">Watercolour</label><br />
                                        <input type="checkbox" id="class_a" name="class_a" value="yes" onChange={this.handleCheckChange} />
                                        <label htmlFor="acrylic">Arcylic</label>
                                        <br />
                                        <br />
                                        <label>Would you like to mount and exhibit your work? *</label><br />
                                        <div id="exhibition" onChange={this.handleRadioChange}>
                                            <input type="radio" id="exhibition" name="exhibition" value="Yes" />Yes
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="radio" id="exhibition" name="exhibition" value="No" />No
                                        </div>
                                        <br />
                                        <label>Comments</label>
                                        <textarea name="comments" rows="2" value={this.state.comments} onChange={this.handleInputChange} className='field'></textarea>
                                        <br />
                                        <p className="label">We will only use these details to manage your booking.  You can read our privacy policy <u><a href="/privacy">here</a></u>.</p>
                                        <p>Payment can be made by bank transfer to the following account:</p>
                                        <div className='bankDetails'>Account: Seasons Art Class Sidcup</div>
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

export default ShortBookingFormMob
