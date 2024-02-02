import { NextRequest, NextResponse } from 'next/server';

const HOST_SERVER = process.env.NEXT_PUBLIC_SERVER_URL;

export async function GET(req: NextRequest) {
  const queryString = req.url.split('?')[1];
  const res = await fetch(`${HOST_SERVER}/camp/search?${queryString}`);
  const json = await res.json();
  const contents = await json.data.content;

  return NextResponse.json(contents);
}
