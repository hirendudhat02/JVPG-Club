import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const MyCarousel = ({ data, renderItem }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const pagination = (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      containerStyle={{ backgroundColor: "transparent" }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: "rgba(0, 0, 0, 0.92)",
      }}
      inactiveDotStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        layout={"default"}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={600}
        itemWidth={300}
        layoutCardOffset={`1`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyCarousel;
