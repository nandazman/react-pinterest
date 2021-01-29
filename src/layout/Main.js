import { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
function Main() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [offsetHeight, setOffsetHeight] = useState([]);
  const [totalImage, setTotalImage] = useState(0);
  const [maxElement, setMaxElement] = useState(Math.floor(window.outerWidth / 260));

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}`);
      const data = await response.json();
      setPhotos([...photos, ...data]);
    }
    fetchImage(page);
  }, [page]);

  const calculateOffsetWidthEl = (index) => {
    return index % maxElement * 260;
  }

  const updateHeightPosition = (index) => {
    
    const newOffSetHeight = [...offsetHeight];
    const currentImage = document.querySelectorAll('.lazyload-wrapper')[index];

    newOffSetHeight[index % maxElement] = (newOffSetHeight[index % maxElement] || 0) + currentImage.offsetHeight;
    currentImage.style.transform = `${currentImage.style.transform.substr(0, currentImage.style.transform.indexOf('translateY'))} translateY(${offsetHeight[index % maxElement]}px)`;

    setOffsetHeight(newOffSetHeight);

  }

  return (
    <div className="main" style={{ "position": "relative", "maxWidth": `${maxElement * 252}px`, "margin": "auto"}}>
      {photos.map((item, index) => (
        <LazyLoad offset={500} key={index} style={{ "position": "absolute", "transform": `translateX(${calculateOffsetWidthEl(index)}px) translateY(${Math.floor(index / maxElement) * 300}px)`, "width": "252px" }} placeholder={<img style={{ "width": "300px", "height": "300px" }} key={index} src="https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" alt="plcaeholder" />}>
          <img style={{ "width": "252px" }} key={index} src={item.download_url} alt={item.url} onLoad={() => updateHeightPosition(index)} />
        </LazyLoad>
      ))}
      <button style={{ "position": "fixed", "bottom": "0"}} onClick={() => setPage(page + 1)}>Add</button>
    </div>
  )
}

export default Main;