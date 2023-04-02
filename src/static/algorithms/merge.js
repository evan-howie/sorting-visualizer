function* merge(a) {
  const tree = [];
  const recur = function (left, right) {
    tree.push([left, right]);
    const midpoint = Math.ceil((left + right) / 2);
    if (right - midpoint > 1) recur(midpoint, right);
    if (midpoint - left > 1) recur(left, midpoint);
  };
  if (a.length > 1) recur(0, a.length);

  const b = new Array(a.length);

  while (tree.length) {
    const [left, right] = tree.pop();
    const midpoint = Math.ceil((left + right) / 2);

    for (let i = left, j = midpoint, k = left; k < right; k++)
      if (i < midpoint) {
        if (j < right) {
          yield { sound: a[i], compare: [i, j] };
          if (a[i] <= a[j])
            // stable
            b[k] = a[i++];
          else b[k] = a[j++];
        } else {
          b[k] = a[i++];
        }
      } else if (j < right) {
        b[k] = a[j++];
      }

    for (let k = left; k < right; k++) {
      yield { sound: a[k], compare: [k] };
      a[k] = b[k];
    }
  }
}

export default merge;
