import { AppError } from '@/common/domain/errors/app-error';
import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
): Response {
  if (error instanceof AppError) {
    return response
      .status(error.getStatusCode())
      .json({ status: 'error', message: error.message });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
