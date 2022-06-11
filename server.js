const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

// parse incoming  data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// link file resources to localhost
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.  Visit: http://localhost:3001`);
});