import constants from 'core/types'
import Web3      from 'web3'

function dispatchProvider(dispatch) {
  const { ethereum } = window
  const web3Provider = ethereum ? new Web3(ethereum) : false

  dispatch((() => {
    return {
      type: constants.SET_PROVIDER,
      web3Provider
    }
  })())
}

export function setProvider() {
  let c = 0
  return (dispatch) => {
    if (window.ethereum) {
      dispatchProvider(dispatch)
    } else {
      const interval = setInterval(() => {
        c += 1
        if (window.ethereum || c > 3) {
          clearInterval(interval)
          dispatchProvider(dispatch)
        }
        if (window.document.hidden) { window.location.reload() }
      }, 500)
    }
  }
}
