// D:\Github\green-energy-app\src\app\layout.js
import React from 'react';

export const metadata = {
  title: 'Green Energy App',
  description: 'Discover renewable energy solutions and make a difference.',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <h1>Green Energy App</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 Green Energy. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
