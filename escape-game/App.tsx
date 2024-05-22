import { Dimensions, StatusBar } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';

import Router from '@/router/Router';

export default function App() {
    return (
        <RootSiblingParent>
            <StatusBar hidden/>
            <Router/>
        </RootSiblingParent>
    );
};
