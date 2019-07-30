export function requestAccountAccess(callback) {
  const { ethereum } = window

  if (!ethereum) return
  ethereum.enable().then((account) => {
    callback(account[0])
  })
}
