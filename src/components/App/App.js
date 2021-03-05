import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';
import {DragDropContext} from 'react-beautiful-dnd'; //importuje komponent z biblioteki
//import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';


class App extends React.Component {

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
      const {title, subtitle, lists, moveCard} = this.props;
      const moveCardHandler = result => {
        if(
          //check if dropped to defined context
          result.destination
          &&
          (
            //check if index has changed
            result.destination.index != result.source.index
            ||
            //check if container id has changed
            result.destination.droppableId != result.source.droppableId
          )
        ){
          moveCard({
            id: result.draggableId,
            dest: {
              index: result.destination.index,
              columnId: result.destination.droppableId,
            },
            src: {
              index: result.source.index,
              columnId: result.source.droppableId,
            },
          });
        }
      };

      return (
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Search />          
          <DragDropContext onDragEnd={moveCardHandler}>
            {lists.map(listData => (
              <List key={listData.id} {...listData} />
            ))}
          </DragDropContext>
        </main>
      );
    }
}

export default App;