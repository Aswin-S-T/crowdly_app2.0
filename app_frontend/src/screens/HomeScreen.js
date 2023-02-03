import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

const Home = () => {
	return (
		<View>
			<Header />
			<Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text>
			<Ionicons name="md-home" size={80} color="#006600" />
		</View>
	);
};

export default Home;
