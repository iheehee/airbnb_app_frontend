import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { BlurView } from "expo-blur";
import Btn from "../components/Auth/Btn";

const LOGO_URL =
  "https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png";

const Container = styled.View`
  flex: 1;
`;
const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Logo = styled.Image`
  width: 70px;
  height: 70px;
`;

const BtnContainer = styled.View``;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  return (
  <Container>
    <BlurView
      intensity={40}
      tint="light"
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Logo source={{ uri: LOGO_URL }} />
      <BtnContainer>
        <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
        <Btn onPress={goToSignIn} text={"Sign In"} />
      </BtnContainer>
    </BlurView>
    <Image source={require("../assets/vacation.jpg")} />
    <StatusBar barStyle="light-content" />
  </Container>
    ); 
  };
