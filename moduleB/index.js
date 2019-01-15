import a from 'moduleA'
export default function b() {
  console.log('call moduleA within moduleB')
  a()
  console.log('testModuleB')
}
