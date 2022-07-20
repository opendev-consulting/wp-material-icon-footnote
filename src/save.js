/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps } from '@wordpress/block-editor';
 
 /**
  * The save function defines the way in which the different attributes should
  * be combined into the final markup, which is then serialized by the block
  * editor into `post_content`. <span class="mdi mdi-account"></span>
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
  *
  * @return {WPElement} Element to render.
  */
 export default function save({ attributes }) {
	console.log('SAVE');
	console.log(attributes);
	return (
		 <div { ...useBlockProps.save() }>
			 <div  class="wp-material-footnote">
				 <div class="wp-material-footnote-icon" style="color:gray;">
					 <svg width="110" height="110" viewBox="0 0 24 24">
						 <path fill={attributes.color} d={attributes.icon} />
					 </svg>
				 </div>
				 <div class="wp-material-footnote-text">
					 { attributes.note }
				 </div>
			 </div>
		 </div>
	 );
 }
 