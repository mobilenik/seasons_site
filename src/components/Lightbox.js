import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Modal from 'react-modal';
import MediaQuery from 'react-responsive'

function Lightbox(pics) {
  const [currentImage, setCurrentImage] = useState();
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  const customStylesBig = {
    content: {
      top: '50px',
      left: '50px',
      right: '50px',
      bottom: '50px',
      backgroundColor: 'black',
      padding: '20px'
    },
  };

  const customStylesSmall = {
    content: {
      top: '40px',
      left: '10px',
      right: '10px',
      bottom: '40px',
      backgroundColor: 'black',
      padding: '10px'
    },
  };

  const smallImgStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(photo.src);
    setIsPortrait(photo.height > photo.width ? true : false)
    //console.log(photo.height > photo.width ? true : false)
    //console.log('H:%s, W:%s', photo.height, photo.width)
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={pics.photos} onClick={openLightbox} targetRowHeight={250} />
      <MediaQuery minWidth={601} orientation='portrait'>
        <Modal isOpen={viewerIsOpen} onRequestClose={closeLightbox} style={customStylesBig} ariaHideApp={false}>
          <div style={smallImgStyle}>
            <img src={currentImage} width='100%' alt='artwork' />
          </div>
        </Modal>
      </MediaQuery>
      <MediaQuery minWidth={601} orientation='landscape'>
        <Modal isOpen={viewerIsOpen} onRequestClose={closeLightbox} style={customStylesBig} ariaHideApp={false}>
          <div style={smallImgStyle}>
            <img src={currentImage} height='100%' alt='artwork' />
          </div>
        </Modal>
      </MediaQuery>

      <MediaQuery maxWidth={600} orientation='portrait'>
        <Modal isOpen={viewerIsOpen} onRequestClose={closeLightbox} style={customStylesSmall} ariaHideApp={false}>
          <div style={smallImgStyle}>
            {isPortrait && <img src={currentImage} width='100%' alt='artwork' />}
            {isPortrait === false && <img src={currentImage} width='100%' alt='artwork' />}
          </div>
        </Modal>
      </MediaQuery>
      <MediaQuery maxWidth={600} orientation='landscape'>
        <Modal isOpen={viewerIsOpen} onRequestClose={closeLightbox} style={customStylesSmall} ariaHideApp={false}>
          <div style={smallImgStyle}>
            {isPortrait && <img src={currentImage} height='100%' alt='artwork' />}
            {isPortrait === false && <img src={currentImage} height='100%' alt='artwork' />}
          </div>
        </Modal>
      </MediaQuery>
    </div >
  )
}

export default Lightbox;