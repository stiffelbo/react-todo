import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js';


class Card extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,        
    id: PropTypes.string.isRequired,       
    index: PropTypes.number.isRequired,
    remCard : PropTypes.func,      
  }   
  
  render() {
    const {title, id, remCard} = this.props;
    return ( 
      
      <article className={styles.component} id={id}>
        {title}
        <Button variant={'danger'} onClick={()=> remCard(id)}>x</Button>
      </article>
      
    );
  }
}

export default Card;