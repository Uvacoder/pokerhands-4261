function productRange (a, b) {
  var prd = a, i = a;

  while (i++ < b) {
    prd *= i;
  }
  return prd;
}

export function C (n, r) {
  if (n === r) {
    return 1;
  }
  else {
    r = (r < n - r) ? n - r : r;
    return productRange(r + 1, n) / productRange(1, n - r);
  }
}
