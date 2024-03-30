import { type Request, type Response } from 'express';

import { SwapiService } from '../services';
import { translateObject } from '../utils';

const swapiService = new SwapiService();

export async function getPeople(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const enResponse = await swapiService.getPeople();
    const esResponse = translateObject(enResponse);
    return res.json(esResponse);
  } catch (error) {
    return res.status(400).json({ message: 'Error getting people' });
  }
}

export async function getPeopleSchema(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const enResponse = await swapiService.getPeopleSchema();
    const esResponse = translateObject(enResponse);
    return res.json(esResponse);
  } catch (error) {
    return res.status(400).json({ message: 'Error getting person schema' });
  }
}

export async function getPerson(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const id = Number(req.params.personId);
    const enResponse = await swapiService.getPerson(id);
    const esResponse = translateObject(enResponse);
    return res.json(esResponse);
  } catch (error) {
    return res.status(400).json({ message: 'Error getting person' });
  }
}
