'use strict'

async function clientProfile(client) {
  console.log('HERE')
  const profile = await client
    .getProfile()
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })

  return profile
}

module.exports = {
  clientProfile,
}
