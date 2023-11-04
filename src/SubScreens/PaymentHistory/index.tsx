import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { scale } from "../../Utils/Helper/Scalling";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../Utils/Colors";
import moment from "moment";
import styles from "./styles";
import { FONTS } from "../../Utils/Fonts";
import { IMAGES } from "../../Utils/Images";

const data = [
  {
    PaymenDate: "07-Jul-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300426",
    Amount: "1",
    Desc: "PG TxnNo: pay_MApywXBMeqCjsK",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300426_CR.pdf",
  },
  {
    PaymenDate: "07-Jul-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300425",
    Amount: "1",
    Desc: "PG TxnNo: pay_MAotVlDUhi3l2s",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300425_CR.pdf",
  },
  {
    PaymenDate: "30-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300376",
    Amount: "5527",
    Desc: "PG TxnNo: pay_M8Al0CKvptOK68",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300376_CR.pdf",
  },
  {
    PaymenDate: "28-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300349",
    Amount: "1",
    Desc: "PG TxnNo: pay_M7IihDkXRRWnJ1",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300349_CR.pdf",
  },
  {
    PaymenDate: "28-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "NB301693",
    Amount: "1",
    Desc: "PG TxnNo: order_M7FWMvJsg2zZpT",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/NB301693_CR.pdf",
  },
  {
    PaymenDate: "26-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300334",
    Amount: "1",
    Desc: "PG TxnNo: pay_M6YdzNQ82ulI6B",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300334_CR.pdf",
  },
  {
    PaymenDate: "08-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300135",
    Amount: "1",
    Desc: "PG TxnNo: pay_LzLuPkJRxw94e0",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300135_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "L  ",
    VoucherNo: "M2300799",
    Amount: "100",
    Desc: "pay_LjsFGvHoMiANWk",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/M2300799_CR.pdf",
  },
  {
    PaymenDate: "07-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300131",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lyz1amQxi7f4c3",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300131_CR.pdf",
  },
  {
    PaymenDate: "07-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300130",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lyyxnb9gH0pqD1",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300130_CR.pdf",
  },
  {
    PaymenDate: "06-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300127",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lyb4vx5vOenV47",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300127_CR.pdf",
  },
  {
    PaymenDate: "06-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300126",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lyb2J43TJDbQbi",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300126_CR.pdf",
  },
  {
    PaymenDate: "06-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300124",
    Amount: "1",
    Desc: "PG TxnNo: pay_LyaIQEMe7GRY4l",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300124_CR.pdf",
  },
  {
    PaymenDate: "06-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300123",
    Amount: "1",
    Desc: "PG TxnNo: pay_LyZ5im71KwmCZw",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300123_CR.pdf",
  },
  {
    PaymenDate: "05-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300117",
    Amount: "1",
    Desc: "PG TxnNo: pay_LyAwbj2jPZ1gQ2",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300117_CR.pdf",
  },
  {
    PaymenDate: "05-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300116",
    Amount: "1",
    Desc: "PG TxnNo: pay_LyAnVGAyk8RyDG",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300116_CR.pdf",
  },
  {
    PaymenDate: "05-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300115",
    Amount: "1",
    Desc: "PG TxnNo: pay_LyAlkbBZ435BRg",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300115_CR.pdf",
  },
  {
    PaymenDate: "05-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300114",
    Amount: "1",
    Desc: "PG TxnNo: pay_LyAi0Gco0D31Xq",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300114_CR.pdf",
  },
  {
    PaymenDate: "05-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300113",
    Amount: "1",
    Desc: "PG TxnNo: pay_LyAeKgSSpeQNiL",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300113_CR.pdf",
  },
  {
    PaymenDate: "03-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300107",
    Amount: "1",
    Desc: "PG TxnNo: pay_LxRbKP6QmcIpUe",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300107_CR.pdf",
  },
  {
    PaymenDate: "02-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300095",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lx4T4wCE6OlWQT",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300095_CR.pdf",
  },
  {
    PaymenDate: "02-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300094",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lx39Gzlto6FSma",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300094_CR.pdf",
  },
  {
    PaymenDate: "01-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300090",
    Amount: "1",
    Desc: "PG TxnNo: pay_LweTUifoQo1zJi",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300090_CR.pdf",
  },
  {
    PaymenDate: "01-Jun-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300089",
    Amount: "1",
    Desc: "PG TxnNo: pay_LwduRVhByXBKPp",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300089_CR.pdf",
  },
  {
    PaymenDate: "31-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300073",
    Amount: "8501",
    Desc: "PG TxnNo: pay_LvyZn0U3iDFiCJ",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300073_CR.pdf",
  },
  {
    PaymenDate: "30-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300067",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lvttj7OG9i2lJ6",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300067_CR.pdf",
  },
  {
    PaymenDate: "30-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300058",
    Amount: "1",
    Desc: "PG TxnNo: pay_LvnF4N89lnOsgP",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300058_CR.pdf",
  },
  {
    PaymenDate: "29-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "AP300042",
    Amount: "1",
    Desc: "PG TxnNo: pay_LvPF7lB3n4Sn4v",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/AP300042_CR.pdf",
  },
  {
    PaymenDate: "24-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00445",
    Amount: "1",
    Desc: "PG TxnNo: pay_LtRzKnaGoDh3ln",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00445_CR.pdf",
  },
  {
    PaymenDate: "24-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00444",
    Amount: "1",
    Desc: "PG TxnNo: pay_LtRuCqL3UvrA2t",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00444_CR.pdf",
  },
  {
    PaymenDate: "24-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00442",
    Amount: "1",
    Desc: "PG TxnNo: pay_LtQLK4WdJgMWz6",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00442_CR.pdf",
  },
  {
    PaymenDate: "24-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00441",
    Amount: "1",
    Desc: "PG TxnNo: pay_LtQIJTSHxKihNX",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00441_CR.pdf",
  },
  {
    PaymenDate: "24-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00440",
    Amount: "1",
    Desc: "PG TxnNo: pay_LtP8QrishfJQi2",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00440_CR.pdf",
  },
  {
    PaymenDate: "24-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00436",
    Amount: "1",
    Desc: "PG TxnNo: pay_LtN6oNEKEQEZyV",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00436_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00433",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt7hvDQ95vEx0C",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00433_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00432",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt74K6w5u3Cdeh",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00432_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00431",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt6h4spyEbwkhQ",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00431_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00430",
    Amount: "3",
    Desc: "PG TxnNo: pay_Lt6TXmA5U79nCv",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00430_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00429",
    Amount: "2",
    Desc: "PG TxnNo: pay_Lt6RPReictWdLK",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00429_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00428",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt6KjKqD2l0Hu9",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00428_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00427",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt5nIZ3PRSr96w",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00427_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00426",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt5W046eyzK5OC",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00426_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00424",
    Amount: "3",
    Desc: "PG TxnNo: pay_Lt4mBfLk1akrNC",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00424_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00423",
    Amount: "3",
    Desc: "PG TxnNo: pay_Lt4c2EPXtcCLlo",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00423_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00422",
    Amount: "2",
    Desc: "PG TxnNo: pay_Lt4V9eTX8KRC31",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00422_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00421",
    Amount: "2",
    Desc: "PG TxnNo: pay_Lt4V9eTX8KRC31",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00421_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00420",
    Amount: "2",
    Desc: "PG TxnNo: pay_Lt4LpnwFWeric6",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00420_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "L  ",
    VoucherNo: "APP00419",
    Amount: "2",
    Desc: "PG TxnNo: pay_Lt4LpnwFWeric6",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00419_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "L  ",
    VoucherNo: "APP00418",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt4IPcWDDd0Bbp",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00418_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "L  ",
    VoucherNo: "APP00417",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt3Vsb99XTbSd6",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00417_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00416",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt3Vsb99XTbSd6",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00416_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00414",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1vx26Iuv62Jr",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00414_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00413",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1vx26Iuv62Jr",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00413_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00412",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1sTBoTeHiD9S",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00412_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00411",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1odh0br1P0Qu",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00411_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00410",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1odh0br1P0Qu",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00410_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00409",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1PpdMfmeUSps",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00409_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00408",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1PpdMfmeUSps",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00408_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00407",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1MZkigI6WpTH",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00407_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00406",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1EvihJvctCeL",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00406_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00405",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1EvihJvctCeL",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00405_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00404",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt1C53AL5QHLrG",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00404_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00403",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00403_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00402",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00402_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00401",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00401_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00400",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt0nb40FyIPsdX",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00400_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00399",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00399_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00398",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00398_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00397",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00397_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00396",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lt0H1DP2iaPajJ",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00396_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00395",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00395_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00394",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00394_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00393",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00393_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00392",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00392_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00391",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00391_CR.pdf",
  },
  {
    PaymenDate: "23-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00390",
    Amount: "1",
    Desc: "PG TxnNo: pay_LszP6dDfGvutcY",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00390_CR.pdf",
  },
  {
    PaymenDate: "22-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00381",
    Amount: "1",
    Desc: "PG TxnNo: pay_LsccQYLy1Ia4PV",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00381_CR.pdf",
  },
  {
    PaymenDate: "22-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00380",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lsc7MuSA5xe4Tg",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00380_CR.pdf",
  },
  {
    PaymenDate: "22-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00378",
    Amount: "1",
    Desc: "PG TxnNo: pay_LsafwvcwV0o2ny",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00378_CR.pdf",
  },
  {
    PaymenDate: "22-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00377",
    Amount: "1",
    Desc: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00377_CR.pdf",
  },
  {
    PaymenDate: "22-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00376",
    Amount: "1",
    Desc: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00376_CR.pdf",
  },
  {
    PaymenDate: "22-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00375",
    Amount: "1",
    Desc: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00375_CR.pdf",
  },
  {
    PaymenDate: "22-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00374",
    Amount: "1",
    Desc: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00374_CR.pdf",
  },
  {
    PaymenDate: "18-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00346",
    Amount: "11",
    Desc: "PG TxnNo: pay_Lr8zGxkv4ACZhE",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00346_CR.pdf",
  },
  {
    PaymenDate: "18-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00345",
    Amount: "10",
    Desc: "PG TxnNo: pay_Lr8tgYbkXpNuvm",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00345_CR.pdf",
  },
  {
    PaymenDate: "18-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00338",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lr1yMJzNOda7p2",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00338_CR.pdf",
  },
  {
    PaymenDate: "18-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00336",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lr1Z0Um9SXoAnZ",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00336_CR.pdf",
  },
  {
    PaymenDate: "18-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00335",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lr1V0sYHvHn5hV",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00335_CR.pdf",
  },
  {
    PaymenDate: "17-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00325",
    Amount: "10",
    Desc: "PG TxnNo: pay_LqlqyKKTvMkbTb",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00325_CR.pdf",
  },
  {
    PaymenDate: "13-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00275",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lp8PZuoWsmZSla",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00275_CR.pdf",
  },
  {
    PaymenDate: "13-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00274",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lp8OMfKpIHgzlE",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00274_CR.pdf",
  },
  {
    PaymenDate: "13-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00273",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lp8LEqKBWTlnwP",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00273_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00259",
    Amount: "1",
    Desc: "PG TxnNo: pay_LokcfR5zDPRaBz",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00259_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00258",
    Amount: "1",
    Desc: "PG TxnNo: pay_LokXbrWFrHppRp",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00258_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00257",
    Amount: "1",
    Desc: "PG TxnNo: pay_LokUsWsdS4PhoJ",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00257_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00256",
    Amount: "1",
    Desc: "PG TxnNo: pay_LokPh5VmZt6tDL",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00256_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00255",
    Amount: "1",
    Desc: "PG TxnNo: pay_LokIr5ZotObXG6",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00255_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "NB300897",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lok9q4oA3l1egF",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/NB300897_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00252",
    Amount: "1",
    Desc: "PG TxnNo: pay_LojnQYEkcd65HR",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00252_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00247",
    Amount: "1",
    Desc: "PG TxnNo: pay_LoiAI22ti65V9X",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00247_CR.pdf",
  },
  {
    PaymenDate: "12-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00245",
    Amount: "1",
    Desc: "PG TxnNo: pay_LohB6bJE2j040J",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00245_CR.pdf",
  },
  {
    PaymenDate: "11-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00231",
    Amount: "1",
    Desc: "PG TxnNo: pay_LoMdSMzei3USYX",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00231_CR.pdf",
  },
  {
    PaymenDate: "10-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "NB300680",
    Amount: "100",
    Desc: "PG TxnNo: pay_Lns53WoZ8lfRoe",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/NB300680_CR.pdf",
  },
  {
    PaymenDate: "09-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00162",
    Amount: "1",
    Desc: "PG TxnNo: pay_LnZSwfRKHKQ5N5",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00162_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00160",
    Amount: "1",
    Desc: "PG TxnNo: pay_LnDo5h9U4TXAhh",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00160_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00159",
    Amount: "1",
    Desc: "PG TxnNo: pay_LnDm0Fg0Znk5nn",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00159_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00158",
    Amount: "1",
    Desc: "PG TxnNo: pay_LnBWTEI6DuEhbi",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00158_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00157",
    Amount: "1",
    Desc: "PG TxnNo: pay_LnBI4lmiD0bxtf",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00157_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00156",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ln9nnpNTuJKu7H",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00156_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00155",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ln8zaIbljSsOtG",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00155_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00154",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ln3xY1FIohAfRN",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00154_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00153",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ln3fjudhIN3l9I",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00153_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00152",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ln3YLIz2vnKMnF",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00152_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00151",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ln35u1lMSeX08V",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00151_CR.pdf",
  },
  {
    PaymenDate: "08-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00150",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ln2vDuZ837criQ",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00150_CR.pdf",
  },
  {
    PaymenDate: "06-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00146",
    Amount: "1",
    Desc: "PG TxnNo: pay_LmO0t3FMWQXUGz",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00146_CR.pdf",
  },
  {
    PaymenDate: "06-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00140",
    Amount: "100",
    Desc: "PG TxnNo: pay_LmIbMOVjGOMDZq",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00140_CR.pdf",
  },
  {
    PaymenDate: "06-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00139",
    Amount: "10",
    Desc: "PG TxnNo: pay_LmHdikrsHamgZo",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00139_CR.pdf",
  },
  {
    PaymenDate: "05-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00132",
    Amount: "1",
    Desc: "PG TxnNo: pay_LlrXOKlLHyUAjC",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00132_CR.pdf",
  },
  {
    PaymenDate: "04-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00128",
    Amount: "1",
    Desc: "PG TxnNo: pay_LlbBFJSoqoxdSg",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00128_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00122",
    Amount: "10",
    Desc: "PG TxnNo: pay_LlFj5E4BiADawA",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00122_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00118",
    Amount: "1",
    Desc: "PG TxnNo: pay_LlBsbv6otkQmXq",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00118_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00117",
    Amount: "1",
    Desc: "PG TxnNo: pay_LlBlRzV8MKOPts",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00117_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00116",
    Amount: "1",
    Desc: "PG TxnNo: pay_LlBfSKw8FWjf6u",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00116_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00114",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ll9GKLSRd8kj43",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00114_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00113",
    Amount: "1",
    Desc: "PG TxnNo: 789456",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00113_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00112",
    Amount: "1",
    Desc: "PG TxnNo: 789456",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00112_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00111",
    Amount: "1",
    Desc: "PG TxnNo: 789456",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00111_CR.pdf",
  },
  {
    PaymenDate: "03-May-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00110",
    Amount: "1",
    Desc: "PG TxnNo: pay_Ll7KG9FcOkPmqQ",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00110_CR.pdf",
  },
  {
    PaymenDate: "29-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00082",
    Amount: "21126",
    Desc: "PG TxnNo: pay_LjZ3nOBXA6reof",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00082_CR.pdf",
  },
  {
    PaymenDate: "27-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00071",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lil0ubFTTszl4Y",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00071_CR.pdf",
  },
  {
    PaymenDate: "26-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00064",
    Amount: "1",
    Desc: "PG TxnNo: pay_LiN9bsJ9Bk0zHN",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00064_CR.pdf",
  },
  {
    PaymenDate: "26-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00063",
    Amount: "1",
    Desc: "PG TxnNo: pay_LiN8FyWcDm9i38",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00063_CR.pdf",
  },
  {
    PaymenDate: "25-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00049",
    Amount: "1",
    Desc: "PG TxnNo: pay_LhuSpyNkPo9Ruc",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00049_CR.pdf",
  },
  {
    PaymenDate: "20-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00026",
    Amount: "1",
    Desc: "PG TxnNo: pay_LfvYEjYNTGO6lg",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00026_CR.pdf",
  },
  {
    PaymenDate: "19-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00025",
    Amount: "1",
    Desc: "PG TxnNo: pay_LfhUybcpjDOEe7",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00025_CR.pdf",
  },
  {
    PaymenDate: "19-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00024",
    Amount: "1",
    Desc: "PG TxnNo: pay_LfgKUEEtkqEzjD",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00024_CR.pdf",
  },
  {
    PaymenDate: "19-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00023",
    Amount: "1",
    Desc: "PG TxnNo: pay_LfgIzitFby4poe",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00023_CR.pdf",
  },
  {
    PaymenDate: "19-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00022",
    Amount: "1",
    Desc: "PG TxnNo: pay_LffjAHObo6kE0Y",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00022_CR.pdf",
  },
  {
    PaymenDate: "19-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00021",
    Amount: "1",
    Desc: "PG TxnNo: pay_Lffi8LTK029zMc",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00021_CR.pdf",
  },
  {
    PaymenDate: "19-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00020",
    Amount: "1",
    Desc: "PG TxnNo: pay_LfYD3LObgguRhS",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00020_CR.pdf",
  },
  {
    PaymenDate: "19-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00019",
    Amount: "1",
    Desc: "PG TxnNo: pay_LfXkGjpdqfrGrW",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00019_CR.pdf",
  },
  {
    PaymenDate: "12-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00018",
    Amount: "1",
    Desc: "PG TxnNo: pay_LcloLlffrNfF8e",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00018_CR.pdf",
  },
  {
    PaymenDate: "07-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "NB300113",
    Amount: "1",
    Desc: "PG TxnNo: pay_LauRLPa2bCYqif",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/NB300113_CR.pdf",
  },
  {
    PaymenDate: "03-Apr-2023",
    PaymentMode: "N  ",
    VoucherNo: "APP00017",
    Amount: "1",
    Desc: "PG TxnNo: pay_LZGoZrnIgZZTZT",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/APP00017_CR.pdf",
  },
];

const PaymentHistory = ({ navigation }: { navigation: any }) => {
  //Paymnet History RenderItem
  const renderItem = ({ item, index }: { item: any; index: any }) => {
    return (
      <View style={styles.boxContainer}>
        <View style={{ flex: 8 }}>
          <Text style={styles.reciptNo}>Receipt No. {item.VoucherNo}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: scale(10),
            }}
          >
            <View
              style={{
                flex: 4,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text
                style={[
                  styles.renderKey,
                  { fontFamily: FONTS.POPPINS_REGULAR },
                ]}
              >
                Bill Date
              </Text>
              <Text
                style={[
                  styles.renderKey,
                  {
                    fontFamily: FONTS.POPPINS_REGULAR,
                    marginTop: scale(3),
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Payment Mode
              </Text>
              <Text
                style={[
                  styles.renderKey,
                  {
                    fontFamily: FONTS.POPPINS_REGULAR,
                    marginTop: scale(3),
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                Paid Amount
              </Text>
            </View>
            <View
              style={{
                flex: 7,
                paddingHorizontal: scale(10),
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text
                style={[
                  styles.renderKey,
                  {
                    fontFamily: FONTS.POPPINS_MEDIUM,
                    marginTop: scale(3),
                  },
                ]}
              >
                {moment(item.PaymenDate).format("DD MMM, YYYY") + " "}
              </Text>
              <Text
                style={[
                  styles.renderKey,
                  {
                    marginTop: scale(3),
                    fontFamily: FONTS.POPPINS_MEDIUM,
                  },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                {item.PaymentMode == "L  " || item.PaymentMode == "T  "
                  ? "Offline Cheque Deposit"
                  : item.PaymentMode == "C  "
                  ? "Offline Payment by Cash"
                  : item.PaymentMode == "N  "
                  ? "Online Payment"
                  : item.PaymentMode}
              </Text>
              <Text style={styles.renderAmount}>
                {"Rs." + " "}
                {item.Amount} /-
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 2,justifyContent:"center",alignItems:"center" }}>
          <TouchableOpacity>
            <Image
              source={IMAGES.DOWNLOAD_BILL}
              style={{
                height: scale(55),
                width: scale(55),
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Payment History"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        overScrollMode={"never"}
        contentContainerStyle={{
          paddingBottom: scale(30),
          marginVertical: scale(15),
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Payment History Available</Text>
          </View>
        }
      />
    </Background>
  );
};
export default PaymentHistory;
