import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Modal from 'react-modal';

function Lightbox(pics) {
  const [currentImage, setCurrentImage] = useState();
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(photo.src);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={pics.photos} onClick={openLightbox} />
      <Modal isOpen={viewerIsOpen} onRequestClose={closeLightbox} style={customStyles}>
        <div valign='middle' align='center'><img src={currentImage} height='100%' /></div>
      </Modal>
    </div >
  )
}

export default Lightbox;