import React from 'react'
import MediaQuery from 'react-responsive'

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>If you would like to secure a place for the next course starting on May TBD then please fill out the form below and make the deposit payment of £99 either by cheque or bank transfer.</p>
            </div>
        );
    }
}

class Text2 extends React.Component {
    render() {
        return (
            <div>
                <p>Payment can be made by cheque payable to 'The Seasons Art Sidcup', or bank transfer to the following account:</p>
                <table className='bankdetails'>
                    <tr><td className='bankDetails'>Account Name:</td><td>The Seasons Art Sidcup</td></tr>
                    <tr><td className='bankDetails'>Sort code:</td><td> 30-98-97</td></tr>
                    <tr><td className='bankDetails'>Account Number:&nbsp;</td><td>30483363</td></tr>
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
            email: "",
            session: "",
            pack: "",
            payments: "",
            comments: "",
            terms: false,
            seen: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getRequest = (url) => {
        console.log(url)
        //msg='Name: ' + this.state.nameFirst + " "
        fetch(url,
            {
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                'method': 'POST',
                'body': JSON.stringify({
                    'subject': 'New Booking',
                    'to': 'info@seasonssidcup.co.uk',
                    'message': this.state.comments,
                    'nameFirst': this.state.nameFirst,
                    'nameLast': this.state.nameLast,
                    'email': this.state.email,
                    'pack': this.state.pack,

                }),
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log('ERROR')
                    console.log(error)
                }
            )
    }

    sendMail = (event) => {
        event.preventDefault()
        if (this.state.nameFirst !== '' && this.state.nameLast !== '' && this.state.email !== '' & this.state.message !== '') {

            console.log('sending')
            this.getRequest('http://seasonssidcup.co.uk/php/sendmail.php')
        }
    }

    render() {
        return (<div>

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
                            <tbody><tr>
                                <td className="column">
                                    <label>First Name (*)</label>
                                    <input type="text" name="nameFirst" value={this.state.nameFirst} onChange={this.handleInputChange} width="100%" className="field" required />
                                    <br />
                                    <br />
                                    <label>Last Name (*)</label>
                                    <input type="text" name="nameLast" value={this.state.nameLast} onChange={this.handleInputChange} width="100%" className="field" required />
                                    <br />
                                    <br />
                                    <label>Email Address</label>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} width="100%" className="field" />
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
                    </form>
                </div >
            </div>
        </div>
        )

    }
}

export default Booking
