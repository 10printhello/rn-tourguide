import { StyleProp, ViewStyle } from 'react-native';
import { BorderRadiusObject, Shape } from '../types';
export interface TourGuideZoneByPositionProps {
    zone: number;
    tourKey?: string;
    isTourGuide?: boolean;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    width?: number | string;
    height?: number | string;
    shape?: Shape;
    borderRadiusObject?: BorderRadiusObject;
    containerStyle?: StyleProp<ViewStyle>;
    keepTooltipPosition?: boolean;
    tooltipBottomOffset?: number;
    text?: string;
    emoji?: string;
    iconName?: string;
}
export declare const TourGuideZoneByPosition: ({ isTourGuide, zone, tourKey, width, height, top, left, right, bottom, shape, containerStyle, keepTooltipPosition, tooltipBottomOffset, borderRadiusObject, text, emoji, iconName, }: TourGuideZoneByPositionProps) => JSX.Element | null;
