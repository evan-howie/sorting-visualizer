export default function (a) {
  return quicksort(a, 0, a.length - 1);
}

function* quicksort(a, l, r) {
  if (l >= r) return;

  let pivot = a[r];
  let next_smallest = l - 1;

  for (let i = l; i < r; i++) {
    yield [i, next_smallest, r];
    if (a[i] < pivot) {
      next_smallest++;
      [a[i], a[next_smallest]] = [a[next_smallest], a[i]];
    }
  }
  yield [next_smallest + 1, r];
  [a[next_smallest + 1], a[r]] = [a[r], a[next_smallest + 1]];

  yield* quicksort(a, l, next_smallest);
  yield* quicksort(a, next_smallest + 2, r);
}
