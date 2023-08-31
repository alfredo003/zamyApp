require('dotenv').config();
const express = require('express');
const cors =require('cors');
const app = express();
const {notFound,errorHandler} = require('./middleware/errorMiddleware');
const cookieParser = require('cookie-parser');
const protect =require('./middleware/authMiddleware')
const authController = require('./controllers/auth.controller')

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
 
const PORT = process.env.PORT || 2000;

app.post('/users/auth',authController.authUser);

app.use('/users',protect,require('./routes/user.Routes'));
app.use('/products',protect,require('./routes/product.Routes'));
app.use('/solicitations',protect,require('./routes/solicitation.Routes'));
app.use('/categories',protect,require('./routes/category.Routes'));
app.use('/notifications',protect,require('./routes/notification.Routes'));

app.use(notFound);
app.use(errorHandler);
app.listen(PORT,()=>console.log(`Server running on PORT:${PORT}`));