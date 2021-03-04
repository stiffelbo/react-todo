import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import settings from '../../styles/settings.scss';
import PropTypes from 'prop-types';

const List = props => (
  
  <section className = { styles.component }>
    
    <Hero titleText={props.title} image={props.image} />
      
    <div className={styles.description}>
      {ReactHtmlParser(props.description)}
    </div>
    
    
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={props.addColumn}/>
    </div>
    
    <div className = { styles.columns }>
      {props.columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}                    
    </div>                    
  </section>
);
  
List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired, 
  columns: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  addColumn: PropTypes.func,
};

export default List;