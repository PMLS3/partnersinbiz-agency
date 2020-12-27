import axios from 'axios'

export default (context, inject) => {
  const hello = msg => console.log(`Hello ${msg}!`)
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', hello)
  inject('http', axios)
  // For Nuxt <= 2.12, also add 👇
  // context.$hello = hello
}
