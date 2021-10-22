/**
 * External dependencies
 */
// import { isUndefined, pickBy, map } from 'lodash';
// import classnames from 'classnames';
// import moment from 'moment';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment, Component } from '@wordpress/element';
import {
	Placeholder,
	Spinner,
	withSpokenMessages,
} from '@wordpress/components';

interface propsTypes {
	
	attributes: {
		className: string;
		postsToShow: string;	
		
	};
	setAttributes: any;

}

/**
 * Block edit function
 */
class Edit extends Component < propsTypes > {
	constructor( props: propsTypes ) {
		super( props );
	}
	componentDidMount() {
		const { attributes, setAttributes } = this.props;

		// setAttributes( { paged: 1 } );
	}

	render() {
		const { attributes, setAttributes } = this.props;


		// Check if there are posts
		return (
			<Fragment>
				{/* { isSelected && <Inspector { ...this.props } /> } */}
				<section
					className={ attributes.className}
				>

				</section>
			</Fragment>
		);
	}
}

export default Edit