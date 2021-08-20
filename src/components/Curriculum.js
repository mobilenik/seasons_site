import React from 'react';
import MediaQuery from 'react-responsive'
import DrawingImg from '../img/pencils.jpg'
import DrawingImgMob from '../img/pencils-mob.jpg'
import PastelImg from '../img/pastels.jpg'
import PastelImgMob from '../img/pastels-mob.jpg'
import AcrylicImg from '../img/acrylics.jpg'
import AcrylicImgMob from '../img/acrylics-mob.jpg'
import WatercolourImg from '../img/watercolours.jpg'
import WatercolourImgMob from '../img/watercolours-mob.jpg'
import MountingImg from '../img/mounting.jpg'
import MountingImgMob from '../img/mounting-mob.jpg'
import ExhibitionImg from '../img/exhibition.jpg'
import ExhibitionImgMob from '../img/exhibition-mob.jpg'

class Drawing extends React.Component {
    render() {
        return (
            <div>
                <p>Studies perspective, enlarging, faces and figures.</p>
                <p>This first 3 week module gives you some interesting projects and provides the foundation for the rest of the course.</p>
            </div>
        );
    }
}

class Pastels extends React.Component {
    render() {
        return (
            <div>
                <p>A bright colourful exciting module – interesting step by step projects that create amazing results for you with our guidance.</p>
            </div>
        );
    }
}
class Watercolours extends React.Component {
    render() {
        return (
            <div>
                <p>A very popular medium and easy to use once you know how.</p>
                <p>By the end of this module you will have learned all about the colour wheel, mixing, brush strokes and wash techniques, and created 2 or 3 beautiful paintings to be proud of!</p>
            </div>
        );
    }
}
class Acrylics extends React.Component {
    render() {
        return (
            <div>
                <p>A versatile and enjoyable medium to paint with making it extremely popular with artists.</p>
                <p>Our gradual progressive tuition allows your skill levels to increase substantially by this stage of the course and we will comfortably complete paintings during this module.</p>
            </div>
        );
    }
}
class Mounting extends React.Component {
    render() {
        return (
            <div>
                <p>All artwork needs to be displayed properly if it’s going to look its best. In this short module we teach you how to temporarily mount your compositions from A3 down to A5 size, ready for the final exhibition.</p>
            </div>
        );
    }
}
class Exhibition extends React.Component {
    render() {
        return (
            <div>
                <p>In the final week you have the opportunity to display your finest work at a private exhibition. The choice of artwork you exhibit is yours. Free tickets are available of you to invite as many guests as you would like together with those of the other pupils on your course as well. This provides a social and rewarding conclusion to your course.</p>
            </div>
        );
    }
}

class Curriculum extends React.Component {
    render() {
        return <div className="panel">
            <MediaQuery maxWidth={600}>
                <div className="panel-header-mob">Curriculum</div>
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <div className="panel-header">Curriculum</div>
            </MediaQuery>

            <table>
                <tr>
                    <MediaQuery maxWidth={600}>
                        <td>
                            <div className={"panel-title-mob"}>Drawing (Weeks 1-3)</div>
                            <div className={"panel-body-mob"}>
                                <img src={DrawingImgMob} className="img-fullwidth" alt="Drawing" />
                                <Drawing />
                            </div>
                        </td>
                    </MediaQuery>
                    <MediaQuery minWidth={601}>
                        <td class="image"><img src={DrawingImg} alt="Drawing"/></td>
                        <td class="curriculum">
                            <div className={"panel-title"}>Drawing (Weeks 1-3)</div>
                            <div className={"panel-body-"}><Drawing /></div>
                        </td>
                    </MediaQuery>
                </tr>

                <tr>
                    <MediaQuery maxWidth={600}>
                        <td>
                            <div className={"panel-title-mob"}>Oil Pastels (Weeks 4-5)</div>
                            <div className={"panel-body-mob"}>
                                <img src={PastelImgMob} className="img-fullwidth" alt="Pastels" />
                                <Pastels />
                            </div>
                        </td>
                    </MediaQuery>
                    <MediaQuery minWidth={601}>
                        <td class="image"><img src={PastelImg} alt="Pastels" /></td>
                        <td class="curriculum">
                            <div className={"panel-title"}>Oil Pastels (Weeks 4-5)</div>
                            <div className={"panel-body-"}><Pastels /></div>
                        </td>
                    </MediaQuery>
                </tr>

                <tr>
                    <MediaQuery maxWidth={600}>
                        <td>
                            <div className={"panel-title-mob"}>Watercolours (Weeks 6-8)</div>
                            <div className={"panel-body-mob"}>
                                <img src={WatercolourImgMob} className="img-fullwidth" alt="Watercolours" />
                                <Watercolours />
                            </div>
                        </td>
                    </MediaQuery>
                    <MediaQuery minWidth={601}>
                        <td class="image"><img src={WatercolourImg} alt="Watercolours" /></td>
                        <td class="curriculum">
                            <div className={"panel-title"}>Watercolours (Weeks 6-8)</div>
                            <div className={"panel-body-"}><Watercolours /></div>
                        </td>
                    </MediaQuery>
                </tr>

                <tr>
                    <MediaQuery maxWidth={600}>
                        <td>
                            <div className={"panel-title-mob"}>Acrylics (Weeks 9-12)</div>
                            <div className={"panel-body-mob"}>
                                <img src={AcrylicImgMob} className="img-fullwidth" alt="Acrylics" />
                                <Acrylics />
                            </div>
                        </td>
                    </MediaQuery>
                    <MediaQuery minWidth={601}>
                        <td class="image"><img src={AcrylicImg} alt="Acrylics" /></td>
                        <td class="curriculum">
                            <div className={"panel-title"}>Acrylics (Weeks 9-12)</div>
                            <div className={"panel-body-"}><Acrylics /></div>
                        </td>
                    </MediaQuery>

                </tr>
                <tr>
                    <MediaQuery maxWidth={600}>
                        <td>
                            <div className={"panel-title-mob"}>Mounting (Week 13)</div>
                            <div className={"panel-body-mob"}>
                                <img src={MountingImgMob} className="img-fullwidth" alt="Mounting" />
                                <Mounting />
                            </div>
                        </td>
                    </MediaQuery>
                    <MediaQuery minWidth={601}>
                        <td class="image"><img src={MountingImg} alt="Mounting" /></td>
                        <td class="curriculum">
                            <div className={"panel-title"}>Mounting (Week 13)</div>
                            <div className={"panel-body-"}><Mounting /></div>
                        </td>
                    </MediaQuery>

                </tr>
                <tr>
                    <MediaQuery maxWidth={600}>
                        <td>
                            <div className={"panel-title-mob"}>Exhibition (Week 14)</div>
                            <div className={"panel-body-mob"}>
                                <img src={ExhibitionImgMob} className="img-fullwidth" alt="Exhibition" />
                                <Exhibition />
                            </div>
                        </td>
                    </MediaQuery>
                    <MediaQuery minWidth={601}>
                        <td class="image"><img src={ExhibitionImg} alt="Exhibition" /></td>
                        <td class="curriculum">
                            <div className={"panel-title"}>Exhibition (Week 14)</div>
                            <div className={"panel-body-"}><Exhibition /></div>
                        </td>
                    </MediaQuery>

                </tr>

            </table>
        </div >;
    }
}

export default Curriculum;
