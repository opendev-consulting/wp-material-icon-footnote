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
 

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
    'core/image',
];


const { createHigherOrderComponent } = wp.compose;


const lol2 = buildBase64MaterialIcon(mdiAlarm, '#f00', 20);
let iconColor = '#000';

const controls = [
{
	// title: '',
	icon: MaterialIcon(mdiCircle, '#d61d23'),
	value: '#d61d23',
	onClick: () => iconColor = '#d61d23',
},
{
	icon: MaterialIcon(mdiCircle, '#f7941c'),
	value: '#f7941c',
	onClick: () => iconColor = '#f7941c',
},
{
	icon: MaterialIcon(mdiCircle, '#ffcf27'),
	value: '#ffcf27',
	onClick: () => iconColor = '#ffcf27',
},
{
	icon: MaterialIcon(mdiCircle, '#74d300'),
	value: '#74d300',
	onClick: () => iconColor = '#74d300',
},
{
	icon: MaterialIcon(mdiCircle, '#007d11'),
	value: '#007d11',
	onClick: () => iconColor = '#007d11',
},
{
	icon: MaterialIcon(mdiCircle, '#038dd4'),
	value: '#038dd4',
	onClick: () => iconColor = '#038dd4',
},
{
	icon: MaterialIcon(mdiCircle, '#153062'),
	value: '#153062',
	onClick: () => iconColor = '#153062',
},
{
	icon: MaterialIcon(mdiCircle, '#662e93'),
	value: '#662e93',
	onClick: () => iconColor = '#662e93',
},
{
	icon: MaterialIcon(mdiCircle, '#ff80f3'),
	value: '#ff80f3',
	onClick: () => iconColor = '#ff80f3',
},
{
	icon: MaterialIcon(mdiCircle, '#eee'),
	value: '#eee',
	onClick: () => iconColor = '#eee',
},
{
	icon: MaterialIcon(mdiCircle, '#666'),
	value: '#666',
	onClick: () => iconColor = '#666',
},
{
	icon: MaterialIcon(mdiCircle, '#000'),
	value: '#000',
	onClick: () => iconColor = '#000',
},
];

const withMaterialIconControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
		console.log(props);
		//if ((props.name == 'core/html') || (props.name == 'core/html')) {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody>My custom controls</PanelBody>
					</InspectorControls>
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton
									icon={ edit }
									label="Edit"
									onClick={ 
										() => props.setAttributes({content: props.attributes.content + "<Image class='color-red;' src='data:image/svg+xml;base64," + buildBase64MaterialIcon(mdiAlarm, iconColor, 20) + "'></Image>"})
										//'<sup class="mdi"><SVG width=10 height=10 viewBox="0 0 24 24"><circle cx="5" cy="5" r="5" stroke="black" stroke-width="1" fill="red"></circle></SVG></sup> '})
									}
							/>
							<DropdownMenu 
								icon={ color } label='Pick icon color' controls={ controls } 
							/>;
						</ToolbarGroup>
					</BlockControls>
				</Fragment>
			);
		}
    //};
}, 'withMaterialIconControls' );
 
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
 