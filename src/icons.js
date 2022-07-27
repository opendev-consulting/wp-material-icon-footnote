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
    mdiFootPrint,
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
    mdiFootPrint,
    mdiGhost,
    mdiKey,
    mdiLightbulb,
    mdiRocketLaunch,
    mdiRodent,
    mdiSkull,
    mdiSpaceInvaders,
}

export const logo = "m22.58 7.916c-0.1373 0.1351-0.3304 0.1784-0.5035 0.1309-0.08489-0.02303-0.1651-0.06869-0.2315-0.1359l-1.543-1.576-0.5899 2.139c-0.07629 0.2767-0.3625 0.4391-0.6252 0.3665-0.2625-0.07253-0.4532-0.3657-0.3769-0.6432l0.5899-2.139-2.147 0.5584c-0.09129 0.02303-0.1835 0.02303-0.2683-0.00139-0.1732-0.04759-0.3167-0.1839-0.3653-0.3704-0.07211-0.2779 0.09433-0.5615 0.3723-0.634l2.132-0.5623-1.543-1.576c-0.2017-0.2037-0.1991-0.5335-0.0088-0.7388 0.1676-0.1473 0.3903-0.1839 0.578-0.1067 0.06248 0.02687 0.1206 0.06524 0.1712 0.1163l1.557 1.58 0.5899-2.139c0.07629-0.2767 0.3625-0.4391 0.6389-0.3627 0.2767 0.07637 0.4391 0.3627 0.3628 0.6389l-0.5899 2.139 2.147-0.5584c0.06961-0.01919 0.1396-0.02303 0.2064-0.01151 0.1997 0.03071 0.3735 0.1747 0.4129 0.3792 0.07211 0.2779-0.09433 0.5615-0.3723 0.634l-2.132 0.5623 1.557 1.58c0.2015 0.2041 0.1983 0.5335-0.01957 0.7311zm-7.537-6.013a1.873 1.82 22.08 1 1-2.42 0.982 1.873 1.82 22.08 0 1 2.42-0.982m-4.099 0.3011a1.249 1.214 22.08 1 1-1.613 0.6547 1.249 1.214 22.08 0 1 1.613-0.6547m-3.057 0.7237a1.249 1.214 22.08 1 1-1.613 0.6547 1.249 1.214 22.08 0 1 1.613-0.6547m5.925 10.27a3.121 3.035 22.08 0 0 4.117-1.944 3.247 3.156 22.08 0 0-1.997-3.745l-2.869-1.165a7.491 7.284 22.08 0 0-8.708 2.228 2.497 2.428 22.08 0 0-0.512 1.627 8.493 8.255 22.08 0 1-0.5649 3.648 8.604 8.363 22.08 0 1-2.072 2.813 2.397 2.331 22.08 0 0-0.7111 2.017 4.521 4.395 22.08 0 0 3.771 3.627 4.371 4.248 22.08 0 0 4.92-4.92 3.521 3.423 22.08 0 1 0.2236-2.044s1.104-3.481 4.401-2.143z";

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