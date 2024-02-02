import { NextRequest, NextResponse } from 'next/server';

const HOST_SERVER = process.env.NEXT_PUBLIC_SERVER_URL;

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  const placeId = context.params.id;
  const res = await fetch(`${HOST_SERVER}/camp/read${placeId}`);
  const json = await res.json();
  const data = await json.data;

  return NextResponse.json(data);
}
