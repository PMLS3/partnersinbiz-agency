/* eslint-disable no-undef */
/* eslint-disable no-console */
export default function (context) {
  // console.log('route=', context.route.name)
  if (process.client) {
    const from = context.from
    // console.log('from=', from)
  }
}
