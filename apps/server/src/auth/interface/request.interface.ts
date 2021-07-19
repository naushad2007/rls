import { Request } from '@nestjs/common';
import { Response } from 'express';

export interface RequestWithResponse extends Request {
  res: Response;
}
