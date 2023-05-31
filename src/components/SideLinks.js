import React from 'react';

function SideLinks({ links }) {
  return (
    <nav class="side-links">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideLinks;
