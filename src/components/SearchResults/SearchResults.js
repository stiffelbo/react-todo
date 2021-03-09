  
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
    const { cards} = this.props;
    console.log(this.props);
    return (
      <Container>
        <section className={styles.component}>
          {console.log(cards)}
          {cards.map(cardData => (
            <Link className={styles.logo} to='/'> {/*tu by można upakować nazwe listy i wtedy kazdy wynik jest linkiem, tylko carty musiały by miec property z nazwą listy.*/}
              <Card key={cardData.id} {...cardData} />
            </Link>
          ))} 
        </section>
      </Container>

    );
  }
}

export default SearchResults;