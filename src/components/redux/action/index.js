// FOR ADD ITEM TO CART

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    paylooad: product
  }
}

// FOR DELETE ITEM FROM CART
export const delCart = (product) => {
  return {
    type: "DELITEM",
    paylooad: product
  }
}

