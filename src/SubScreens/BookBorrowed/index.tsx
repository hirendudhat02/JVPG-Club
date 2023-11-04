import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";

const BookBorrowed = ({ navigation }: { navigation: any }) => {
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Book Borrowed"}
        menuOnPress={() => navigation.openDrawer()}
      />
    </Background>
  );
};
export default BookBorrowed;
