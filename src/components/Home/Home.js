import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
//import {DragDropContext} from 'react-beautiful-dnd'; //importuje komponent z biblioteki
import ListLink from '../ListLink/ListLink';


class Home extends React.Component {

    state = {
      cards: [],
    }

    static propTypes = {
      title: PropTypes.node,
      subtitle: PropTypes.node,
      lists: PropTypes.array,
      moveCard: PropTypes.func,
    }

    addCard(title){
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
              title: title,                
            },
          ],
        }
      ));
    }

    render() {
      const {title, subtitle, lists} = this.props;
      return (
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </main>
      );
    }
}

export default Home;