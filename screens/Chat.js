import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { useNavigation, useRoute } from "@react-navigation/native";
import { auth, database } from "../firebase";
import AuthContextProvider, { AuthContext } from "../store/auth-context";
import IconButton from "../components/ui/IconButton";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();

  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="exit"
          color={tintColor}
          size={24}
          onPress={authCtx.logout}
        />
      ),
    });
  }, [navigation]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = (messagesArray) => {
    console.log(messagesArray);
    const msg = messagesArray[0];
    const myMsg = {
      ...msg,
      senderId: route.params.database.myId,
      receiverId: route.params.database.userId,
    };
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, myMsg)
    );
    Firestore()
      .collection("chats")
      .doc("2323")
      .collection("messages")
      .add({
        ...myMsg,
        createdAt: new Date(),
      });
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        messagesContainerStyle={{ backgroundColor: "#fff" }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{ right: { backgroundColor: "orange" } }}
            />
          );
        }}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
