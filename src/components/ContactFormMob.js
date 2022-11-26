import React from 'react';
import EnquiryPopup from "./Popup";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
      openSuccess: false,
      openError: false,
      valid: false
    }
  }

  componentDidMount() {
    let search = window.location.search
    const success = search.split("=")[1]
    if (success) {
      if (success === 'true' || success === true) {
        this.setState({
          openSuccess: true
        })
      } else if (success === 'false') {
        this.setState({
          openError: true
        })
      }
    }
  }

  togglePopSuccess = () => {
    this.setState({
      openSuccess: !this.state.openSuccess
    })
    window.location.href = "/contact"

  }

  togglePopError = () => {
    this.setState({
      openError: !this.state.openError
    })
    window.location.href = "/contact"

  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkValid = () => {
    const isValid = (this.state.name !== "" && this.state.phone !== "") ? true : false
    this.setState({ valid: isValid })
  }

  sendMail = (event) => {
    event.preventDefault()

    if (this.state.terms === false && this.state.nameFirst !== '' && this.state.nameLast !== '') {

      var msg = 'Name: ' + this.state.name
      msg = msg + '\r\nPhone: ' + this.state.phone
      msg = msg + '\r\nEmail: ' + this.state.email
      msg = msg + '\r\nMessage: ' + this.state.message

      var url = '/backend/sendmail.php?subject=New Website Enquiry&to=seasonssidcup@gmail.com,info@seasonssidcup.co.uk&page=contact&msg=' + msg
      const encoded = encodeURI(url)

      console.log(encoded)
      console.log('sending')

      window.location.replace(encoded)

    } else if (this.state.terms === true) {
      //this.togglePop();
    }
  }

  render() {
    return (
      <div className="panel-body-mob">
        <form className="form-mobile">
          <table>
            <tbody>
              <tr>
                <td className="column-mobile">
                  <label>Name *</label>
                  <input name="name" type="text" value={this.state.name} onBlur={this.checkValid} onChange={this.handleInputChange} className="field" required />
                  <br />
                  <br />
                  <label>Phone Number *</label>
                  <input name="phone" type="text" value={this.state.phone} onBlur={this.checkValid} onChange={this.handleInputChange} className="field" required />
                  <br />
                  <br />
                  <label>Email Address</label>
                  <input name="email" type="email" value={this.state.email} onBlur={this.checkValid} onChange={this.handleInputChange} className="field" />
                  <br />
                  <br />
                  <label>Message</label>
                  <textarea name="message" value={this.state.message} onChange={this.handleInputChange} className="field" />
                  <br />
                  <input type="checkbox" id="terms" name="terms" value="false" className="terms"></input><label for="terms" className="terms">Do you agree to our terms and conditions?</label>
                  <p className="label">We will only use these details to provide information back to you.  You can read our privacy policy <u><a href="/privacy">here</a></u>.</p>
                  <input type="submit" value="Submit" className="button" onClick={this.sendMail} disabled={!this.state.valid}></input>
                </td>
              </tr>
            </tbody>
          </table>
          {this.state.openSuccess ? <EnquiryPopup toggle={this.togglePopSuccess} msg="Thank you for your enquiry - we will contact you shortly to follow up." /> : null}
          {this.state.openError ? <EnquiryPopup toggle={this.togglePopError} msg="There was a problem submitting your enquiry.  Please try again shortly or phone / email us directly." /> : null}
        </form>
      </div>
    );
  }
}

export default ContactForm;
