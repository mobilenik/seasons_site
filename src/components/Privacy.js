import React from 'react';
import MediaQuery from 'react-responsive'

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>This privacy policy will explain how we collect and use the personal data we collect from you.</p>

                <h3>What is collected and how do we use it?</h3>

                <p>We collect personal identification information (name, email address, phone number, etc.) when you contact us by telephone, through this website, or through our parent website (<a href="https://www.theseasonsartclass.com">theseasonsartclass.com</a>).</p>
                <p>We only use this information to send you details and news about our classes.  We will not share your data with any other company.</p>
                <p>We store your information on a secure cloud file store and will remove your data if you no longer wish to attend or be kept informed about our classes.</p>

                <h3>What are your data protection rights?</h3>
                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>

                <ul>
                    <li>The right to access – to request copies of your personal data. We may charge you a small fee for this service.</li>
                    <li>The right to rectification – to request that we correct or complete any information you believe is inaccurate or incomplete.</li>
                    <li>The right to erasure – to request that we erase your personal data, under certain conditions.</li>
                    <li>The right to restrict processing – to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li>The right to object to processing – to object to the way we process your personal data, under certain conditions.</li>
                    <li>The right to data portability – to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>

                <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                <p>Should you wish to report a complaint or if you feel that we have not addressed your concern in a satisfactory manner, you may contact the Information Commissioner’s Office.</p>
            </div>
        );
    }
}

class Privacy extends React.Component {
    render() {
        return <div className="panel">
            <MediaQuery maxWidth={600}>
                <div className="panel-header-mob">Privacy Policy</div>
                <div className={"panel-body-mob"}>
                    <Text1 />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <div className="panel-header">Privacy Policy</div>
                <div className={"panel-body"}>
                    <Text1 />
                </div>
            </MediaQuery>
        </div>
    }
}

export default Privacy;
