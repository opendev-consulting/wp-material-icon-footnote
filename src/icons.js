import { SVG, Path } from '@wordpress/primitives';
import { 
    mdiAlert, 
    mdiAlertOctagram,
    mdiAlien, 
    mdiAsterisk, 
    mdiAsteriskCircleOutline, 
    mdiBalloon,
    mdiBell, 
    mdiBicycle,
    mdiBomb, 
    mdiBullhorn,
    mdiCakeVariant,
    mdiCampfire,
    mdiCardsHeart,
    mdiCog,
    mdiFlower,
    mdiGhost,
    mdiKey,
    mdiLightbulb,
    mdiRocketLaunch,
    mdiRodent,
    mdiSkull,
    mdiSpaceInvaders,
} from '@mdi/js'

export const icons = {
    mdiAlert,
    mdiAlertOctagram,
    mdiAlien,
    mdiAsterisk,
    mdiAsteriskCircleOutline,
    mdiBalloon,
    mdiBell,
    mdiBicycle,
    mdiBomb,
    mdiBullhorn,
    mdiCakeVariant,
    mdiCampfire,
    mdiCardsHeart,
    mdiCog,
    mdiFlower,
    mdiGhost,
    mdiKey,
    mdiLightbulb,
    mdiRocketLaunch,
    mdiRodent,
    mdiSkull,
    mdiSpaceInvaders,
}

export const MaterialIcon = function(icon, color, size) {
    return (
        <SVG width={size} height={size} viewBox="0 0 24 24">
            <Path fill={color} d={icon}/>
        </SVG>
    )
}

export const buildBase64MaterialIcon = function(iconPath, color, size) {
    //width="' + size + '" height="' + size + '"
    const icon = '' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24">' +
            '<path fill="' + color + '" d="' + iconPath + '" />' +
        '</svg>';  
    return  btoa(icon);
}