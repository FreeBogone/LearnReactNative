import { ThemedView } from "@/components/ThemedView";
import { Text, View, SafeAreaView } from "react-native";
import CardScrollView from '@/components/CardScrollView';
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1}}>
        <ThemedView
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <CardScrollView></CardScrollView>
        </ThemedView>
    </SafeAreaView>
  );
}
