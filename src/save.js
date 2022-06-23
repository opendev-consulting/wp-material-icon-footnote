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
	 return (
		 <div { ...useBlockProps.save() }>
			 <div  class="wp-material-footnote">
				 <div class="wp-material-footnote-icon" style="color:gray;">
					 <svg width="110" height="110" viewBox="0 0 24 24">
						 <path fill="#aaaaaa" d="M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z" />
					 </svg>
				 </div>
				 <div class="wp-material-footnote-text">
					 <small>{ attributes.note }</small>
				 </div>
			 </div>
		 </div>
	 );
 }
 