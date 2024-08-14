// app/global-error.js
'use client'; // This ensures the component runs on the client side

import React from 'react';

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <p>{error.message}</p>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
