import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
import { COLORS } from '../../../../Utils/Colors';
export default function getStyle(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        container: {
            // paddingLeft: 5,
            paddingRight: 10,
            backgroundColor: COLORS.WHITE
        },
        dayContainer: {
            flex: 1,
            alignItems: 'center',
        },
        emptyDayContainer: {
            flex: 1
        },
        monthView: {
            backgroundColor: COLORS.WHITE
        },
        week: {
            marginVertical: appStyle.weekVerticalMargin,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        // @ts-expect-error
        ...(theme['stylesheet.calendar.main'] || {})
    });
}
