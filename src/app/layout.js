import React from 'react';
import './globals.css';  // Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
// In _app.js or a shared layout
import '../app/shared/styles.css';


export const metadata = {
  title: "College Management System",
  description: "A simple management application for college.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

