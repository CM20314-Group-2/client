<<<<<<< HEAD
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const ratingValToColour = (ratingValue: number): string => {
  if (ratingValue > 85) return "#1EA853";
  if (ratingValue > 70) return "#50A75C";
  if (ratingValue > 50) return "#BED62E";
  if (ratingValue > 30) return "#D6C52E";

  return "brown";
};

export const ratingValToText = (ratingValue: number): string => {
  if (ratingValue > 85) return "Great";
  if (ratingValue > 70) return "Good";
  if (ratingValue > 50) return "Okay";
  if (ratingValue > 30) return "Bad";

  return "Avoid";
};
const RATING_CAPSULE_HEIGHT = 18;

const RatingCapsule = ({
  ratingValue = 0,
}: {
  ratingValue?: number | null;
}) => (
  <View
    style={StyleSheet.flatten([
      styles.CapsuleStyle,
      {
        backgroundColor: ratingValToColour(
          ratingValue == null ? 0 : ratingValue
        ),
      },
    ])}
  >
    <Text style={styles.RatingText}>
      {ratingValToText(ratingValue == null ? 0 : ratingValue)}
=======
import { Business } from '@futureproof/typings'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ratingToColour = (ratingValue : number) : string => {
  if (ratingValue < 0 || ratingValue > 100) throw new Error('ratingValue must be between 0 and 100')

  if      (ratingValue >= 85) return '#1ea853'
  else if (ratingValue >= 70) return '#50a75c'
  else if (ratingValue >= 50) return '#bed62e'
  else if (ratingValue >= 30) return '#d6c52e'
  else                        return 'brown'
}
  
export const ratingToText = (ratingValue : number) : string => {
  if (ratingValue < 0 || ratingValue > 100) throw new Error('ratingValue must be between 0 and 100')

  if      (ratingValue >= 85) return 'Great'
  else if (ratingValue >= 70) return 'Good'
  else if (ratingValue >= 50) return 'Okay'
  else if (ratingValue >= 30) return 'Bad'
  else                        return 'Avoid'
}

const RATING_CAPSULE_HEIGHT = 18

interface ComponentProps {
  ratingValue : Business['customerScore'] | Business['sustainabilityScore']
}

const RatingCapsule = ({ ratingValue = 0 } : ComponentProps) => (
  <View
    style={{
      ...styles.CapsuleStyle,
      backgroundColor: ratingToColour(ratingValue === null ? 0 : ratingValue)
    }}
    testID='rating-capsule'
  >
    <Text
      style={styles.RatingText}
      testID='rating-text'
    >
      {ratingToText(ratingValue === null ? 0 : ratingValue)}
>>>>>>> origin/sprint-2
    </Text>
  </View>
);

const styles = StyleSheet.create({
<<<<<<< HEAD
  RatingText: {
    fontSize: 11,
    color: "white",
  },
  CapsuleStyle: {
    alignItems: "center",
    width: 55,
    height: RATING_CAPSULE_HEIGHT,
    borderRadius: RATING_CAPSULE_HEIGHT / 2,
  },
});

export default RatingCapsule;
=======
  CapsuleStyle: {
    alignItems: 'center',
    borderRadius: RATING_CAPSULE_HEIGHT / 2,
    height: RATING_CAPSULE_HEIGHT,
    width: 55
  },
  RatingText: {
    color: 'white',
    fontSize: 11
  }
})

export default RatingCapsule
>>>>>>> origin/sprint-2
