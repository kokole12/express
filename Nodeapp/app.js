
import express from 'express';
import { Products } from './data.js';
import { logger } from './logger.js';
import { auth } from './authorize.js';


const port = 3000;
const app = express();


app.use('/api', [logger, auth])


app.get('/', (req, res) => {
  res.send('<h1>Home page</h1> <p><a href="http://localhost:3000/api/products/">Products</a></p>');
});

app.get('/api/products', (req, res) => {
  res.json(Products);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const product = Products.find((product) => product.id === Number(productID));

  if (!product) {
    return res.status(404).send('Not found');
  }
  res.json(product);
});


app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const {search, limit} = req.query
  let sortedProducts = Products.sort()

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1){
    return res.status(200).send('no product matches found');
  }
  res.status(200).json(sortedProducts)
})
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});
