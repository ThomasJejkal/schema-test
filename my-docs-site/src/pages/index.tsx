import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import Schema from "../../../schema.json";
import JSONSchemaViewer from "@theme/JSONSchemaViewer";
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Test Schema v1.0.0
        </Heading>
        <p className="hero__subtitle">Powered by Docusaurus</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Test Schema v1.0.0'}
      description="Auto-generated schema documentation page.">
      <HomepageHeader />
      <main>
          <JSONSchemaViewer schema={ Schema } />
          <h2>Schema Source</h2>
          <CodeBlock language="json-schema">{JSON.stringify(Schema, null, 2)}</CodeBlock>
      </main>
    </Layout>
  );
}
