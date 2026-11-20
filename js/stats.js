function stats(nombres) {
  if (!nombres || nombres.length === 0) {
    return { min: null, max: null, moyenne: 0 };
  }
  let min = nombres[0];
  let max = nombres[0];
  let somme = 0;
  for (const n of nombres) {
    if (n < min) min = n;
    if (n > max) max = n;
    somme += n;
  }
  return { min, max, moyenne: somme / nombres.length };
}

module.exports = stats;

if (require.main === module) {
  console.log(stats([3, 1, 4, 1, 5, 9]));
}
