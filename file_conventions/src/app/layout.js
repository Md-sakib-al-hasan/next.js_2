// app/layout.js
import GlobalError from './global-error';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
