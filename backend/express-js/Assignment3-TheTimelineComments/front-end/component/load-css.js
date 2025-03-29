const loadCSS = (href) => {  // href: css file path
    const link = document.createElement('link');
    link.type='text/css'
    link.rel = 'stylesheet'
    link.href = href         // be careful, this url must be server base url. Like localhost:3000/[href], like:
                             // href= './component/register/register.css', 
                             // './' means base url localhost:3000, main directory for the project.
                             // this defines with 'express.static' in app.js. 
                             // it is 'front-end' directory in this project.
    document.head.appendChild(link);
}

export default loadCSS