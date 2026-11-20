async function recupererUtilisateur() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error('Erreur:', error.message);
  }
}

recupererUtilisateur();
module.exports = recupererUtilisateur;
