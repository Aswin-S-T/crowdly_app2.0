import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
	return (
		<View
			style={{
				backgroundColor: "#07BA8F",
				color: "white",
				width: "100%",
				padding: 20,
			}}
		>
			<Text
				style={{
					color: "white",
					fontSize: 25,
					fontWeight: "bold",
					top: 10,
					position: "relative",
					fontFamily: "sans-serif",
				}}
			>
				Crowdly
			</Text>
		</View>
	);
};

export default Header;
