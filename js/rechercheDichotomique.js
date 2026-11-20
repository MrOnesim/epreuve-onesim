function rechercheDichotomique(tableau, valeur) {
  let gauche = 0;
  let droite = tableau.length - 1;
  while (gauche <= droite) {
    const milieu = Math.floor((gauche + droite) / 2);
    if (tableau[milieu] === valeur) return milieu;
    if (tableau[milieu] < valeur) gauche = milieu + 1;
    else droite = milieu - 1;
  }
  return -1;
}

module.exports = rechercheDichotomique;

if (require.main === module) {
  const t = [1, 3, 5, 7, 9, 11];
  console.log(rechercheDichotomique(t, 5));   // 2
  console.log(rechercheDichotomique(t, 1));   // 0
  console.log(rechercheDichotomique(t, 4));   // -1
}
