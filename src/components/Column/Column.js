import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
    //component initial state
    state = {
        cards: this.props.cards || [],
      }
    
    //define static property of Class, must be named propTypes
    static propTypes = {
        title: PropTypes.string.isRequired,        
      }

    addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title: title,                
              }
            ]
          }
        ));
    }

    //skąd on wie za ma użyć tej metody przy tworzeniu instancji?
    //metoda prób doszedlem do Creatora, wywaliłem text bo i tak używa placeholdera ze statica, nie do konca to rozumiem.
    render() {
        return ( 
            <section className = { styles.component }>
                <h3 className = { styles.title }>
                    {this.props.title}
                    <span className = { styles.icon }>
                        <Icon name={this.props.icon}/>
                    </span>
                </h3>                    
                <div>
                    {this.state.cards.map(({key, title})=>(
                        <Card title={key, title}/>
                    ))}
                </div>
                <div className={styles.creator}>                 
                    <Creator action={title => this.addCard(title)}/>
                </div>
            </section>
        )
    }
}

export default Column;