import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import settings from '../../styles/settings.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
    
    //define static property of Class, must be named propTypes
    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
      columns: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      addColumn: PropTypes.func,
    }

    static defaultProps = {
      children: <p>I can do all the things!!!</p>,
    }   

    render() {
      const {title, image, description, columns, addColumn} = this.props;
      return ( 
        <section className = { styles.component }>
          <Hero titleText={title} image={image} />
           {/*
           coś tu nie działa
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          
          */}
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
          
          <div className = { styles.columns }>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}                    
          </div>
                          
        </section>
      );
    }    
}

export default List;