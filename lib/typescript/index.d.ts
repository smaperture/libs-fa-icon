import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { StyleProp, ViewStyle } from 'react-native';
declare const Icon: React.FC<{
    color: string;
    icon: IconDefinition;
    size: number;
    style?: StyleProp<ViewStyle>;
}>;
export default Icon;
