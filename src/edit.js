/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 import { InspectorControls } from "@wordpress/block-editor";
 import { Fragment } from "@wordpress/element";
 import { addFilter } from "@wordpress/hooks";
 import {
	 PanelBody,
	 Button,
	 ColorPicker,
	 ColorPalette,
 } from '@wordpress/components';
 import { RichText } from "@wordpress/block-editor";

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps } from '@wordpress/block-editor';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
import './editor.scss';

import { MaterialIcon, icons } from './icons';
import { withMaterialIconControls, iconColors } from './gutemberg';

import { DropdownMenu, MenuGroup, MenuItem, FontSizePicker } from '@wordpress/components';
import { more, arrowUp, arrowDown, trash } from '@wordpress/icons';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { edit } from '@wordpress/icons';

/** Set icon and color picker options to Gutemberg Block Editor. */
addFilter(
    'editor.BlockEdit',
    'my-plugin/with-inspector-controls',
    withMaterialIconControls
);

/** 
 * Generate color options for {ColorPalette} control.
 */
const createColorPalette = function() {
    let colors = [];
    for (let c in iconColors) {
        colors.push(
            {
                color: iconColors[c],
            },
        );
    }
    return colors;
}

/** 
 * Generate {Button}s to be used in a {PanelBody} to pick an icon.
 */
const createIconButtons = function({ attributes, setAttributes }) {
	let buttons = [];
	for (let ni in icons) {
		buttons.push(
			<Button icon={ MaterialIcon(icons[ni], attributes.color, 24)}  iconSize={ 32 } onClick={(val) => setAttributes({ icon: icons[ni] })} />
		);
	}
	return buttons;
}

const MyDropdownMenu = () => (
    <DropdownMenu icon={ more } label="Style">
        { ( { onClose } ) => (
            <Fragment>
                <MenuGroup>
                    <MenuItem icon='small' onClick={ onClose }>
                        Move Up
                    </MenuItem>
                    <MenuItem icon={ arrowDown } onClick={ onClose }>
                        Move Down
                    </MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuItem icon={ trash } onClick={ onClose }>
                        Remove
                    </MenuItem>
                </MenuGroup>
            </Fragment>
        ) }
    </DropdownMenu>
);

function MyToolbar() {
    return (
        <Toolbar label="Options">
            <ToolbarButton
                label="Small"
                onClick={ () => alert( 'Small' ) }
            />
			<ToolbarButton
                icon={ edit }
                label="Normal"
                onClick={ () => alert( 'Normal' ) }
            />
        </Toolbar>
    );
}

function MyFontSize({ attributes, setAttributes }) {
	return (
		<FontSizePicker
			disableCustomFontSizes
			fontSizes={[
				{
					name: __('Insurence'),
					size: 8,
					slug: 'insurence'
				},{
					name: __('Tiny'),
					size: 10,
					slug: 'tiny'
				},{
					name: __('Small'),
					size: 12,
					slug: 'small'
				},{
					name: __('Normal'),
					size: 14,
					slug: 'normal'
				},{
					name: __('Regural'),
					size: 18,
					slug: 'regural'
				},{
					name: __('Big'),
					size: 24,
					slug: 'big'
				}
			]}
			onChange={(val) => { setAttributes({ textSize: 'font-size-' + val + 'px'})} }
			value={attributes.textSize.split('-')[2].replace('px', '')}
			/>
	)
}


 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * Generate custom block that enable to setup a footernote with its icon and text 
  * including {InspectorControls}.
  *
  * @return {WPElement} Element to render.
  */
 export default function Edit({ attributes, setAttributes }) {
	 return (
		 <div {...useBlockProps()}>
			 <div className="wp-material-footnote">
				 <Fragment>
					 <InspectorControls>
					    <PanelBody title="Style" initialOpen={true}>
							{ MyFontSize({attributes, setAttributes}) }
						</PanelBody>
					 	<PanelBody title="Color" initialOpen={true}>
							 <ColorPicker
								 color={attributes.color}
								 onChange={(val) => setAttributes({ color: val })}
								 enableAlpha
								 defaultValue="#000"
							 />
							 <ColorPalette
								colors={ createColorPalette() }
								onChange={(val) => setAttributes({ color: val })}
								value= {attributes.color}
								defaultValue="#000"
							/>
						</PanelBody>
						<PanelBody title="Icon" initialOpen={true}>
						 	{ createIconButtons({attributes, setAttributes}) }
						</PanelBody> 
					 </InspectorControls>
					 
					 <div className="wp-material-footnote-icon">
						 {MaterialIcon(attributes.icon, attributes.color)}
					 </div>
					 <span class={attributes.textSize}>
						<div className="wp-material-footnote-text">
							<RichText
								className="callout-title"
								placeholder={__("Write a foot note")}
								value={attributes.note}
								onChange={(val) => setAttributes({ note: val })}
							/>
						</div>
					 </span>
				 </Fragment>
			 </div>
 
		 </div>
	 );
 }
