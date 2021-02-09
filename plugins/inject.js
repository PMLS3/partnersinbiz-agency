import axios from 'axios'

export default (context, inject) => {
  const hello = (msg) => console.log(`Hello ${msg}!`)

  const comp_create = (element, list) => {
    let payload = {}
    if (element) {
      let class_name = element.className

      let child_element_count = element.childElementCount

      let children = element.children

      var child_nodes = element.childNodes

      let node_name = element.nodeName

      let attributes = element.attributes

      let innerText = element.innerText
      let item = {}

      item.title = node_name.toUpperCase()

      if (
        item.title == 'SVG' ||
        item.title == 'PATH' ||
        item.title == 'RECT' ||
        item.title == 'CIRCLE' ||
        item.title == 'LINE' ||
        item.title == 'H1' ||
        item.title == 'H2' ||
        item.title == 'H3' ||
        item.title == 'H4' ||
        item.title == 'H5' ||
        item.title == 'H6' ||
        item.title == 'FOOTER' ||
        item.title == 'P' ||
        item.title == 'CITE' ||
        item.title == 'HEADER' ||
        item.title == 'SMALL' ||
        item.title == 'SECTION' ||
        item.title == 'IMG' ||
        item.title == 'G' ||
        item.title == 'POLYGON'
      ) {
        item.title = item.title + 'S'
      }

      item.class = class_name
      if (innerText) {
        item.innerText = innerText
      }
      item.place = [...list]
      item.id = Math.random().toString(36).substr(2, 6)
      item.name = node_name + item.id
      item.dragDisabled = false
      item.addTreeNodeDisabled = false
      item.addLeafNodeDisabled = false
      item.editNodeDisabled = false
      item.delNodeDisabled = false

      var nodes = [],
        values = []
      for (
        var att, i = 0, atts = element.attributes, n = atts.length;
        i < n;
        i++
      ) {
        att = atts[i]
        nodes.push(att.nodeName)
        values.push(att.nodeValue)
        let nodeName = att.nodeName
        if (att.nodeValue) {
          if (att.nodeName.includes('-')) {
            let split = att.nodeName.split('-')
            let newName = split[0] + split[1]
            nodeName = newName
          }
        }
        item[nodeName] = att.nodeValue
      }

      item.children = []

      for (let i = 0; i < child_element_count; i++) {
        item.children.push(childElementLoop(children[i], i, item.place))
      }
      payload = item
      // payload.push(item)

      function childElementLoop(elm, i, place) {
        let class_name = elm.className

        let child_element_count = elm.childElementCount

        let children = elm.children

        var child_nodes = elm.childNodes

        let node_name = elm.nodeName

        let attributes = elm.attributes

        let innerText = elm.innerText

        let child_item = {}

        child_item.title = node_name.toUpperCase()

        if (
          child_item.title == 'SVG' ||
          child_item.title == 'PATH' ||
          child_item.title == 'RECT' ||
          child_item.title == 'CIRCLE' ||
          child_item.title == 'LINE' ||
          child_item.title == 'H1' ||
          child_item.title == 'H2' ||
          child_item.title == 'H3' ||
          child_item.title == 'H4' ||
          child_item.title == 'H5' ||
          child_item.title == 'H6' ||
          child_item.title == 'FOOTER' ||
          child_item.title == 'P' ||
          child_item.title == 'CITE' ||
          child_item.title == 'HEADER' ||
          child_item.title == 'SMALL' ||
          child_item.title == 'SECTION' ||
          child_item.title == 'IMG' ||
          child_item.title == 'G' ||
          child_item.title == 'POLYGON'
        ) {
          child_item.title = child_item.title + 'S'
        }

        child_item.class = class_name
        child_item.place = [...place, i]
        child_item.id = Math.random().toString(36).substr(2, 6)
        child_item.name = node_name + child_item.id
        child_item.dragDisabled = false
        child_item.addTreeNodeDisabled = false
        child_item.addLeafNodeDisabled = false
        child_item.editNodeDisabled = false
        child_item.delNodeDisabled = false

        var nodes = [],
          values = []
        for (
          var att, i = 0, atts = elm.attributes, n = atts.length;
          i < n;
          i++
        ) {
          att = atts[i]
          nodes.push(att.nodeName)
          values.push(att.nodeValue)
          let nodeName = att.nodeName

          if (att.nodeValue) {
            if (att.nodeName.includes('-')) {
              let split = att.nodeName.split('-')
              let newName = split[0] + split[1]
              nodeName = newName
            }
          }

          child_item[nodeName] = att.nodeValue
        }
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

      return payload
    }
  }
  inject('comp_create', comp_create)
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', hello)
  inject('http', axios)
  // For Nuxt <= 2.12, also add 👇
  // context.$hello = hello
}
