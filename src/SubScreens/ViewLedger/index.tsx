import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import moment from "moment";
import styles from "./styles";
import { COLORS } from "../../Utils/Colors";

const data = [
  {
    tr_date: "07-Jul-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_MAotVlDUhi3l2s",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "07-Jul-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_MApywXBMeqCjsK",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "30-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_M8Al0CKvptOK68",
    Debit: 0,
    credit: 5527,
  },
  {
    tr_date: "30-Jun-2023",
    tr_dateord: null,
    narration: "Bill for June 2023",
    Debit: 24871,
    credit: 0,
  },
  {
    tr_date: "28-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: order_M7FWMvJsg2zZpT",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "28-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_M7IihDkXRRWnJ1",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "26-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_M6YdzNQ82ulI6B",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LzLuPkJRxw94e0",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "07-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lyyxnb9gH0pqD1",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "07-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lyz1amQxi7f4c3",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "06-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LyZ5im71KwmCZw",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "06-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LyaIQEMe7GRY4l",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "06-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lyb2J43TJDbQbi",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "06-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lyb4vx5vOenV47",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "05-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LyAeKgSSpeQNiL",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "05-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LyAi0Gco0D31Xq",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "05-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LyAlkbBZ435BRg",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "05-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LyAnVGAyk8RyDG",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "05-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LyAwbj2jPZ1gQ2",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LxRbKP6QmcIpUe",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "02-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lx39Gzlto6FSma",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "02-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lx4T4wCE6OlWQT",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "01-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LwduRVhByXBKPp",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "01-Jun-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LweTUifoQo1zJi",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "31-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LvyZn0U3iDFiCJ",
    Debit: 0,
    credit: 8501,
  },
  {
    tr_date: "31-May-2023",
    tr_dateord: null,
    narration: "DOUBLE AMOUNT REVISED \r\n\r\n\r\n",
    Debit: 22,
    credit: 0,
  },
  {
    tr_date: "31-May-2023",
    tr_dateord: null,
    narration: "AMOUNT AUTOMATED REVISED BY BANK\r\n",
    Debit: 27,
    credit: 0,
  },
  {
    tr_date: "31-May-2023",
    tr_dateord: null,
    narration: "Bill for May 2023",
    Debit: 5797,
    credit: 0,
  },
  {
    tr_date: "30-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LvnF4N89lnOsgP",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "30-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lvttj7OG9i2lJ6",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "29-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LvPF7lB3n4Sn4v",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "24-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LtN6oNEKEQEZyV",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "24-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LtP8QrishfJQi2",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "24-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LtQIJTSHxKihNX",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "24-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LtQLK4WdJgMWz6",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "24-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LtRuCqL3UvrA2t",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "24-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LtRzKnaGoDh3ln",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt0H1DP2iaPajJ",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt0nb40FyIPsdX",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LszP6dDfGvutcY",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1C53AL5QHLrG",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1EvihJvctCeL",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1EvihJvctCeL",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1MZkigI6WpTH",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1PpdMfmeUSps",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1PpdMfmeUSps",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1odh0br1P0Qu",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1odh0br1P0Qu",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1sTBoTeHiD9S",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1vx26Iuv62Jr",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt1vx26Iuv62Jr",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt3Vsb99XTbSd6",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt3Vsb99XTbSd6",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt4IPcWDDd0Bbp",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt4LpnwFWeric6",
    Debit: 0,
    credit: 2,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt4LpnwFWeric6",
    Debit: 0,
    credit: 2,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt4V9eTX8KRC31",
    Debit: 0,
    credit: 2,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt4V9eTX8KRC31",
    Debit: 0,
    credit: 2,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt4c2EPXtcCLlo",
    Debit: 0,
    credit: 3,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt4mBfLk1akrNC",
    Debit: 0,
    credit: 3,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt5W046eyzK5OC",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt5nIZ3PRSr96w",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt6KjKqD2l0Hu9",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt6RPReictWdLK",
    Debit: 0,
    credit: 2,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt6TXmA5U79nCv",
    Debit: 0,
    credit: 3,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt6h4spyEbwkhQ",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt74K6w5u3Cdeh",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "23-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lt7hvDQ95vEx0C",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "22-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "22-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "22-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "22-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LsaCrD3PFxaQh4",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "22-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LsafwvcwV0o2ny",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "22-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lsc7MuSA5xe4Tg",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "22-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LsccQYLy1Ia4PV",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "18-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lr1V0sYHvHn5hV",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "18-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lr1Z0Um9SXoAnZ",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "18-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lr1yMJzNOda7p2",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "18-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lr8tgYbkXpNuvm",
    Debit: 0,
    credit: 10,
  },
  {
    tr_date: "18-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lr8zGxkv4ACZhE",
    Debit: 0,
    credit: 11,
  },
  {
    tr_date: "17-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LqlqyKKTvMkbTb",
    Debit: 0,
    credit: 10,
  },
  {
    tr_date: "13-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lp8LEqKBWTlnwP",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "13-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lp8OMfKpIHgzlE",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "13-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lp8PZuoWsmZSla",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LohB6bJE2j040J",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LoiAI22ti65V9X",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LojnQYEkcd65HR",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lok9q4oA3l1egF",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LokIr5ZotObXG6",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LokPh5VmZt6tDL",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LokUsWsdS4PhoJ",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LokXbrWFrHppRp",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LokcfR5zDPRaBz",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "11-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LoMdSMzei3USYX",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "10-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lns53WoZ8lfRoe",
    Debit: 0,
    credit: 100,
  },
  {
    tr_date: "09-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LnZSwfRKHKQ5N5",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ln2vDuZ837criQ",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ln35u1lMSeX08V",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ln3YLIz2vnKMnF",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ln3fjudhIN3l9I",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ln3xY1FIohAfRN",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ln8zaIbljSsOtG",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ln9nnpNTuJKu7H",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LnBI4lmiD0bxtf",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LnBWTEI6DuEhbi",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LnDm0Fg0Znk5nn",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "08-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LnDo5h9U4TXAhh",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "06-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LmHdikrsHamgZo",
    Debit: 0,
    credit: 10,
  },
  {
    tr_date: "06-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LmIbMOVjGOMDZq",
    Debit: 0,
    credit: 100,
  },
  {
    tr_date: "06-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LmO0t3FMWQXUGz",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "05-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LlrXOKlLHyUAjC",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "04-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LlbBFJSoqoxdSg",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ll7KG9FcOkPmqQ",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: 789456",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: 789456",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: 789456",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Ll9GKLSRd8kj43",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LlBfSKw8FWjf6u",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LlBlRzV8MKOPts",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LlBsbv6otkQmXq",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LlFj5E4BiADawA",
    Debit: 0,
    credit: 10,
  },
  {
    tr_date: "03-May-2023",
    tr_dateord: null,
    narration: "pay_LjsFGvHoMiANWk",
    Debit: 0,
    credit: 100,
  },
  {
    tr_date: "30-Apr-2023",
    tr_dateord: null,
    narration: "AMOUNT AUTOMATED REVISED BY BANK\r\n",
    Debit: 15,
    credit: 0,
  },
  {
    tr_date: "30-Apr-2023",
    tr_dateord: null,
    narration: "Bill for April 2023",
    Debit: 8658,
    credit: 0,
  },
  {
    tr_date: "29-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LjZ3nOBXA6reof",
    Debit: 0,
    credit: 21126,
  },
  {
    tr_date: "27-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lil0ubFTTszl4Y",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "26-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LiN8FyWcDm9i38",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "26-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LiN9bsJ9Bk0zHN",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "25-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LhuSpyNkPo9Ruc",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "20-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LfvYEjYNTGO6lg",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "19-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LfXkGjpdqfrGrW",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "19-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LfYD3LObgguRhS",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "19-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_Lffi8LTK029zMc",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "19-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LffjAHObo6kE0Y",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "19-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LfgIzitFby4poe",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "19-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LfgKUEEtkqEzjD",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "19-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LfhUybcpjDOEe7",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "12-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LcloLlffrNfF8e",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "07-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LauRLPa2bCYqif",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LZGQfYYGG8iAIv",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "03-Apr-2023",
    tr_dateord: null,
    narration: "PG TxnNo: pay_LZGoZrnIgZZTZT",
    Debit: 0,
    credit: 1,
  },
  {
    tr_date: "31-Mar-2023",
    tr_dateord: null,
    narration: "Bill for March 2023",
    Debit: 21128,
    credit: 0,
  },
  {
    tr_date: "24-Mar-2023",
    tr_dateord: null,
    narration: "AMOUNT AUTO REFUNDED BY BANK (PAYMENT\r\nTHROUGH APP)\r\n\r\n",
    Debit: 13,
    credit: 0,
  },
  {
    tr_date: "28-Feb-2023",
    tr_dateord: null,
    narration: "Bill for February 2023",
    Debit: 28,
    credit: 0,
  },
  {
    tr_date: "26-Sep-2022",
    tr_dateord: null,
    narration: "",
    Debit: 42,
    credit: 0,
  },
];
const ViewLedger = ({ navigation }: { navigation: any }) => {
  //Ladger RenderItem
  const ladgerRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View
      style={{
        backgroundColor: COLORS.SKIN_COLOR,
        marginHorizontal: scale(20),
        borderTopStartRadius: index === 0 ? scale(10) : scale(0),
        borderTopEndRadius: index === 0 ? scale(10) : scale(0),
        marginTop: index == 0 ? scale(20) : scale(0),
        borderBottomStartRadius:
          index === data.length - 1 ? scale(10) : scale(0),
        borderBottomEndRadius: index === data.length - 1 ? scale(10) : scale(0),
      // paddingHorizontal:scale(10)
      }}
    >
      <View style={[styles.renderContainer]}>
        <View style={styles.renderDateContainer}>
          <Text
            style={styles.renderDateText}
            adjustsFontSizeToFit
            numberOfLines={2}
          >
            {moment(item.tr_date).format("DD-MMM-YYYY")}
          </Text>
        </View>
        
        <View style={styles.renderDebit}>
          <Text
            style={styles.renderDateText}
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {item.Debit === 0 ? "-" : item.Debit}
          </Text>
        </View>
        <View style={styles.renderCredit}>
          <Text
            style={styles.renderDateText}
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {item.credit === 0 ? "-" : item.credit}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"View Ledger"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={ladgerRenderItem}
        overScrollMode={"never"}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scale(20) }}
        ListHeaderComponent={
          <View style={styles.flatDateContainer}>
            <Text style={styles.flatDateText}>Date</Text>
            {/* <Text style={styles.flatDateText}>Narration</Text> */}
            <Text style={styles.debitText}>Debit</Text>
            <Text style={styles.flatDateText}>Credit</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Ladger Available</Text>
          </View>
        }
      />
    </Background>
  );
};
export default ViewLedger;
