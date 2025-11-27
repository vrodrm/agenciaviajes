import express from 'express';
import router from './routers/index.js'
import db from './config/db.js';

const app = express();

db.authenticate()
  .then(() => console.log("Conectado a la base de datos"))
  .catch(err => console.error(err))

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');

// Middleware global para definir el año
app.use((req, res, next) => {
  const year = new Date().getFullYear();
  res.locals.year = year;
  next();
})

app.use(express.static('public'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
