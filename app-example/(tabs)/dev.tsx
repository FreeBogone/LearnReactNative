import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';
import React from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native';
import Card from '@/components/Card';


export default function TabTwoScreen() {
  const dataSet = [{name: "Bob", number: 1345},
                {name: "Joe", number: 5490},
                {name: "Jerry", number: 3401}]

  const makeCards = () => {
    return dataSet.map((data) => <Card data={data}/>)
  }

  return (
    <SafeAreaView>
      <View style={styles.stepContainer}>
        {makeCards()}
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
