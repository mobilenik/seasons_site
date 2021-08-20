import React from 'react';
import Banner from '../img/banner.jpg'
import MediaQuery from 'react-responsive'
import ReactPlayer from 'react-player'
import Review from '../video/Review1.mp4'
import { Carousel } from 'react-carousel-minimal'

import Gallery1 from '../img/Gallery1.jpg'
import Gallery2 from '../img/Gallery2.jpg'
import Gallery3 from '../img/Gallery3.jpg'

class Text1 extends React.Component {
    render() {
        return (
            <div>
                <p>Whether you’re an absolute beginner who has never even picked up a pencil, paint brush or palette before, or had some experience and want to develop your knowledge, our fun tuition will bring out the very best in your artistic talent.</p>
                <p>Our courses are 14 weeks long with each session lasting about 3 hours once a week, either in the morning or afternoon.  Over each course you learn to use a variety of media and techniques.</p>
            </div>
        );
    }
}

class Text2 extends React.Component {
    render() {
        return (
            <div>
                <p>Our qualified tutors and ever-changing <u><a href="/curriculum" alt="Curriculum.">curriculum</a></u> allows you to develop at your own pace whatever your previous experience.  Time and time again our students are amazed at what they learn to do with many returning to develop their new-found skills.</p>
            </div>
        );
    }
}

const gallery = [
    {
        image:  Gallery1 ,
        caption: "Oil Pastel Pets"
    },
    {
        image:  Gallery2 ,
        caption: "Morning Class"
    },
    {
        image:  Gallery3 ,
        caption: "Watercolour Success"
    },
];



class Home extends React.Component {

    render() {

        const captionStyle = {
            fontSize: '1em',
            fontWeight: '800',
        }
        const slideNumberStyle = {
            fontSize: '1em',
            fontWeight: 'bold',
        }

        return <div>
            <img src={Banner} className="banner" alt=""></img>
            <div className="panel">
                <MediaQuery maxWidth={600}>
                    <div className={"panel-body-mob"}>
                        <Text1 />
                        <table className="video-box align-center">
                            <tr>
                                <td className="video-caption">
                                    Don't take our word for it - listen to what our students think...
                                </td>
                            </tr>
                            <tr>
                                <td className="video-player-mob">
                                    <ReactPlayer className='react-player-mob align-center' url={Review} height='200px' width='100%' controls={true} />
                                    <br/>
                                    You can skip to 2 minutes and 50 seconds for the 'serious' review!
                                </td>
                            </tr>
                        </table>

                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <div className={"panel-body"}>
                        <Text1 />
                        <table className="video-box align-center">
                            <tr>
                                <td className="video-caption">
                                    <p>Don't take our word for it - listen to what our students think...</p><p>You can skip to 2 minutes and 50 seconds for the 'serious' review!</p>
                                </td>
                                <td className="video-player">
                                    <ReactPlayer className='react-player fixed-bottom align-right' url={Review} width='80%'height='80%' controls={true} />
                                </td>
                            </tr>
                        </table>

                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={600}>
                    <div className="panel-body-mob">
                        <Text2 />
                        <Carousel
                    data={gallery}
                    time={2000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="4px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={false}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="black"
                    slideImageFit="contain"
                    thumbnails={true}
                    thumbnailWidth="50px"
                    style={{
                        padding: "0px 0px 0px 0px",
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
                />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={601}>
                    <div className="panel-body">
                        <Text2 />
                        <Carousel
                    data={gallery}
                    time={2000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="4px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={false}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="black"
                    slideImageFit="contain"
                    thumbnails={true}
                    thumbnailWidth="50px"
                    style={{
                        padding: "0px 8px 0px 8px",
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
                />
                    </div>
                </MediaQuery>



            </div>
        </div>
    }
}


export default Home;
