import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {getFilteredCards} from '../../redux/cardsRedux.js';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  cards: getFilteredCards(state),
  columns: state.columns,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);