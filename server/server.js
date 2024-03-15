const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = 3001;

app.get('/api/meteors-html', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../projects/Meteors.html')
    const htmlContent = await fs.readFile(filePath, 'utf-8');
    res.send(htmlContent);
  } catch (error) {
    console.error('Error reading HTML file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
