import React from 'react';
import PopUp from "./Popup";
import emailjs from 'emailjs-com';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
      seen: false
    }
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.terms === false && this.state.name !== '' & this.state.phone !== '') {
      console.log("sending " + this.state.name);
      emailjs.send("default_service", "template_enquiry", this.state, "user_ZokhdEj86cd48cEMWWePd");

      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
        seen: false
      })
      this.togglePop();
    } else if (this.state.terms === true) {
      this.togglePop();
    }
  }

  render() {
    return (
      <div className={"panel-body-mob"}>
        <form className="form-mobile" onSubmit={this.handleSubmit}>
          <table><tbody>
            <tr>
              <td className="column-mobile">
                <label>Name (*)</label>
                <input name="name" type="text" value={this.state.value} onChange={this.handleInputChange} width="100%" className="field" required />
                <br />
                <br />
                <label>Phone Number (*)</label>
                <input name="phone" type="text" value={this.state.value} onChange={this.handleInputChange} className="field" required />
                <br />
                <br />
                <label>Email Address</label>
                <input name="email" type="email" value={this.state.value} onChange={this.handleInputChange} className="field" />
                <br />
                <br />
                <label>Message</label>
                <textarea name="message" value={this.state.value} onChange={this.handleInputChange} className="field" />
                <br />
                <br />
                <input type="checkbox" id="terms" name="terms" value="false" className="terms"></input><label for="terms" className="terms">Do you agree to our terms and conditions?</label>
                <input type="submit" value="Submit" className="button" onClick={this.handleSubmit}></input>
              </td></tr>
            <tr ><td colspan="2">
              <p className="label">We will only use these details to provide information back to you.  You can read our privacy policy <u><a href="/privacy">here</a></u>.</p>
            </td></tr>
          </tbody>
          </table>
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </form>
      </div>
    );
  }
}

export default ContactForm;
