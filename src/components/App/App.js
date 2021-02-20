import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';

import {pageContents, listData} from '../../data/dataStore.js';

class App extends React.Component {

    state = {
        cards: [],
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

    render() {
        return ( 
        <main className = { styles.component } >
            <h1 className = { styles.title } > {pageContents.title} </h1>    
            <h2 className = { styles.subtitle } > {pageContents.subtitle} </h2>
            <div className = { styles.list }>
                <Creator text="add new item" action={title => this.addCard(title)}/>
            </div>
           
            <div className = {styles.list}>
                {this.state.cards.map(({key, title})=>(
                        <Card title={key, title}/>
                ))}
            </div>   
            <List {...listData} />
               
        </main>
        )
    }
}

export default App;