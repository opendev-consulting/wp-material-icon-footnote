/** Register custom controls to add icons on paragraph and HTML Gutemberg blocks */
import { __ } from '@wordpress/i18n';
import { Fragment } from "@wordpress/element";
import {
    DropdownMenu,
    ToolbarButton,
    ToolbarGroup,
} from '@wordpress/components';
import {
    BlockControls,
} from "@wordpress/block-editor";
import { color } from '@wordpress/icons';
import { 
    mdiCircle
} from '@mdi/js'

import { MaterialIcon, buildBase64MaterialIcon, icons, logo } from './icons';


const { createHigherOrderComponent } = wp.compose;

let iconColor = '#000';

/** Available default colors */
export const iconColors = [
    '#d61d23',
    '#f7941c',
    '#ffcf27',
    '#74d300',
    '#007d11',
    '#038dd4',
    '#153062',
    '#662e93',
    '#ff80f3',
    '#eee',
    '#666', //Hell yeah!
    '#000'
];

/** 
 * Generate dropdown menu controls to enable color picking when editing 
 */
const createColorControls = function() {
    let colors = [];
    for (let c in iconColors) {
        colors.push(
            {
                icon: MaterialIcon(mdiCircle, iconColors[c]),
                value: iconColors[c],
                onClick: () =>  iconColor = iconColors[c]
            },
        );
    }
    return colors;
}

/** 
 * Generate dropdown menu controls to enable icon selction on block editor.
 */
const createIconControls = function(props) {
    let iconControls = [];
    for (let ni in icons) {
        iconControls.push(
            {
                icon: MaterialIcon(icons[ni], iconColor),
                onClick: () => props.setAttributes({content: props.attributes.content + "<Image src='data:image/svg+xml;base64," + buildBase64MaterialIcon(icons[ni], iconColor) + "'></Image>"})
            }
        )
    }
    return iconControls;
}

const colorControls = createColorControls();

/**
 * Add options color and icon selection controls to the paragraph and html BlockEditors
 *
 * @return {Fragment} Fragment with 
 */
export const withMaterialIconControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
		if ((props.name == 'core/paragraph') || (props.name == 'core/html')) {
            let iconControls = createIconControls(props);
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<BlockControls>
						<ToolbarGroup>
                            <DropdownMenu 
								icon={ color } label={__('Pick icon color')} controls={ colorControls } 
							/>;
                            <DropdownMenu
                                icon = { MaterialIcon(logo, iconColor, 24) }
                                label = {__("Add icon")}
                                controls = {iconControls}
                            />;
						</ToolbarGroup>
					</BlockControls>
				</Fragment>
			);
		} else {
            return (
                <Fragment>
					<BlockEdit { ...props } />
                </Fragment>
            );
        }
    };
}, 'withMaterialIconControls' );
 
