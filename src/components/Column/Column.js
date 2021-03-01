import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
      
    //define static property of Class, must be named propTypes
    static propTypes = {
      key: PropTypes.number.isRequired,      
      title: PropTypes.string.isRequired,
      cards: PropTypes.object.isRequired,
      icon: PropTypes.string.isRequired,        
    }
    render() {
      const {title, icon, cards} = this.props;
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
          {/*
          <div className={styles.creator}>                 
            <Creator key={this.props.key} action={title => this.addCard(title)}/>
          </div>
          */} 
        </section>
      );
    }
}

export default Column;