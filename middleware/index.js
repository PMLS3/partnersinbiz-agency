// myMiddleware.js
/** 
//  * https://glitch.com/edit/#!/nuxt-dynamic-layouts?path=middleware/mobile.js:5:1
 */
export default (context) => {
  const {
    route: { params },
  } = context
  // set the layout to the page here
  // console.log('params=', params)
  // console.log('context=', context)

  switch (params.id) {
    // case 'profile':
    case 'login':
    case 'register':
    case 'wireframes':
    case 'drawingboard':
    case 'videoCall':
    case 'whiteboard':
    case 'radio':
    case 'kanban':
    case 'resell':
    case 'aframe':
    case 'aframeWorld':
    case 'DemoAframeShowRoom':
    case 'DemoAframeApartment':
    case 'DemoAframeSmall':
    case 'DemoAframeModernApartment':
    case 'email':
    case 'DemoAR':
    case 'AppsVideoChat':
      return 'fullPage'

    default:
      return 'default'
  }
}
