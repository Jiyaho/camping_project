import { NextResponse } from 'next/server';

const HOST_SERVER = process.env.NEXT_PUBLIC_CLIENT_URL;

export async function GET() {
  const res = await fetch(`${HOST_SERVER}/mypage/wish/item`);
  const data = await res.json();

  return NextResponse.json(data);
}
