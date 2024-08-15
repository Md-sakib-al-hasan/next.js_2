// app/instrumentation.js

export function onRequestError(err, request, context) {
    // Log or send the error information to an external service
    fetch('https://example.com/write-log', {
        method: 'POST',
        body: JSON.stringify({
            message: err.message,  // Error message
            request: {
                url: request.url,    // URL of the request
                method: request.method, // HTTP method of the request
                headers: request.headers, // Request headers
            },
            context, // Additional context information
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
