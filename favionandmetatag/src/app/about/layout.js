// // app/layout.js or app/page.js

// export const metadata = {
//     metadataBase: new URL('http://localhost:3000'), // Use your root domain or localhost
//     openGraph: {
//         title: 'About Us',
//         description: 'Learn more about our company.',
//         url: 'http://localhost:3000/about', // Specific URL for the /about page
//         images: [
//             {
//                 url: 'https://i.ibb.co/MPx3fbc/pexels-vince-2363808.jpg', // New image URL
//                 width: 800,
//                 height: 600,
//                 alt: 'About Us Image'
//             }
//         ]
//     },
//     twitter: {
//         card: 'summary_large_image',
//         images: 'https://i.ibb.co/MPx3fbc/pexels-vince-2363808.jpg' // New image URL
//     }
// };


// app/layout.js or app/page.js

export const metadata = {
    metadataBase: new URL('http://localhost:3000'), // Use your root domain or localhost
    openGraph: {
        title: 'About Us',
        description: 'Learn more about our company.',
        url: 'http://localhost:3000/about', // Specific URL for the /about page
        images: [
            {
                url: '/about/opengraph-image.png', // Relative path to the image
                width: 800,
                height: 600,
                alt: 'About Acme' // The alt text from opengraph-image.alt.txt
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        images: '/about/opengraph-image.png' // Relative path to the image
    }
};


export default function RootLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}
