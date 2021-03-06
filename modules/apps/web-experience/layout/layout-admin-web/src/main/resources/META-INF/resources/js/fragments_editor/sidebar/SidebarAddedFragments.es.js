import Component from 'metal-component';
import {Config} from 'metal-state';
import Soy from 'metal-soy';

import templates from './SidebarAddedFragments.soy';

/**
 * SidebarAddedFragments
 */

class SidebarAddedFragments extends Component {

	/**
	 * Callback executed when the fragment remove button is clicked.
	 * It emits a 'fragmentRemoveButtonClick' event with the fragment index.
	 * @param {MouseEvent} event
	 * @private
	 */

	_handleFragmentRemoveButtonClick(event) {
		const fragmentEntryLinkId = event.delegateTarget.dataset.fragmentEntryLinkId;

		this.emit(
			'fragmentRemoveButtonClick',
			{fragmentEntryLinkId}
		);
	}
}

/**
 * State definition.
 * @review
 * @static
 * @type {!Object}
 */

SidebarAddedFragments.STATE = {

	/**
	 * List of FragmentEntryLinks
	 * @default []
	 * @instance
	 * @memberOf SidebarAddedFragments
	 * @review
	 * @type {Array<{
	 *   fragmentEntryLinkId: !string,
	 *   name: !string
	 * }>}
	 */

	fragmentEntryLinks: Config.arrayOf(
		Config.shapeOf(
			{
				fragmentEntryLinkId: Config.string().required(),
				name: Config.string().required()
			}
		)
	).value([]),

	/**
	 * Path of the available icons.
	 * @default undefined
	 * @instance
	 * @memberOf SidebarAddedFragments
	 * @type {!string}
	 */

	spritemap: Config.string().required()
};

Soy.register(SidebarAddedFragments, templates);

export {SidebarAddedFragments};
export default SidebarAddedFragments;