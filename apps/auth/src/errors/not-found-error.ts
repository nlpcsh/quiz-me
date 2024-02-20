import { CustomError } from './custom-error';

export class NotfoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Not found');
    // Only because extending built in class!
    Object.setPrototypeOf(this, NotfoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: 'Not found'
      }
    ];
  }
}
