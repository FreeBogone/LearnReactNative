import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

type CardData = {
    name: string,
    description: string,
    numMembers: number
}

const Card = (props: CardData) => (
    <View style={styles.card}>
    <View style={styles.header}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.members}>Members: {props.numMembers}</Text>
    </View>
    <Text style={styles.description}>{props.description}</Text>
  </View>
);

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    members: {
      fontSize: 12,
      color: '#999',
    },
  });


export default Card;