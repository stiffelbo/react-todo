import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd'; //importuje komponent z biblioteki

class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,        
      id: PropTypes.string.isRequired,       
      index: PropTypes.number.isRequired,      
    }
    render() {
      const {title, id, index} = this.props;
      return ( 
        <Draggable draggableId={id} index={index}>
          {(provided) => (
            <article
              className={styles.component}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {title}
            </article>
          )}
        </Draggable>
      );
    }
}

export default Card;