const defaultState = {
  selectedItems: { items: [], restaurantName: '' },
};

const cartReducer = (state = defaultState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log(payload.checkboxValue);
      console.log(state);
      if (payload.checkboxValue) {
        return {
          ...state,
          selectedItems: {
            items: [...state?.selectedItems.items, payload],
            restaurantName: payload?.restaurantName,
          },
        };
      } else {
        let newItems = state.selectedItems.items.filter(
          (item) => item.title !== payload.title
        );
        console.log(newItems);
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            items: newItems,
          },
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
