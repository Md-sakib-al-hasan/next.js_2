// app/layout.js or app/page.js

export const metadata = {
    metadataBase: new URL(process.env.DOMEAN), // Use your root domain or localhost
    openGraph: {
        title: 'About Us',
        description: 'Learn more about our company.',
        url: `process.env.DOMEAN/about`, // Specific URL for the /about page
        images: [
            {
                url: 'https://i.ibb.co/MPx3fbc/pexels-vince-2363808.jpg', // New image URL
                width: 800,
                height: 600,
                alt: 'sakib'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        images: 'https://i.ibb.co/MPx3fbc/pexels-vince-2363808.jpg' // New image URL
    }
};






export default function RootLayout({ children }) {
    console.log(process.env.DOMEAN)
    return (
        <div>
            {children}
        </div>
    );
}
