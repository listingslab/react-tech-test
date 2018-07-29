/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */
 
import uniqid from 'uniqid';

export const contacts = {
	selectedContact: false,
	updated: Date.now(),
	newContact:{
		open: false,
	},
	editContact:{
		open: false,
	},
	deleteContact:{
		open: false,
	},
	contactsList: [
		{
			id: uniqid(),
			firstName: `Chris`,
			lastName: `Dorward`,
			avatar: `/png/avatar/invader.png`,
			phone: `0434925699`,
			updated: Date.now(),
			created: Date.now(),
		},
		{
			id: uniqid(),
			firstName: `Rikki`,
			lastName: `Carmichael`,
			phone: `+61 481 163 965`,
			avatar: `/jpg/rikki.jpg`,
			updated: Date.now(),
			created: Date.now(),
		},
		{
			id: uniqid(),
			firstName: `Sir`,
			lastName: `Terry`,
			avatar: `/jpg/sirterry.jpg`,
			updated: Date.now(),
			created: Date.now(),
		},
		{
			id: uniqid(),
			firstName: `Bill`,
			lastName: `Gates`,
			phone: `(206) 709-3140`,
			avatar: `/jpg/bill.jpg`,
			updated: Date.now(),
			created: Date.now(),
		},
		{
			id: uniqid(),
			firstName: `Bill`,
			lastName: `Murray`,
			avatar: `/jpg/bm.jpg`,
			updated: Date.now(),
			created: Date.now(),
		},
		{
			id: uniqid(),
			firstName: `Ernest`,
			lastName: `Cline`,
			phone: `(719) 676-4940`,
			avatar: `/jpg/ec.jpg`,
			updated: Date.now(),
			created: Date.now(),
		}
	],
}
