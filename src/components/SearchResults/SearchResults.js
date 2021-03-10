  
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import {Link} from 'react-router-dom';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  }

  componentDidUpdate(){
    this.changeSearch();
  }

  componentDidMount() {
    this.props.changeSearchString(this.props.match.params.cards);
  }

  changeSearch = () => {
    this.props.changeSearchString(this.props.match.params.cards);
  }
  render() {
    const { cards, columns} = this.props;
    console.log('columns ', columns);
    console.log('cards ', cards);
    return (
      <Container>
        <section className={styles.component}>
          {console.log(cards)}
          {cards.map(cardData => {
            const listId = columns.filter(column => column.id == cardData.columnId)[0].listId;            
            // eslint-disable-next-line react/jsx-key
            return (<Link className={styles.logo} to={`/list/${listId}`}> 
              <Card key={cardData.id} {...cardData} />
            </Link>);
          })} 
        </section>
      </Container>

    );
  }
}

export default SearchResults;