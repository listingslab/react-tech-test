/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */


export function openEditContact ( contactObj ) {
	return ( dispatch ) => {
    	dispatch( _reduce.openEditContact( contactObj ));
	}
}

export function closeEditContact () {
	return ( dispatch ) => {
    	dispatch( _reduce.closeEditContact());
	}
}

export function deleteContact ( contactId ) {
	return ( dispatch ) => {
    	dispatch( _reduce.deleteContact( contactId ));
    	dispatch( _reduce.closeDeleteContact());
    	dispatch( _reduce.resetSelectedContact());
	}
}

export function openDeleteContact ( contactObj ) {
	return ( dispatch ) => {
    	dispatch( _reduce.openDeleteContact( contactObj ));
	}
}

export function closeDeleteContact () {
	return ( dispatch ) => {
    	dispatch( _reduce.closeDeleteContact());
	}
}

export function openNewContact () {
	return ( dispatch ) => {
    	dispatch( _reduce.openNewContact());
	}
}

export function closeNewContact () {
	return ( dispatch ) => {
    	dispatch( _reduce.closeNewContact());
	}
}

export function saveContact ( contactObj ) {
	return ( dispatch ) => {
    	dispatch( _reduce.saveContact( contactObj ));
    	dispatch( _reduce.setSelectedContact( contactObj ));
	}
}

export function updateContact ( contactObj ) {
	return ( dispatch ) => {
		dispatch( _reduce.updateContact( contactObj ));
		dispatch( _reduce.setSelectedContact( contactObj ));
    	dispatch( _reduce.closeEditContact());
	}
}

export function setSelectedContact ( contact ) {
	return ( dispatch ) => {
    	dispatch( _reduce.setSelectedContact( contact ));
	}
}

export function resetSelectedContact () {
	return ( dispatch ) => {
    	dispatch( _reduce.resetSelectedContact());
	}
}

const _reduce = {
	saveContact: ( contactObj ) => {
		return {
			type: 'SAVE_CONTACT',
			contactObj
		};
	},
	updateContact: ( contactObj ) => {
		return {
			type: 'UPDATE_CONTACT',
			contactObj
		};
	},
	resetSelectedContact: () => {
		return {
			type: 'RESET_SELECTED_CONTACT'
		};
	},
	setSelectedContact: ( contact ) => {
		return {
			type: 'SET_SELECTED_CONTACT',
			contact
		};
	},
	closeNewContact: () => {
		return {
			type: 'CLOSE_NEW_CONTACT'
		};
	},
	openNewContact: () => {
		return {
			type: 'OPEN_NEW_CONTACT'
		};
	},
	closeDeleteContact: () => {
		return {
			type: 'CLOSE_DELETE_CONTACT'
		};
	},
	openDeleteContact: ( contactObj ) => {
		return {
			type: 'OPEN_DELETE_CONTACT',
			contactObj
		};
	},
	deleteContact: ( contactId ) => {
		return {
			type: 'DELETE_CONTACT',
			contactId
		};
	},
	openEditContact: ( contactObj ) => {
		return {
			type: 'OPEN_EDIT_CONTACT',
			contactObj
		};
	},
	closeEditContact: () => {
		return {
			type: 'CLOSE_EDIT_CONTACT'
		};
	},
}
