import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM books ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { titre, auteur, annee } = body;
    if (!titre || !auteur) {
      return NextResponse.json({ error: 'titre et auteur sont obligatoires' }, { status: 400 });
    }
    const result = await pool.query(
      'INSERT INTO books (titre, auteur, annee) VALUES ($1, $2, $3) RETURNING *',
      [titre, auteur, annee ?? null]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
