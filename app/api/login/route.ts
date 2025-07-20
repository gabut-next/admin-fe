// app/api/login/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.formData()
  const username = body.get('username')
  const password = body.get('password')

  // Simulasi login berhasil
  if (username === 'admin' && password === 'testing123') {
    return NextResponse.json({
      message: 'Login success',
      data: {
        token: 'dummy-token-12345'
      }
    })
  }

  // Simulasi login gagal
  return NextResponse.json({
    message: 'These credentials do not match our records.',
    errors: {
      username: ['These credentials do not match our records.']
    }
  }, { status: 401 })
}
