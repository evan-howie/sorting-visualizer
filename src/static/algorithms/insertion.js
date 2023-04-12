export default function* (a) {
  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;

    while (j >= 0 && a[j] > key) {
      yield [i, j];
      a[j + 1] = a[j--];
    }
    a[j + 1] = key;
  }
}
