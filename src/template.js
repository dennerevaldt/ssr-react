// src/template.js
export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
