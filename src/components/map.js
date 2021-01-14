import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({text}) => <div style={{color: 'black'}}>{text}</div>
class MapDisplay extends React.Component {
    static defaultProps = {
        center: {
            lat: 21.015224, 
            lng: 105.847596
        },
        zoom: 11
    }
    render() {
        return(
            <div style= {{height: '400px' , width: '100%'}}>
                <GoogleMapReact bootstrapURLKeys={{key: "AIzaSyC4-WMlNAvtAA75Js53QFo-9CoWBuzyVzU"}}
                 defaultCenter={this.props.center}
                 defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={21.015224}
                        lng={105.847596}
                        text="Alo" />
                </GoogleMapReact>
            </div>
        )
    }
}
export default MapDisplay;