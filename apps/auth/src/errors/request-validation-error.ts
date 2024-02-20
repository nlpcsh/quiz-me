import { CustomError } from './custom-error';
import { ValidationError } from 'express-validator';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Error on validation');
    // Only because extending built in class!
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      if (error.type === 'field') {
        return { message: error.msg, field: error.path };
      }
      return { message: error.msg };
    });
  }
}
