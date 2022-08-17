import React from 'react'

import PropTypes from 'prop-types'

import GalleryCard1 from './gallery-card1'
import './hellocomp.css'

const Hellocomp = (props) => {
  return (
    <div className={`hellocomp-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="hellocomp-image"
      />
      <div className="hellocomp-gallery">
        <GalleryCard1 rootClassName="rootClassName" className=""></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName1"
          className=""
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName2"
          className=""
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName3"
          className=""
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName4"
          className=""
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName5"
          className=""
        ></GalleryCard1>
      </div>
      <h1 className="">{props.heading}</h1>
    </div>
  )
}

Hellocomp.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  heading: 'Heading',
  rootClassName: '',
}

Hellocomp.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hellocomp
