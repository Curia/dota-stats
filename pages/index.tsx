import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

const Index: React.FC<AppProps> = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          <li>
            <Link href="/players/207736551">
              <a>Player</a>
            </Link>
          </li>
          <li>
            <Link href="/matches/5874521112">
              <a>Match</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Index;
