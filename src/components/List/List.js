import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    
    //define static property of Class, must be named propTypes
    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      }

    static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    }

    render() {
        return ( 
            <section className = { styles.component }>
                <Hero titleText={this.props.title} image={this.props.image}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className = { styles.columns }>
                    <Column title='Family'/>
                    <Column title='Passion'/>
                    <Column title='Work'/>
                </div>
            </section>
        )
    }
}

export default List;