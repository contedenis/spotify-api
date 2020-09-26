export function errorHandler(error) {
  const tokenError = ['Invalid access token', 'The access token expired'];
  const response = error.response || error;
  const status = response?.data?.status || response?.status;
  const errorMessage = response?.data?.error?.message || 'Something unexpected happened';
  const serverError = tokenError.includes(response?.data?.error?.message)
    || (status >= 500 && status <= 599);
  const message = serverError
    ? null
    : errorMessage;

  // eslint-disable-next-line no-throw-literal
  throw ({
    message,
    serverError,
    status,
  });
}
