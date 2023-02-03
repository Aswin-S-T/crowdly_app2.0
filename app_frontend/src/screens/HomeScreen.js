import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import Feeds from "../components/Feeds";
import Story from "../components/Story";

const Home = () => {
	return (
		<View>
			<Header name={"Crowdly"} />
			<Story />
			<Feeds />
		</View>
	);
};

export default Home;
