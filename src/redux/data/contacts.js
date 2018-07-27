/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

export const contacts = {
	selectedContact: false,
	updated: Date.now(),
	mode: `view`,
	newContact:{
		isValid: false,
		firstName:{
			isValid: false,
			isPristine: true,
			value: ``
		},
		lastName:{
			isValid: false,
			isPristine: true,
			value: ``
		},
		phone:{
			isValid: false,
			isPristine: true,
			value: ``
		}
	},
	contactsList: [
		{
			id: `0001`,
			firstName: `Chris`,
			lastName: `Dorward`,
			avatar: `/png/avatar/invader.png`,
			phone: `0434 925 699`,
		},
		{
			id: `0002`,
			firstName: `Rikki`,
			lastName: `Carmichael`,
			phone: `+61 481 163 965`,
			avatar: `/png/avatar/rikki.jpg`,
		}
	],
}
