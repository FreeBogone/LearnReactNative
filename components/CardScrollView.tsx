import React from 'react';
import { Image, ScrollView, Text, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from '@/components/ThemedText';
import Card from '@/components/Card';

const data = [
    { name: 'Group 1', Description: 'A small but active group.', numMembers: 15 },
    { name: 'Group 2', Description: 'Focused on community service.', numMembers: 20 },
    { name: 'Group 3', Description: 'A group of tech enthusiasts.', numMembers: 25 },
    { name: 'Group 4', Description: 'Lovers of outdoor activities.', numMembers: 18 },
    { name: 'Group 5', Description: 'A book club with diverse tastes.', numMembers: 12 },
    { name: 'Group 6', Description: 'Music lovers and performers.', numMembers: 22 },
    { name: 'Group 7', Description: 'Dedicated to fitness and health.', numMembers: 30 },
    { name: 'Group 8', Description: 'A group of foodies.', numMembers: 16 },
    { name: 'Group 9', Description: 'Travel enthusiasts sharing tips.', numMembers: 19 },
    { name: 'Group 10', Description: 'A group for movie buffs.', numMembers: 14 },
    { name: 'Group 11', Description: 'Focused on environmental issues.', numMembers: 21 },
    { name: 'Group 12', Description: 'A group of gamers.', numMembers: 28 },
    { name: 'Group 13', Description: 'Art and craft enthusiasts.', numMembers: 17 },
    { name: 'Group 14', Description: 'A group for pet lovers.', numMembers: 23 },
    { name: 'Group 15', Description: 'History buffs and researchers.', numMembers: 13 },
    { name: 'Group 16', Description: 'A group of photographers.', numMembers: 26 },
    { name: 'Group 17', Description: 'Focused on mental wellness.', numMembers: 20 },
    { name: 'Group 18', Description: 'A group of writers and poets.', numMembers: 15 },
    { name: 'Group 19', Description: 'Sports enthusiasts.', numMembers: 27 },
    { name: 'Group 20', Description: 'A group for tech startups.', numMembers: 18 },
    { name: 'Group 21', Description: 'Focused on DIY projects.', numMembers: 22 },
    { name: 'Group 22', Description: 'A group of language learners.', numMembers: 14 },
    { name: 'Group 23', Description: 'Fitness and yoga enthusiasts.', numMembers: 19 },
    { name: 'Group 24', Description: 'A group for board game lovers.', numMembers: 16 },
    { name: 'Group 25', Description: 'Focused on financial literacy.', numMembers: 25 },
    { name: 'Group 26', Description: 'A group of fashion enthusiasts.', numMembers: 20 },
    { name: 'Group 27', Description: 'Gardening and plant lovers.', numMembers: 17 },
    { name: 'Group 28', Description: 'A group for coding enthusiasts.', numMembers: 28 },
    { name: 'Group 29', Description: 'Focused on meditation and mindfulness.', numMembers: 13 },
    { name: 'Group 30', Description: 'A group of car enthusiasts.', numMembers: 21 },
    { name: 'Group 31', Description: 'Focused on social justice.', numMembers: 24 },
    { name: 'Group 32', Description: 'A group of chefs and cooks.', numMembers: 18 },
    { name: 'Group 33', Description: 'Focused on space and astronomy.', numMembers: 22 },
    { name: 'Group 34', Description: 'A group for anime fans.', numMembers: 26 },
    { name: 'Group 35', Description: 'Focused on personal development.', numMembers: 15 },
    { name: 'Group 36', Description: 'A group of entrepreneurs.', numMembers: 20 },
    { name: 'Group 37', Description: 'Focused on sustainable living.', numMembers: 19 },
    { name: 'Group 38', Description: 'A group of dancers.', numMembers: 23 },
    { name: 'Group 39', Description: 'Focused on robotics and AI.', numMembers: 27 },
    { name: 'Group 40', Description: 'A group for mystery lovers.', numMembers: 12 }
  ];
  

const screenWidth = Dimensions.get('window').width;

const CardScrollView = () => (
<ScrollView style={styles.container}>
    <Image source={require('../assets/images/Icon-Only-Black.png')} style={styles.cornerLogo}/>
    <ThemedText type="title">Welcome!</ThemedText>
    {data.map((group, index) => (
        <Card key={index} name={group.name} description={group.Description} numMembers={group.numMembers} />
    ))}
</ScrollView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: screenWidth,
    },
    cornerLogo: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 50,
      height: 50,
    },
  });

export default CardScrollView;