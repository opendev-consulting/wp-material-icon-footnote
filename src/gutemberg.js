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
import { mdiAbacus, mdiAlarm, mdiCircle, mdiMaterialDesign } from '@mdi/js';
import { MaterialIcon, buildBase64MaterialIcon } from './icons';


const { createHigherOrderComponent } = wp.compose;

let iconColor = '#000';
const iconColors = [
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

const createColorControls = function(props) {
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

const colorControls = createColorControls();


export const withMaterialIconControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
		console.log(props);
		if ((props.name == 'core/paragraph') || (props.name == 'core/html')) {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<BlockControls>
						<ToolbarGroup>
                            <DropdownMenu 
								icon={ color } label={__('Pick icon color')} controls={ colorControls } 
							/>;
							<ToolbarButton
									icon={ MaterialIcon(mdiMaterialDesign, iconColor) }
									label= {__("Add icon")}
									onClick={ 
										() => props.setAttributes({content: props.attributes.content + "<Image class='color-red;' src='data:image/svg+xml;base64," + buildBase64MaterialIcon(mdiAlarm, iconColor, 20) + "'></Image>"})
									}
							/>
						</ToolbarGroup>
					</BlockControls>
				</Fragment>
			);
		}
    };
}, 'withMaterialIconControls' );
 
