const concat = require('concat');

const TARGET_PATH = './<target>.user.js';

concat(
    [
        './sections/header',
        './sections/appStyle',
        './sections/AppHeader',
        './build/bundle.js',
        './sections/AppFooter',
        './sections/footer',
    ],
    TARGET_PATH
);
