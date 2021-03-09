  
import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';
import Search from '../Search/Search.js';
import {header} from '../../data/dataStore';

class Header extends React.Component {

  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={header.logo} />
            </Link>
            <Search />
            <nav>
              {header.nav.map(link => (
                <NavLink key='' exact to={link.path}>{link.name}</NavLink>
              ))}             
            </nav>            
            
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;