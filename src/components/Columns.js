import React from 'react';
import Image from '../components/Image';

function Column({maxElement, photos}) {
  if (!photos.length) return '';
  const photosPerColumn = Math.floor((photos.length) / maxElement);
  let remainingPhotos = photos.length - (photosPerColumn * maxElement);
  const getPhotos = (i) => {
    const photosEl = [];
    for(let j = (i * photosPerColumn); j < (i + 1) * photosPerColumn; j++) {
      photosEl.push(<Image key={j} url={photos[j].url} alt={photos[j].id} />)
    }
    if (remainingPhotos > 0) {
      photosEl.push(<Image key={photos[photos.length - remainingPhotos].id} url={photos[photos.length - remainingPhotos].url} alt={photos[photos.length - remainingPhotos].id} />)
      remainingPhotos--;
    }
    return photosEl;
  }
  return (Array(maxElement).fill(0).map((_, i) => <div key={i} className="column">
  {getPhotos(i)}
</div>))
}

export default React.memo(Column);