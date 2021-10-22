/**
 * External dependencies
 */

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
// import { gql, useQuery } from '@apollo/client';
// import INITIAL_QUERY from '../../apollo/queries/initialStateQuery';

/**
 * Block edit function
 */
const Edit = () => {
	// const { loading, error, data } = useQuery( INITIAL_QUERY );
	// if (loading) return 'Loading...';
	// if (error) return `Error! ${error.message}`;
	// console.log(loading, error, data)
	return (
		<div className="gp-main-content" >
			{/* {data.map} */}
		</div>
	)
}

export default Edit