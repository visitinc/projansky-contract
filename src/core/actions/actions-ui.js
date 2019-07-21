import constants from 'core/types'

export function openModal(obj) {
  return {
    type: constants.OPEN_MODAL,
    modalKey: obj.modalKey
  }
}

export function openConfirmModal(obj) {
  return {
    type: constants.OPEN_CONFIRM_MODAL,
    modalKey: obj.modalKey
  }
}

export function closeModal() {
  return {
    type: constants.CLOSE_MODAL
  }
}

export function closeConfirmModal() {
  return {
    type: constants.CLOSE_CONFIRM_MODAL
  }
}

export function openRightDrawer() {
  return {
    type: constants.OPEN_RIGHT_DRAWER
  }
}

export function closeRightDrawer() {
  return {
    type: constants.CLOSE_RIGHT_DRAWER
  }
}

export function setAddress(value) {
  return {
    type: constants.SET_ADDRESS,
    value
  }
}

export function getContract() {
  return {
    type: constants.GET_CONTRACT
  }
}

export function setContract() {
  return {
    type: constants.SET_CONTRACT
  }
}

export function setContractError() {
  return {
    type: constants.SET_CONTRACT_ERROR
  }
}
