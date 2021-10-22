import { Component } from "@wordpress/element";
import "../../../../dist/navigation.min.js";

interface propsTypes { 
    Navigation-WebComponent : {

    }
}

export class NavigationWc extends Component {

    render() {
        return <NavigationWC>{this.props.children}</NavigationWC>
    }
}