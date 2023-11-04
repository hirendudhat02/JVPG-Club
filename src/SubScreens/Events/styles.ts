import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";

const styles =StyleSheet.create({
    bottomWhitwContainer: {
        backgroundColor: COLORS.WHITE,
        padding: scale(5),
        borderRadius: scale(10),
        flexDirection: "row",
      },
      categoryContainer: {
        flexDirection: "column",
        flex: 6,
        alignItems: "baseline",
        marginTop: scale(10),
      },
      categorySkeleton: {
        marginHorizontal: scale(20),
        marginVertical: scale(2),
        marginTop: scale(10),
        height:scale(16),
        width:scale(100),
        borderRadius: scale(15),
      },
      categorySkeletonTitle: {
        marginHorizontal: scale(20),
        marginVertical: scale(2),
        marginTop: scale(10),
        height:scale(16),
        width:scale(145),
        borderRadius: scale(15),
      },
      categorySubContainer: {
        paddingHorizontal: scale(20),
        paddingVertical: scale(2),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.RED,
        borderRadius: scale(15),
      },
      eventCategoryTitle: {
        fontFamily: FONTS.POPPINS_REGULAR,
        fontSize: scale(11),
        color: COLORS.WHITE,
      },
      eventTitle: {
        fontFamily: FONTS.POPPINS_MEDIUM,
        fontSize: scale(16),
        color: COLORS.BLACK,
        marginTop: scale(5),
      },
      eventView: {
        height: Dimensions.get("screen").height / 7.4,
        width: Dimensions.get("screen").width / 3.7,
        borderRadius: scale(10),
      },
      eventSkeletonContainer:{
        backgroundColor: COLORS.WHITE,
        padding: scale(5),
        borderRadius: scale(10),
        flexDirection: "row",
        marginHorizontal: scale(16),
        marginBottom:scale(10)
      },
      eventtime: {
        height: scale(20),
        justifyContent: "center",
        alignItems: "baseline",
        borderRadius: scale(15),
        alignSelf: "baseline",
      },
      startTimeText: {
        fontSize: scale(12),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.RED,
        textTransform: "capitalize",
      },
})
export default styles