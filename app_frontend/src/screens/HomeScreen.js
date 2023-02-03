import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import Feeds from "../components/Feeds";

const Home = () => {
	return (
		<View>
			<Header />
			<Feeds />
		</View>
	);
};

export default Home;
