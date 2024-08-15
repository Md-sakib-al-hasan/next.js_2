// pages/api/log-error.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // Here, you could send the error message to an external service or log it
        console.error('Error logged:', message);

        return res.status(200).json({ status: 'error logged' });
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
