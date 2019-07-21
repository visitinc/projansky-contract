import constants from 'core/types'

const mockTokens = [
    { id: 1, price: 2, initialPrice: 1, creator: '0xBE56F92aC63B2AB00693f7838f7247383c18d0b5' },
    { id: 2, price: 3, initialPrice: 1, creator: '0xBE56F92aC63B2AB00693f7838f7247383c18d0b5' },
    { id: 3, price: 1, initialPrice: 1, creator: '0xBE56F92aC63B2AB00693f7838f7247383c18d0b5' },
]

const initialState = {
  modalState: {
    openModal: false,
    modalKey: ''
  },
  confirmModalState: {
    openModal: false,
    modalKey: ''
  },
  rightDrawerIsOpen: false,
  address: '0xBE56F92aC63B2AB00693f7838f7247383c18d0b5',
  contractLoading: false,
  tokens: [
  ]

}

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return Object.assign({}, state, {
        modalState: {
          openModal: true,
          modalKey: action.modalKey
        }
      })

    case constants.OPEN_CONFIRM_MODAL:
      return Object.assign({}, state, {
        confirmModalState: {
          openModal: true,
          modalKey: action.modalKey
        }
      })

    case constants.CLOSE_MODAL:
      return Object.assign({}, state, {
        modalState: {
          openModal: false
        }
      })

    case constants.CLOSE_CONFIRM_MODAL:
      return Object.assign({}, state, {
        confirmModalState: {
          openModal: false
        }
      })

    case constants.OPEN_RIGHT_DRAWER:
      return Object.assign({}, state, {
        rightDrawerIsOpen: true
      })

    case constants.CLOSE_RIGHT_DRAWER:
      return Object.assign({}, state, {
        rightDrawerIsOpen: false
      })

    case constants.SET_ADDRESS:
      return Object.assign({}, state, {
        address: action.value
      })

    case constants.SET_CONTRACT:
      return Object.assign({}, state, {
        tokens: mockTokens
      })

    case constants.GET_CONTRACT:
      return Object.assign({}, state, {
        contractLoading: true
      })

    default:
      return state
  }
}

export default uiReducer
