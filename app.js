const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];

const productObj = products.reduce((acc, product) => {
  acc[product.id] = { name: product.name }
  return acc
}, {})

console.log(productObj)
// Output: { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } }
