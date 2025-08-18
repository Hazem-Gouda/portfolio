import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      <div className="max-w-4xl mx-auto px-6">Designed & built by Hazem Gouda — {new Date().getFullYear()}</div>
    </footer>
  );
}
