import { Request, Response } from '@models';
import { BaseService } from './base-service';

class ShortenerService extends BaseService<Request, Request, Response> {
  constructor() {
    super('shortener');
  }
}

export const shortenerService = new ShortenerService();
