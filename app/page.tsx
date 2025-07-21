// app/page.tsx
import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect langsung ke /login saat membuka /
  redirect('/login')
}
