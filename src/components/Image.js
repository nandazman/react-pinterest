import React from 'react';
import LazyLoad from 'react-lazyload';

function Image({ url, alt, index, maxElement }) {
  const updateContainerMargin = (index) => {
    const upperIndex = index - maxElement;
    const lowerIndex = index + maxElement;
    const upperElement = document.querySelectorAll('.image-container')[upperIndex];
    const lowerElement = document.querySelectorAll('.image-container')[lowerIndex];
    const container = document.querySelectorAll('.image-container')[index];

    if (upperElement) {
      const upperImage = upperElement.querySelector('img');
      if ((upperImage.complete && upperElement.style.marginTop) || index <= maxElement - 1) {
        updateStyle(upperImage, upperElement, container, lowerElement);
      } else {
        if (upperElement.getAttribute('loaded')) {
          upperImage.addEventListener('load', () => updateStyle(upperImage, upperElement, container, lowerElement));
        } else {
          container.addEventListener('upperLoaded', () => {
            updateStyle(upperImage, upperElement, container, lowerElement);
          });
          container.setAttribute("wait-upper", true);
        }
      }
    } else {
      container.setAttribute('loaded', true);
      const containerImage = container.querySelector('img');
      updateStyle(containerImage, container, lowerElement);
    }
  }
  const updateStyle = (upperImage, upperElement, container, lowerElement) => {
    const difference = (upperImage.height + getMarginTop(upperElement.style.marginTop)) - container.offsetHeight + 10;
    container.setAttribute('loaded', true);
    container.removeAttribute('wait-upper');
    container.style.marginTop = `${difference}px`;
    container.style.height = container.querySelector('img').height + 'px';

    if (lowerElement && lowerElement.getAttribute("wait-upper")) {
      const currentLoadedEvent = new Event('upperLoaded');
      lowerElement.dispatchEvent(currentLoadedEvent)
    }
  }

  const getMarginTop = (marginTop) => {
    if (!marginTop) return 0;
    return Number(marginTop.replace('px', ''))
  }
  return (
    <LazyLoad offset={200} placeholder={<img style={{ "width": "252px", "height": "300px" }} src="https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" alt="plcaeholder" />}>
      <img style={{ "width": "252px" }} src={url} alt={alt} onLoad={() => updateContainerMargin(index)} />
    </LazyLoad>
  )
}

export default React.memo(Image);