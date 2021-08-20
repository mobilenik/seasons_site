import React, { Component } from "react";
import MediaQuery from 'react-responsive'

export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">

                <MediaQuery maxWidth={600}>
                    <div className="modal-content-mob container">
                        <div className="close container-cell" onClick={this.handleClick}>&times;</div>
                        <div className="container-cell">Thanks for your enquiry.</div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <div className="modal-content container">
                        <div className="container-cell">Thanks for your enquiry.</div>
                        <div className="close container-cell" onClick={this.handleClick}>&times;</div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}