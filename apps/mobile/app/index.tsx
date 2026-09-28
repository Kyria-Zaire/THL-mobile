import { StyleSheet, Text, View } from "react-native";

import { colors, spacing } from "@/styles/tokens";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE HIVE LOGISTICS</Text>
      <Text style={styles.subtitle}>Mobile premium convoyage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.bgPrimary,
    flex: 1,
    gap: spacing.sm,
    justifyContent: "center",
    padding: spacing.lg,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
  },
});
