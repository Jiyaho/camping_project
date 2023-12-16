import { NextRequest, NextResponse } from 'next/server';

const HOST_SERVER = 'http://localhost:3000';

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  const placeId = context.params.id;
  const res = await fetch(`${HOST_SERVER}/places/${placeId}`);
  const data = await res.json();

  return NextResponse.json(data);
}
