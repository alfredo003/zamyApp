const notFound = (req,res,next) =>{
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

const errorHandler = (err,req,res,next)=>{
  let statusCode = req.statusCode === 200 ? 500 : res.statusCode;
  let message =err.message;

  res.status(statusCode).json({
    message,
    stack:process.env.NODE_ENV ==='production'?null : err.stack
  })
}

module.exports = {notFound,errorHandler}