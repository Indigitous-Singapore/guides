import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Who Are We',
    imageUrl: 'img/grape/person-drawing.png',
    description: (
      <>
        Indigitous is about using our talents for God in the digital space. We are  a global community engaging with ideas and each other to advance God’s Kingdom through innovation.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/grape/people-chatting.png',
    description: (
      <>
        We are passionate about helping fulfill the Great Commission by engaging & unleashing Believers into Digital Missions through global events, digital-resourcing and community building.
      </>
    ),
  },
  {
    title: 'Into the Digital',
    imageUrl: 'img/grape/person-ideating.png',
    description: (
      <>
      We believe missional work can go beyond the traditional; that some efforts are ground-up from the everyday Christian, and they can be in the digital realm where millions of souls now spend a huge chunk of their time.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('guides/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
