import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles=StyleSheet.create({
    saveText: {
        fontSize: scale(18),
        color: COLORS.WHITE,
        fontFamily: FONTS.POPPINS_MEDIUM,
      },
      submitButton: {
        height: Dimensions.get("screen").height / 15,
        width: Dimensions.get("screen").width / 1.12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.RED,
        borderRadius: scale(10),
        alignSelf: "center",
      },
})
export default styles