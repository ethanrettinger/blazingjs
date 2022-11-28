const express = require('express');
const app = express();

const PORT = 80;

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req: any, res: any) => {
    res.sendFile('index.html');
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
