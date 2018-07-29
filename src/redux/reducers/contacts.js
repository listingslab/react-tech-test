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

    case 'UPDATE_CONTACT': {
      // console.log ('action.contactObj.id', action.contactObj.id)
      let newList = [];
      let list = state.contacts.contactsList;
      for ( let i = 0; i < list.length; i++) {
        if ( list[i].id !== action.contactObj.id) {
          newList.push ( list[i] );
        } else {
          newList.push ( action.contactObj );
        }
      }
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          contactsList: newList
        }
      };
    }

    case 'OPEN_EDIT_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          editContact: {
            open: true,
          }
        }
      };
    }

    case 'CLOSE_EDIT_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          editContact: {
            open: false
          }
        }
      };
    }

    case 'RESET_SELECTED_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          selectedContact: false
        }
      };
    }

    case 'DELETE_CONTACT': {
      let newList = [];
      let list = state.contacts.contactsList;
      for ( let i = 0; i < list.length; i++) {
        if ( list[i].id !== action.contactId) {
          newList.push ( list[i] );
        }
      }
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          contactsList: newList
        }
      };
    }

    case 'OPEN_DELETE_CONTACT': {
      const title = `Delete ${ action.contactObj.firstName } ${ action.contactObj.lastName }?`;
      const message = `Are you sure?`;
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          deleteContact: {
            ...state.contacts.deleteContact,
            open: true,
            contactObj: action.contactObj,
            title,
            message
          }
        }
      };
    }

    case 'CLOSE_DELETE_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          deleteContact: {
            ...state.contacts.deleteContact,
            open: false,
          }
        }
      };
    }

    case 'SAVE_CONTACT': {
      let newContactsList = state.contacts.contactsList;
      newContactsList.reverse();
      newContactsList.push ({
        updated: Date.now(),
        created: Date.now(),
        id:action.contactObj.firstName,
        firstName: action.contactObj.firstName,
        lastName: action.contactObj.lastName,
        avatar: action.contactObj.avatar,
        phone: action.contactObj.phone,
      });
      newContactsList.reverse();
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          contactsList: newContactsList
        }
      };
    }

    case 'OPEN_NEW_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          newContact: {
            ...state.contacts.newContact,
            open: true
          }
        }
      };
    }

    case 'CLOSE_NEW_CONTACT': {
      return {
        ...state,
        contacts:{
          ...state.contacts,
          updated: Date.now(),
          newContact: {
            ...state.contacts.newContact,
            open: false
          }
        }
      };
    }

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

    default: {
      return state;
    }

  }
};

export default contacts;
