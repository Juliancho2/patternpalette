import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET (): Promise<Response> {
  try {
    const patterns = await prisma?.pattern.findMany();
    const jsonResponse = NextResponse.json(patterns || [], {
      status: 200
    });
    return Promise.resolve(jsonResponse);
  } catch (err) {
    if (err instanceof Error) {
      const errorResponse = NextResponse.json({
        message: err.message
      }, {
        status: 500
      });
      return Promise.resolve(errorResponse);
    }
    throw err;
  }
}
