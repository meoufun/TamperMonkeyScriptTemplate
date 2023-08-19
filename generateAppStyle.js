const fs = require('fs');

fs.readFile('./build/bundle.css', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    }

    fs.writeFile(
        './sections/appStyle',
        `    GM_addStyle(\`${data}\`);`,
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    );
});
