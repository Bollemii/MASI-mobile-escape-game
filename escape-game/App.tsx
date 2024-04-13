import { Dimensions, StatusBar } from 'react-native';

import { constants } from './src/constants';
import { getRatio } from './src/utils/window';
import Router from './src/Router';

export default function App() {
    const windowOptions = Dimensions.get('window');
    constants.options.window = windowOptions;
    constants.options.windowRatio = getRatio(windowOptions.width, windowOptions.height);
    
    return (
        <>
            <StatusBar hidden={true}/>
            <Router/>
        </>
    );
}
