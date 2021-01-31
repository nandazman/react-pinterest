import React from 'react';
import LazyLoad from 'react-lazyload';

function Image({ url, alt }) {
  return (
    <LazyLoad offset={200} placeholder={<img style={{ "width": "252px", "height": "300px" }} src="https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" alt="plcaeholder" />}>
      <img style={{ "width": "252px" }} src={url} alt={alt} />
    </LazyLoad>
  )
}

export default React.memo(Image);