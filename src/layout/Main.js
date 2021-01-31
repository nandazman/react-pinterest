import { useState, useEffect, useReducer } from 'react';
import Columns from '../components/Columns';

const SET_PHOTOS = 'SET_PHOTOS';
const ADD_PHOTOS = 'ADD_PHOTOS';
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
        photos: action.payload
      };
    case ADD_PHOTOS:
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

  const fetchImage = async (type) => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=30');
    const data = await response.json();
    dispatch({
      type,
      payload: data,
    });
  }

  useEffect(() => {
    fetchImage(ADD_PHOTOS);
  }, []);

  window.onresize = () => {
    const newMaxElement = Math.floor(window.outerWidth / 260);
    if (maxElement !== newMaxElement) {
      setMaxElement(Math.floor(window.outerWidth / 260));
      // fetchImage(SET_PHOTOS);
    }
}

  return (
    <div className="main" style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, 252px)", "justifyContent": "center", "gridAutoRows": `${baseHeightImage}px`, "gridColumnGap": "15px", "gridRowGap": "10px"}}>
      <Columns maxElement={maxElement} photos={store.photos} />
      <button style={{ "position": "fixed", "bottom": "0"}} onClick={() => fetchImage(ADD_PHOTOS)}>Add</button>
    </div>
  )
}

export default Main;