import shortid from 'shortid';

// selectors

// fyrażenie funkcjyne -> funkcja która działa na całym stanie

export const getCardsForColumn = ({cards}, ColumnId) => cards.filter(card => card.columnId == ColumnId);
export const getFilteredCards = ({cards, searchString}) => cards.filter(cards => new RegExp(searchString, 'i').test(cards.title));

// action name creator - taki namespace dla akcji

const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators - wyrażenia funkcyjne z argumentem payload oddające obiekt / type jest wymaganym property
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD});


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];     
    default:
      return statePart;
  }
}