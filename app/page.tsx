import { redirect } from 'next/navigation';

export default function Home() {
  // Keep root showing only maintenance page during maintenance window
  redirect('/maintenance');
}
