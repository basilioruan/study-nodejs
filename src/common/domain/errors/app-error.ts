export class AppError extends Error {
  private readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);

    this.statusCode = statusCode;
  }

  public getStatusCode(): number {
    return this.statusCode;
  }
}
