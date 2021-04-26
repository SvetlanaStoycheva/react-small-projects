const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newItems = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: newItems }
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        } else if (item.id === action.payload) {
          return item === null
        }
        return item
      })
      .filter((item) => item.amount > 0)

    return { ...state, cart: tempCart }
  }
  if (action.type === 'GET_TOTAL') {
    let { total, amount } = state.cart.reduce(
      (acc, curr) => {
        const { amount, price } = curr
        let sum = amount * price
        acc.total += sum
        acc.amount += amount
        return acc
      },
      { total: 0, amount: 0 }
    )
    total = parseInt(total.toFixed(2))

    return { ...state, total: total, amount: amount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload }
  }
  return state
}

export default reducer
