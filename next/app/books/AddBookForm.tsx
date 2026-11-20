'use client';

import { useState } from 'react';

export default function AddBookForm({ onAdd }: { onAdd: (book: any) => void }) {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [annee, setAnnee] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titre, auteur, annee: annee ? Number(annee) : null }),
    });
    if (res.ok) {
      const book = await res.json();
      onAdd(book);
      setTitre('');
      setAuteur('');
      setAnnee('');
    } else {
      const data = await res.json();
      alert(data.error || 'Erreur');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre" required />
      <input value={auteur} onChange={(e) => setAuteur(e.target.value)} placeholder="Auteur" required />
      <input value={annee} onChange={(e) => setAnnee(e.target.value)} placeholder="Année" type="number" />
      <button type="submit">Ajouter</button>
    </form>
  );
}
