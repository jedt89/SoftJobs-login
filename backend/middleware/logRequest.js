const logRequest = (req, res, next) => {
  console.log(
    `${req.method} request to ${req.originalUrl} at ${new Date().toISOString()}`
  );
  next();
};

export default logRequest;
