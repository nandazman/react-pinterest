import { useState, useEffect, useReducer } from 'react';
import Image from '../components/Image';

const SET_PHOTOS = 'SET_PHOTOS';
const ADD_PAGE = 'ADD_PAGE';
const initState = {
  photos: [],
  page: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload]
      };
    case ADD_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    default:
      return state;
  }
};

function Main() {
  const baseHeightImage = 180;
  const [store, dispatch] = useReducer(reducer, initState);
  const [maxElement, setMaxElement] = useState(Math.floor(window.outerWidth / 260));

  useEffect(() => {
    const fetchImage = async (page) => {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page + 1}`);
      const data = await response.json();
      dispatch({
        type: SET_PHOTOS,
        payload: data,
      });
    }
    fetchImage(store.page);
  }, [store.page, maxElement]);

  return (
    <div className="main" style={{ "position": "relative", "maxWidth": `${maxElement * 260}px`, "margin": "auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, 252px)", "justifyContent": "center", "gridAutoRows": `${baseHeightImage}px`, "gridColumnGap": "15px", "gridRowGap": "10px"}}>
      {store.photos.map((_, i) => {
        return (<div className="image-container" key={i} style={{ "width": "252px", "display": "flex", "flexDirection": "column"}}>
          <Image key={i} index={i} maxElement={maxElement} downloadUrl={store.photos[i].download_url} url={store.photos[i].url} />
        </div>)
      })}
      <button style={{ "position": "fixed", "bottom": "0"}} onClick={() => dispatch({
        type: ADD_PAGE,
      })}>Add</button>
    </div>
  )
}

export default Main;