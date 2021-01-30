import React from 'react';
import LazyLoad from 'react-lazyload';

function Image({ downloadUrl, url, index, maxElement }) {
  console.log({ index })
  const updateContainerMargin = () => {
    const upperElement = document.querySelectorAll('.image-container')[index - maxElement + 1];
    const container = document.querySelectorAll('.image-container')[index];
    
    if (upperElement) {
      const image = upperElement.querySelector('img');
      if (image.complete) {
        updateStyle()
      } else {
        image.addEventListener('load', updateStyle)
      }

      function updateStyle() {
        const difference = (image.height + getMarginTop(upperElement.style.marginTop)) - container.offsetHeight + 10;
        container.style.marginTop = `${difference}px`;
        container.style.height = container.querySelector('img').height + 'px';
      }
    }
  }

  const getMarginTop = (marginTop) => {
    if (!marginTop) return 0;
    return Number(marginTop.replace('px', ''))
  }
  return (
    <LazyLoad offset={200} placeholder={<img style={{ "width": "252px", "height": "300px" }} src="https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" alt="plcaeholder" />}>
      <img style={{ "width": "252px" }} src={downloadUrl} alt={url} onLoad={updateContainerMargin} />
    </LazyLoad>
  )
}

export default React.memo(Image);