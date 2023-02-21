import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";

const LOGO_URL =
  "https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;
export default ({ navigation }) => (
  <Container>
    <BlurView intensity={50} tint="light" style={{ flex: 1, width: "100%", alighItems: "center" }}>
      <Logo source={{ uri: LOGO_URL }} />
    </BlurView>
    <Image source={require("../assets/vacation.jpg")} />
    <StatusBar barStyle="light-content" />
  </Container>
);
