import pool from '@/lib/db';
import BooksClient from './BooksClient';

export default async function BooksPage() {
  const result = await pool.query('SELECT * FROM books ORDER BY created_at DESC');
  return <BooksClient initialBooks={result.rows} />;
}
