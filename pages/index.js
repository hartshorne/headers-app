import styles from '../styles.module.css';
import Link from 'next/link';

const Code = (p) => <code className={styles.inlineCode} {...p} />;

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Broken Cache-Control Headers with Next.js</h1>
      <hr className={styles.hr} />
      <p>
        These pages have a <Code>Cache-Control: public, max-age=3600, s-maxage=60, stale-while-revalidate=86400</Code>{' '}
        header configured in <Code>next.config.js</Code>. You need to run <Code>next build && next start</Code> to see
        the Cache-Control headers that are set in production.
      </p>
      <p>
        When static props are exported, the custom <Code>Cache-Control</Code> header is not respected and is overwritten
        with <Code>Cache-Control: s-maxage=31536000, stale-while-revalidate</Code>. That header seems to be set at:{' '}
        <a href="https://github.com/vercel/next.js/blob/80c9522750a269a78c5636ace777a734b9dcd767/packages/next/next-server/server/send-payload.ts#L34">
          next/next-server/server/send-payload.ts#L34
        </a>
        .
      </p>
      <p>
        Additionally when static props are exported and data from <Code>/_next/data/...</Code> is prefetched via{' '}
        <Code>next/link</Code>, those <Code>Cache-Control</Code> headers are also overwritten with{' '}
        <Code>Cache-Control: s-maxage=31536000, stale-while-revalidate</Code>.
      </p>
      <nav>
        <ul className={styles.list}>
          <li>
            <a href="/static">No props, no next/link.</a>
          </li>
          <li>
            <Link href="/static-link">
              <a>No props, using next/link.</a>
            </Link>
          </li>
          <li>
            <a href="/props">With props, no next/link.</a>
          </li>
          <li>
            <Link href="/props-link">
              <a>With props, using next/link.</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        Open <Code>next.config.js</Code> to learn more about the headers that match the links above.
      </p>
      <hr className={styles.hr} />
    </div>
  </div>
);

export default Index;
