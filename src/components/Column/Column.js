  
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import settings from '../../styles/settings.scss';
import {Droppable} from 'react-beautiful-dnd'; //importuje komponent z biblioteki

class Column extends React.Component {
      
    //define static property of Class, must be named propTypes
    static propTypes = {
      key: PropTypes.number,      
      id: PropTypes.string,      
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
      icon: PropTypes.string.isRequired,
      addCard: PropTypes.func.isRequired,         
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }


    render() {
      const {title, icon, cards, addCard, id} = this.props;
      return ( 
        
        <section className = { styles.component }>
          <h3 className = { styles.title }>
            {title}
            <span className = { styles.icon }>
              <Icon name={icon}/>
            </span>
          </h3>
                              
          <div>
            <Droppable droppableId={id}>
              {provided => (
                <div className={styles.cards}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addCard}/>
          </div>
          
        </section>
      );
    }
}

export default Column;