import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
 
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`. <span class="mdi mdi-account"></span>
 *
 * Show a grid with selected icon and footnote text.
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
return (
		<div { ...useBlockProps.save() }>
			<div class="wp-material-footnote">
				<div class="wp-material-footnote-icon" style="color:gray;">
					<svg width="110" height="110" viewBox="0 0 24 24">
						<path fill={attributes.color} d={attributes.icon} />
					</svg>
				</div>
				<span class={attributes.textSize}>
					<div class="wp-material-footnote-text">
						{ attributes.note }
					</div>
				</span>
			</div>
		</div>
	);
}
 