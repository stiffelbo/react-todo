import {connect} from 'react-redux';
import Card from './Card.js';
import {createActionRemoveCard} from '../../redux/cardsRedux.js';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.ColumnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch) => ({
  remCard: (id) => dispatch(createActionRemoveCard(id
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);