//React & React Native
import React, {createContext, useReducer} from 'react';

const initialState = {
  search_request_at_from: null,
  search_request_at_to: null,
  required_people: null,
  hide_exceed_required_people: null,
  search_request_price: null,
  location: null,
  distance: null,
  is_virtual: null,
  tag: null,
};

const Context = createContext(initialState);

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATES':
      return {
        ...state,
        search_request_at_from: action.payload.search_request_at_from,
        search_request_at_to: action.payload.search_request_at_to,
      };
    case 'SET_PERSONS':
      return {
        ...state,
        required_people: action.payload.required_people,
        hide_exceed_required_people: action.payload.hide_exceed_required_people,
      };
    case 'SET_PRICING':
      return {
        ...state,
        search_request_price:
          action.payload.search_request_price == true ? 0 : 100,
      };
    case 'SET_AREA':
      return {
        ...state,
        location: {lng: 40, lat: 30},
        distance: action.payload.distance,
        is_virtual: action.payload.is_virtual,
      };
    case 'SET_HASHTAGS':
      return {
        ...state,
        tag: action.payload.tag,
      };
    default:
      return {...state};
  }
};

const Provider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [isFilter, setIsFilter] = React.useState(false);

  //Functions
  const setDates = async dates => {
    setIsFilter(true);
    return dispatch({type: 'SET_DATES', ...state, payload: dates});
  };
  const setPersons = async persons => {
    setIsFilter(true);
    return  dispatch({type: 'SET_PERSONS', ...state, payload: persons});
  };
  const setPricing = async pricing => {
    setIsFilter(true);
    return dispatch({type: 'SET_PRICING', ...state, payload: pricing});
  };
  const setArea = async area => {
    setIsFilter(true);
    return dispatch({type: 'SET_AREA', ...state, payload: area});
  };
  const setHashtags = async hashtags => {
    setIsFilter(true);
    return dispatch({type: 'SET_HASHTAGS', ...state, payload: hashtags});
  };
  return (
    <Context.Provider
      value={{
        state,
        setDates,
        setPersons,
        setPricing,
        setArea,
        setHashtags,
        isFilter,
        setIsFilter,
      }}>
      {props.children}
    </Context.Provider>
  );
};
export {Context, Provider};
