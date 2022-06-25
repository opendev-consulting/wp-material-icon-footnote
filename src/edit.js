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
 import { mdiAbacus, mdiAlarm } from '@mdi/js';
 import { useBlockProps } from '@wordpress/block-editor';
 import { edit } from '@wordpress/icons';
 import test from '@mdi/svg/svg/abacus.svg';
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
import './editor.scss';

import { MaterialIcon, buildBase64MaterialIcon } from './icons';
 //import {MaterialIcon, iconAbacus, iconMaterial } from './material-icons';
 

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
    'core/image',
];

// Available spacing control options
const spacingControlOptions = [
    {
        label: __( 'None' ),
        value: '',
    },
    {
        label: __( 'Small' ),
        value: 'small',
    },
    {
        label: __( 'Medium' ),
        value: 'medium',
    },
    {
        label: __( 'Large' ),
        value: 'large',
    },
];

/**
 * Add spacing control attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addSpacingControlAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSpacingControlOnBlocks.includes( name ) ) {
        return settings;
    }

    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = assign( settings.attributes, {
        spacing: {
            type: 'string',
            default: spacingControlOptions[ 0 ].value,
        },
    } );

    return settings;
};

//addFilter( 'blocks.registerBlockType', 'extend-block-example/attribute/spacing', addSpacingControlAttribute );


const { createHigherOrderComponent } = wp.compose;


const lol = btoa('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-weather-rainy" width="24" height="24" viewBox="0 0 24 24"><path fill="#f00" d="M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59" /></svg>') //.toString('base64');
const lol2 = buildBase64MaterialIcon(mdiAlarm, '#f00', 20);

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
		console.log(props);
		console.log(lol);
		//if (props.name == 'core/html') {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody>My custom controls</PanelBody>
					</InspectorControls>
					<BlockControls>
						<ToolbarButton
								icon={ edit }
								label="Edit"
								onClick={ 
									() => props.setAttributes({content: props.attributes.content + "<Image class='color-red;' src='data:image/svg+xml;base64," + lol2 + "'></Image>"})
									//'<sup class="mdi"><SVG width=10 height=10 viewBox="0 0 24 24"><circle cx="5" cy="5" r="5" stroke="black" stroke-width="1" fill="red"></circle></SVG></sup> '})
								}
						/>
					</BlockControls>
				</Fragment>
			);
		//}
    };
}, 'withInspectorControl' );
 
wp.hooks.addFilter(
    'editor.BlockEdit',
    'my-plugin/with-inspector-controls',
    withInspectorControls
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
 