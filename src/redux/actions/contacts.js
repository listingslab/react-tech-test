/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

export function updateNewContact ( payload ) {
	return ( dispatch ) => {
    	dispatch(_reduce.updateNewContact( payload ));
	}
}

export function setSelectedContact ( contact ) {
	return ( dispatch ) => {
    	dispatch(_reduce.setSelectedContact( contact ));
	}
}


const _reduce = {
	setSelectedContact: ( contact ) => {
		return {
			type: 'SET_SELECTED_CONTACT',
			contact
		};
	},
	updateNewContact: ( payload ) => {
		return {
			type: 'UPDATE_NEW_CONTACT',
			payload
		};
	},
}
