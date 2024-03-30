import { type Request, type Response } from 'express';

import { IndexService } from '../services';

const indexService = new IndexService();

export async function health(req: Request, res: Response): Promise<Response> {
  const message = await indexService.health();
  return res.json(message);
}
