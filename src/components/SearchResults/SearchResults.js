  
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

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
    const { cards} = this.props;
    console.log(this.props);
    return (
      <section className={styles.component}>
        {console.log(cards)}
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))} 
      </section>
    );
  }
}

export default SearchResults;