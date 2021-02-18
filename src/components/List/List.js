import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import settings from '../../styles/settings.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
    //component initial state
    state = {
        columns: this.props.columns || [],
      }
    //define static property of Class, must be named propTypes
    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      }

    static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    }

    addColumn(title){
        this.setState(state => (
          {
            columns: [
              ...state.columns,
              {
                key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
                cards: []
              }
            ]
          }
        ));
      }

    render() {
        return ( 
            <section className = { styles.component }>
                <Hero titleText={this.props.title} image={this.props.image}/>
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
                </div>
                <div className = { styles.columns }>
                    {this.state.columns.map(({key, ...colProps}) => (
                        <Column key={key} {...colProps} />
                    ))}                    
                </div>                
            </section>
        )
    }    
}

export default List;