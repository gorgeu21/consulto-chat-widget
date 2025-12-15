import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const widgetPath = path.join(process.cwd(), 'public', 'widget.js');
  const widgetContent = fs.readFileSync(widgetPath, 'utf-8');

  return new NextResponse(widgetContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
