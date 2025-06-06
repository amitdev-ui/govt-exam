const fs = require('fs');
const path = require('path');

// Directory containing HTML files
const dirPath = __dirname;

// Read all files in the directory
fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter HTML files
    const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');
    
    // Process each HTML file
    htmlFiles.forEach(file => {
        const filePath = path.join(dirPath, file);
        
        // Read file content
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }
            
            // Check if translations.js is already included
            if (content.includes('translations.js')) {
                console.log(`${file} already has translations.js reference.`);
                return;
            }
            
            // Add translations.js reference before </head>
            let updatedContent = content.replace(
                '</head>', 
                '    <script src="translations.js"></script>\n</head>'
            );
            
            // Write updated content back to file
            fs.writeFile(filePath, updatedContent, 'utf8', err => {
                if (err) {
                    console.error(`Error writing file ${file}:`, err);
                    return;
                }
                console.log(`Added translations.js reference to ${file}`);
            });
        });
    });
}); 