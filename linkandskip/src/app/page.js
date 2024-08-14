// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link href="#section1" scroll={false}>
              Go to Section 1
            </Link>
          </li>
          <li>
            <Link href="#section2" scroll={false}>
              Go to Section 2
            </Link>
          </li>
          <li>
            <Link href="#section3" scroll={false}>
              Go to Section 3
            </Link>
          </li>
        </ul>
      </nav>
      <div id="section1" style={{ height: '100vh', background: 'lightcoral' }}>
        <h2>Section 1</h2>
        <p>This is the content of Section 1.</p>
      </div>
      <div id="section2" style={{ height: '100vh', background: 'lightseagreen' }}>
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
      </div>
      <div id="section3" style={{ height: '100vh', background: 'lightblue' }}>
        <h2>Section 3</h2>
        <p>This is the content of Section 3.</p>
      </div>
    </div>
  );
}
