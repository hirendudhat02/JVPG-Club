import { StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles =StyleSheet.create({
linearContainer:{
    height: scale(165),
    width: scale(150),
    borderRadius: scale(10),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleText:{
    fontSize: scale(16),
    color: COLORS.WHITE,
    marginBottom: scale(12),
    fontFamily:FONTS.POPPINS_MEDIUM
  },
  image:{ height: scale(165), width: scale(150) },
  renderButtonContainer:{ marginHorizontal: scale(7), marginBottom: scale(28) }
})
export default styles