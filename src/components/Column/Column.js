import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import settings from '../../styles/settings.scss'
import { ADD_CARD } from '../../redux/cardsRedux';

class Column extends React.Component {
      
    //define static property of Class, must be named propTypes
    static propTypes = {
      key: PropTypes.number,      
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
      icon: PropTypes.string.isRequired,
      addCard: PropTypes.func.isRequired,         
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }


    render() {
      const {title, icon, cards, addCard} = this.props;
      return ( 
        
        <section className = { styles.component }>
          <h3 className = { styles.title }>
            {title}
            <span className = { styles.icon }>
              <Icon name={icon}/>
            </span>
          </h3>
                              
          <div>
            {cards.map(cardsData => (
              <Card key={cardsData.key} {...cardsData} />
            ))}
          </div>
          
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addCard}/>
          </div>
          
        </section>
      );
    }
}

export default Column;