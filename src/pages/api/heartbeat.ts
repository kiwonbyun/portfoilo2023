export default function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8');

  res.send('OK');
}
