import axios from 'axios'

export default (context, inject) => {
  const hello = (msg) => console.log(`Hello ${msg}!`)

  const comp_create = (element, list) => {
    // console.log('LIST', list)
    let payload = {}
    // let element = document.getElementById(name)
    // console.log(element)

    let class_name = element.className

    // console.log(class_name)

    let child_element_count = element.childElementCount
    // console.log(child_element_count)

    let children = element.children
    // console.log('children', children)

    var child_nodes = element.childNodes
    // console.log('children', child_nodes)

    let node_name = element.nodeName
    // console.log('node_name', node_name)

    let attributes = element.attributes
    // console.log('attributes', attributes)

    let innerText = element.innerText
    // console.log('innerText', innerText)
    let item = {}

    item.title = node_name
    item.class = class_name
    if (innerText) {
      item.innerText = innerText
    }
    item.place = [...list]
    item.children = []

    for (let i = 0; i < child_element_count; i++) {
      item.children.push(childElementLoop(children[i], i, item.place))
    }
    payload = item
    // payload.push(item)

    function childElementLoop(elm, i, place) {
      let class_name = elm.className

      // console.log(class_name)

      let child_element_count = elm.childElementCount
      // console.log(child_element_count)

      let children = elm.children
      // console.log(children)

      var child_nodes = elm.childNodes
      // console.log('children', child_nodes)

      let node_name = elm.nodeName
      // console.log('node_name', node_name)

      let attributes = elm.attributes
      // console.log('attributes', attributes)

      let innerText = element.innerText
      // console.log('innerText', innerText)

      let child_item = {}

      child_item.title = node_name
      child_item.class = class_name
      child_item.place = [...place, i]
      if (innerText) {
        child_item.innerText = innerText
      }
      child_item.children = []

      for (let i = 0; i < child_element_count; i++) {
        child_item.children.push(
          childElementLoop(children[i], i, child_item.place)
        )
      }
      return child_item
    }

    console.log('payload', payload)
    return payload
  }
  inject('comp_create', comp_create)
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', hello)
  inject('http', axios)
  // For Nuxt <= 2.12, also add 👇
  // context.$hello = hello
}
