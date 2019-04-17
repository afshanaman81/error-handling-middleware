// const successHandler = (req, res, next, data) => {
//     res.status(res.statusCode).json(data);
// };

// const errorHandler = (error, req, res, next) => {
//     next(error);
// };

// module.exports = fn => (req, res, next) => {
//     return fn(req, res, next)
//         .then(data => successHandler(req, res, next, data))
//         .catch(error => errorHandler(error, req, res, next));
// }

module.exports = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err));
  };
    