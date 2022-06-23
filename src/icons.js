import { mdiAbacus } from "@mdi/js"
import { SVG, Path } from '@wordpress/primitives';


export const MaterialIcon = function(icon, color, size) {
    return (
        <SVG width={size} height={size} viewBox="0 0 24 24">
            <Path fill={color} d={icon}/>
        </SVG>
    )
}