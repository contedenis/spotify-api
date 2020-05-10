export function errorHandler({ response }) {
  const message = (response.data && response.data.message)
    ? response.data.message
    : 'Something unexpected happened';

  throw new Error(message);
}
