import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	ScrollView,
	View,
	Image,
	Text,
	Button,
	StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
import { Avatar } from "react-native-paper";
const Story = ({ name }) => {
	const onPressButton = () => {
		alert("You clicked the button!");
	};
	return (
		<ScrollView horizontal={true} style={styles.container}>
			<Avatar.Image
				size={50}
				source={{
					uri: `https://media.geeksforgeeks.org/wp-content/uploads/20220305133853/gfglogo-300x300.png`,
				}}
			/>
		</ScrollView>
	);
};

export default Story;
