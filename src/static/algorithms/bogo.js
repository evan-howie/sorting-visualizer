export default function* (a) {
  while (!is_sorted(a)) {
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      yield { sound: a[i], compare: [i, j] };
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
}

function is_sorted(a) {
  for (let i = 1; i < a.length; i++) {
    if (a[i] < a[i - 1]) return false;
  }
  return true;
}
