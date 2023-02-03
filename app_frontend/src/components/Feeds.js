import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
	AppRegistry,
	ScrollView,
	Image,
	Button,
	StyleSheet,
} from "react-native";
import { Avatar } from "react-native-paper";

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: "white",
	},
	feedImage: {
		width: "100%",
		height: 400,
		marginTop: 10,
		resizeMode: "cover",
	},
	logo: {
		width: 66,
		height: 58,
	},
	profileName: {
		fontFamily: "sans-serif",
		fontSize: 17,
		fontWeight: "bold",
		margin: 10,
	},
	alignMent: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	reactions: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 10,
	},
});
const Feeds = () => {
	return (
		<View>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.alignMent}>
						<Avatar.Image
							size={50}
							source={{
								uri: `https://media.geeksforgeeks.org/wp-content/uploads/20220305133853/gfglogo-300x300.png`,
							}}
						/>
						<Text style={styles.profileName}>Deepika Pathukone</Text>
						<Ionicons name="arrow-redo-outline" size={24} />
					</View>
					<Image
						style={styles.feedImage}
						source={{
							uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5r1XEuw-FMLm3SMzf1qNnoTItPQCdhPXdpfHlfXH1OILlCeQSzRZj6-3KSr8hrj0VIk&usqp=CAU",
						}}
					/>
					<View style={styles.reactions}>
						<Ionicons name="heart" size={24} />
						<Ionicons name="chatbubble-ellipses" size={24} />
						<Ionicons name="bookmark" size={24} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Feeds;
