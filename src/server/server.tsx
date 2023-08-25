const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Статические файлы (ваш бандл и ресурсы)
app.use(express.static(path.join(__dirname, 'build')));

// Все запросы, кроме API-запросов, перенаправляются к вашей корневой странице
app.get('/*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
