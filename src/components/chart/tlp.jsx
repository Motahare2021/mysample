import React from 'react';
import "./bizchratTheme.css"
class TLP extends React.Component {
    render() {
        const{width,height}= this.props
        return (
                <svg width={`${width}`} height={`${height}`} >
                    <defs>
                        <circle id="Circle1" cx="15" cy="25"  r="20" />
                        <circle id="Circle2" cx="15" cy="75"  r="20" />
                        <circle id="Circle3" cx="15" cy="125" r="20" />
                        <circle id="Circle4" cx="15" cy="175" r="20" />
                    </defs>

                    <rect fill="#222233" x="0" y="0" width={`${width}`} height={`${height}`} rx="8" />
                    <use x="15" y="5" xlinkHref="#Circle1" fill="red" />
                    <use x="15" y="5" xlinkHref="#Circle2" fill="#FFBF00" />
                    <use x="15" y="5" xlinkHref="#Circle3" fill="#7ED321" />
                    <use x="15" y="5" xlinkHref="#Circle4" fill="#FFFFFF" />
                </svg>
        )
    }
}
// TLP.defaultProps = {
//
//     width:110,
//     height:400,
//     BlackColor: '#000000',
//     DisabledColor: '#4A4A4A',
//     RedColor: '#D0021B',
//     YellowColor: '#F8E71C',
//     GreenColor: '#7ED321',
// };
export default TLP