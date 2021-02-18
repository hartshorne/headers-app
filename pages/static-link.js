import Link from 'next/link';
import styles from '../styles.module.css';

const Code = (p) => <code className={styles.inlineCode} {...p} />;

export default function About(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Path: /static-link</h1>
        <hr className={styles.hr} />
        <p>
          We expect the cache headers to look like:{' '}
          <Code>public, max-age=3600, s-maxage=60, stale-while-revalidate=86400</Code>
        </p>
        <p>To check the response headers of this page, open the Network tab inside your browser inspector.</p>

        <Link href="/">
          <a> &larr; Back home</a>
        </Link>
      </div>
    </div>
  );
}
