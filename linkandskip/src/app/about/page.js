// app/about/page.tsx
export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <div id="section1" style={{ height: '100vh', background: 'lightgrey' }}>
                <h2>Section 1</h2>
            </div>
            <div id="section2" style={{ height: '100vh', background: 'lightblue' }}>
                <h2>Section 2</h2>
            </div>
            <div id="section3" style={{ height: '100vh', background: 'lightgreen' }}>
                <h2>Section 3</h2>
            </div>
        </div>
    );
}
