import React from 'react';
import styles from './Faq.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.heroImg}></Hero>
    <h2 className={styles.subtitle}>{faq.subtitle}</h2>
    {faq.questions.map(question => (
      <div key={question.id} className={styles.questions}>
        <h3>{question.title}</h3>
        <p>{question.answer}</p>
      </div>
    ))}
  </Container>
);

export default Info;