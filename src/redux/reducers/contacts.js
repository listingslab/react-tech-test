/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

const contacts = (state = { }, action) => {
	
  switch(action.type) {


    case 'SET_SELECTED_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          selectedContact: action.contact
        }
      };
    }

    case 'UPDATE_NEW_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
        }
      };
    }

    default: {
      return state;
    }

  }
};

export default contacts;
