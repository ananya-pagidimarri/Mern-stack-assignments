import express from 'express';
import userApp from './APIs/UserAPI.js';
import productApp from './APIs/ProductAPI.js';

const app = express();

app.use(express.json());

app.use('/users', userApp);
app.use('/products', productApp);

const PORT = 3000;

app.listen(PORT, () => console.log("Server running on port 3000..."));
 