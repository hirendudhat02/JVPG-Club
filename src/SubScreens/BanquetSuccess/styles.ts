import { StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles =StyleSheet.create({
    titleText:{
        fontSize: scale(17),
        color: COLORS.WHITE,
        marginTop: scale(20),
        fontFamily:FONTS.PLAYFAIR_DISPLAY_REGULAR,
        alignSelf:"center"
      }
})
export default styles