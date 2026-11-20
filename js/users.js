const users = [
  { nom: 'Awa', age: 17, ville: 'Cotonou' },
  { nom: 'Koffi', age: 25, ville: 'Porto-Novo' },
  { nom: 'Mireille', age: 32, ville: 'Cotonou' }
];

const noms = users.map(u => u.nom);
console.log('Noms:', noms);

const majeursCotonou = users.filter(u => u.age >= 18 && u.ville === 'Cotonou');
console.log('Majeurs de Cotonou:', majeursCotonou);

const ageMoyen = users.reduce((acc, u) => acc + u.age, 0) / users.length;
console.log('Age moyen:', ageMoyen);
