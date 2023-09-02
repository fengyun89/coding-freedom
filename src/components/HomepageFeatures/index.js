import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: '探索独立开发',
  // },
  // {
  //   title: '毫无疑问，这是一场冒险',
  // },
  // {
  //   title: '但，你是',
  // },
  // {
  //   title: '继续选择苟活到死？',
  // },
  // {
  //   title: '还是',
  // },
  {
    title: '紧紧抓住时代赋予程序员的机遇，奋力一搏？',
    Svg: require('@site/static/img/hero.jpg').default,
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.feature}>
      {/*<div className="text--center padding-horiz--md">*/}
      {/*  <h1>{title}</h1>*/}
      {/*</div>*/}
      {
        Svg ? (
          <div className={styles.homeImgWrapper}></div>
        ) : null
      }
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
