import {connect} from 'react-redux';
import Card from './Card.js';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.ColumnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Card);