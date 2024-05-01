import { Dimensions, StatusBar } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';

import { constants } from '@/constants';
import { getRatio } from '@/utils/window';
import Router from '@/router/Router';

export default function App() {
    const windowOptions = Dimensions.get('window');
    constants.window.options = windowOptions;
    constants.window.ratio = getRatio(windowOptions.width, windowOptions.height);
    
    return (
        <RootSiblingParent>
            <StatusBar hidden={true}/>
            <Router/>
        </RootSiblingParent>
    );
};
