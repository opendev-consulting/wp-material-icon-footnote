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
			<Button icon={ MaterialIcon(icons[ni], attributes.color)}  iconSize={ 32 } onClick={(val) => setAttributes({ icon: icons[ni] })} />
		);
	}
	return buttons;
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
					 <div className="wp-material-footnote-text">
						<RichText
							className="callout-title"
							placeholder={__("Write a foot note")}
							value={attributes.note}
							onChange={(val) => setAttributes({ note: val })}
						/>
					 </div>
				 </Fragment>
			 </div>
 
		 </div>
	 );
 }
