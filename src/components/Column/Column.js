import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    
    //define static property of Class, must be named propTypes
    static propTypes = {
        title: PropTypes.string.isRequired,        
      }

    static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    }

    render() {
        return ( 
            <section className = { styles.component }>
                <h3 className = { styles.title }>{this.props.title}</h3>
            </section>
        )
    }
}

export default Column;