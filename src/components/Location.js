import React from 'react';
import ParkingMap from '../img/parking.png'
import MediaQuery from 'react-responsive'

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>We meet on a Tuesday at Lamorbey Residents' Association Hall (also called The Pavilion).  The entrance to the hall is along a pathway off of Burnt Oak Lane.</p>
            </div>
        );
    }
}

class Text2 extends React.Component {
    render() {
        return (
            <div>
                <p>There is some unrestricted on-street parking in Rowanwood Avenue and outside Rose Bruford College where you can park at any time, and controlled parking in Burnt Oak Lane and Malborough Park Avenue where you can park in the mornings. There is also paid parking in the Leisure Center off Hurst Road, and you can quickly walk through the Glades to Burnt Oak Lane.</p>
            </div>
        );
    }
}


class Location extends React.Component {
    render() {
        return <div className="panel">
            <MediaQuery maxWidth={600}>
                <div className="panel-header-mob">Location</div>
                <div className={"panel-body-mob"}>
                    <Text1 />
                    <img src={ParkingMap} className="parking-mob" alt="Parking Map" />
                    <Text2 />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <div className="panel-header">Location</div>
                <div className="panel-body">
                    <table><tbody>
                        <tr>
                            <td className="parking-image">
                                <p><img src={ParkingMap} className="parking" alt="Parking Map" /></p>
                            </td>
                            <td className="parking-text">
                                <Text1 />
                                <Text2 />
                            </td>
                        </tr>
                    </tbody></table>
                </div>
            </MediaQuery>

        </div>
    }
}

export default Location;
