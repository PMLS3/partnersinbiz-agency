// myMiddleware.js
/** 
//  * https://glitch.com/edit/#!/nuxt-dynamic-layouts?path=middleware/mobile.js:5:1
 */
export default context => {
  const {
    route: { params }
  } = context;
  // set the layout to the page here
  switch (params.id) {
    // case 'profile':
    case "login":
    case "register":
    case "wireframes":
    case "drawingboard":
    case "videoCall":
    case "whiteboard":
    case "radio":
    case "kanban":
    case "resell":
    case "aframe":
    case "aframeWorld":
      return "fullPage";

    default:
      return "default";
  }
};
