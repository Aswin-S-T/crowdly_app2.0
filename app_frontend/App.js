import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";
import SettingScreen from "./src/screens/SettingScreen";
import Nofification from "./src/screens/NotificationScreen";
import Profile from "./src/screens/ProfileScreen";

const TabNavigator = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: "Home",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="md-home"
						size={tabInfo.focused ? 26 : 24}
						color={tabInfo.focused ? "#07BA8F" : tabInfo.tintColor}
					/>
				),
			},
		},
		User: {
			screen: UserScreen,
			navigationOptions: {
				tabBarLabel: "User",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="people-outline"
						size={tabInfo.focused ? 26 : 24}
						color={tabInfo.focused ? "#07BA8F" : tabInfo.tintColor}
					/>
				),
			},
		},
		Notification: {
			screen: Nofification,
			navigationOptions: {
				tabBarLabel: "Notification",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="notifications-outline"
						size={tabInfo.focused ? 26 : 24}
						color={tabInfo.focused ? "#07BA8F" : tabInfo.tintColor}
					/>
				),
			},
		},
		Setting: {
			screen: SettingScreen,
			navigationOptions: {
				tabBarLabel: "Setting",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="md-settings-outline"
						size={tabInfo.focused ? 26 : 24}
						color={tabInfo.focused ? "#07BA8F" : tabInfo.tintColor}
					/>
				),
			},
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				tabBarLabel: "Profile",
				tabBarIcon: (tabInfo) => (
					<Ionicons
						name="person-circle-outline"
						size={tabInfo.focused ? 26 : 24}
						color={tabInfo.focused ? "#07BA8F" : tabInfo.tintColor}
					/>
				),
			},
		},
	},
	{
		initialRouteName: "Home",
		barStyle: { backgroundColor: "aliceblue" },
	}
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
	return (
		<Navigator>
			<HomeScreen />
		</Navigator>
	);
}
