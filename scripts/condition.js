const hoge = () => {
  console.log('hoge')
  return undefined
}

const fuga = () => {
  console.log('fuga')
  return { w: '122' }
}

if (hoge() && fuga()) {
  console.log('ok')
}

console.log('end')
