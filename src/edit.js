/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 import { InspectorControls } from "@wordpress/block-editor";
 import { Fragment } from "@wordpress/element";
 import { addFilter } from "@wordpress/hooks";
 import { SVG, Path } from '@wordpress/primitives';
 import {
	 TextControl,
	 PanelBody,
	 Icon,
	 ColorPicker,
	 DropdownMenu,
	 ToolbarButton,
	 ToolbarGroup
 } from '@wordpress/components';
 
 import {
	 RichText,
	 BlockControls,
	 AlignmentControl
 } from "@wordpress/block-editor";

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { mdiAbacus, mdiAlarm, mdiCircle } from '@mdi/js';
 import { useBlockProps } from '@wordpress/block-editor';
 import { edit, color, arrowUp, arrowDown } from '@wordpress/icons';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
import './editor.scss';

import { MaterialIcon, buildBase64MaterialIcon } from './icons';
import { withMaterialIconControls } from './gutemberg';
 

wp.hooks.addFilter(
    'editor.BlockEdit',
    'my-plugin/with-inspector-controls',
    withMaterialIconControls
);


 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
 export default function Edit({ attributes, setAttributes }) {
 
	 const onChangeAlign = (newAlign) => {
		 setAttributes({
			 align: newAlign === undefined ? 'none' : newAlign,
		 })
	 }
	 
	  /*
	 const menu_icon_controls =
		 [
			{
				 title: iconAbacus.name,
				 icon: MaterialIcon(iconAbacus),
				 onClick: () => setAttributes({path: iconAbacus.path}),
			 },
			 {
				 title: 'Right',
				 icon: arrowRight,
				 onClick: () => console.log('right'),
			 },
			 {
				 title: 'Down',
				 icon: arrowDown,
				 onClick: () => console.log('down'),
			 },
			 {
				 title: 'Left',
				 icon: arrowLeft,
				 onClick: () => console.log('left'),
			 },
		 ]*/
 
	 return (
		 <div {...useBlockProps()}>
			 <div class="wp-material-footnote">
				 <Fragment>
					 <InspectorControls>
						 <PanelBody title="Icon color" initialOpen={true}>
							 <ColorPicker
								 color={attributes.color}
								 onChange={(val) => setAttributes({ color: val })}
								 enableAlpha
								 defaultValue="#000"
							 />
						 </PanelBody>
					 </InspectorControls>
					 
					 <div class="wp-material-footnote-icon">
						 {MaterialIcon(mdiAbacus, 110, attributes.color)}
					 </div>
					 <div class="wp-material-footnote-text">
						 <>
							 <BlockControls>
								 <AlignmentControl
									 value={attributes.align}
									 onChange={onChangeAlign}
								 />
							 </BlockControls>
							 <RichText
								 tagName="small"
								 className="callout-title"
								 placeholder={__("Write a foot note")}
								 value={attributes.note}
								 onChange={(val) => setAttributes({ note: val })}
								 style={{ textAlign: attributes.align }}
							 />
						 </>
					 </div>
				 </Fragment>
			 </div>
 
		 </div>
	 );
 }
 