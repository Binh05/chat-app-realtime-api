export const errorHandlingMiddleware = (err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;

  const responseErrors = {
    status: err.statusCode,
    message: err.message || "INTERNAL_SERVER_ERROR",
    stack: err.stack,
  };

  res.status(responseErrors.status).json(responseErrors);
};
