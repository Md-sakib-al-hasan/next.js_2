// app/page.js
import React from 'react';

export default function MyComponent({ data }) {
    if (!data) {
        throw new Error('Data is required for this component to render.');
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    );
}
