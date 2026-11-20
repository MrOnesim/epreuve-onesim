'use client';

import { useState } from 'react';
import AddBookForm from './AddBookForm';

type Book = {
  id: number;
  titre: string;
  auteur: string;
  annee: number | null;
  created_at: string;
};

export default function BooksClient({ initialBooks }: { initialBooks: Book[] }) {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Book) => {
    setBooks((prev) => [book, ...prev]);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Livres</h1>
      <AddBookForm onAdd={addBook} />
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            {b.titre} - {b.auteur} {b.annee ? `(${b.annee})` : ''}
          </li>
        ))}
      </ul>
    </main>
  );
}
