import { Dimensions } from 'react-native';

import { constants } from './src/constants';
import Router from './src/Router';

const possibleRatio = ["16:9", "4:3", "1:1"];

function getRatio(scale: number): string {
    let ratioDiff = 100;
    let bestRatio = possibleRatio[0];
    
    for (const possible of possibleRatio) {
        const [width, height] = possible.split(':').map(Number);
        const diff = Math.abs(width / height - scale);
        
        if (diff < ratioDiff) {
            ratioDiff = diff;
            bestRatio = possible;
        }
    }
    return bestRatio;
}

export default function App() {
    const windowOptions = Dimensions.get('window');
    constants.options.window = windowOptions;
    constants.options.windowRatio = getRatio(windowOptions.height / windowOptions.width);
    
    return (
        <Router/>
    );
}
