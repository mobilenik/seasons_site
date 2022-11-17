import React from 'react';
import MediaQuery from 'react-responsive'
import Lightbox from './Lightbox';
import Pic1 from '../img/exsum22/ExSum22 - 1.jpeg'
import Pic2 from '../img/exsum22/ExSum22 - 2.jpeg'
import Pic3 from '../img/exsum22/ExSum22 - 3.jpeg'

var listOfImages = [];
var hallPicsBig = [{ src: Pic1, height: 3, width: 4 }, { src: Pic2, height: 3, width: 4 }, { src: Pic3, height: 3, width: 4 }]
var hallPicsSmall = [{ src: Pic1, height: 3, width: 4 }, { src: Pic2, height: 3, width: 4 }, { src: Pic3, height: 3, width: 4 }]

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>The exhibition for our Summer 2022 course showed of the students successes with drawing, pastels, watercolours and acrylics.</p>
                <div className="container label align-center">You can click on the pictures to see them better</div>

            </div>
        );
    }
}

class ExSum22 extends React.Component {


    importAll(r) {
        return r.keys().map(r);
    }

    componentDidMount() {

        const imgMap = this.importAll(require.context("../img/exsum22", false, /\.(png|jpe?g|svg)$/));
        for (const [key, value] of imgMap.entries()) {
            if (value.includes("[")) {
                var size = value.substring(value.lastIndexOf("[") + 1, value.lastIndexOf(["]"]));
                var sizeParts = size.split("x");
                if (isNaN(sizeParts[0]) || isNaN(sizeParts[1])) {
                    console.log(key);
                    console.log(sizeParts[0] + ":" + sizeParts[1]);
                    console.log(value);
                } else {
                    listOfImages.push({ "src": value, width: sizeParts[0], height: sizeParts[1] })
                }
            }
        }
    }

    render() {
        return <div className="panel">
            <MediaQuery maxWidth={600}>
                <div className="panel-header-mob">Exhibition</div>
                <div className={"panel-body-mob"}>
                    <div className="panel-title">Summer 2022</div>
                    <Text1 />
                    <Lightbox photos={hallPicsSmall} />
                    <Lightbox photos={listOfImages} />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <div className="panel-header">Summer 2022 Exhibition</div>
                <div className="panel-body">
                    <Text1 />
                    <Lightbox photos={hallPicsBig} />
                    <Lightbox photos={listOfImages} />
                </div>
            </MediaQuery>

        </div>
    }
}

export default ExSum22;
