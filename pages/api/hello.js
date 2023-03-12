// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'datas');
  const fileContents = await fs.readFile(jsonDirectory + '/dataoeuvres.json', 'utf8');
  const object = JSON.parse(fileContents)
  res.status(200).json(object)
}
