import CircularRatingIndicator from '@components/ratings/CircularRatingIndicator'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CertificatesList from '@components/ratings/CertificatesList'
import RectangularRatingIndicator from '@components/ratings/RectangularRatingIndicator'
import { DisplayableBusiness } from '@futureproof/typings'

// WAITING FOR SERVER + TYPINGS FOR DATA INPUT

type ExampleBusinessRatingType = Pick<DisplayableBusiness, 'sustainabilityScore'>

const ExampleBusinessRating : ExampleBusinessRatingType = {
  sustainabilityScore: 70
}

const FutureProofRatingView = () => {
  return (
    <SafeAreaView style={styles.FutureProofRatingViewStyle}>
      <ScrollView>
        <View style={styles.FutureProofRatingTitleView}>
          <CircularRatingIndicator circleWidth={150} circleHeight={150} progressBarWidth={14} progressValue={ExampleBusinessRating.sustainabilityScore ?? 0} ratingName={'FutureProof'}/>
          <CertificatesList/>
        </View>
        <Text style={styles.headingText}>BREAKDOWN</Text>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={75} ratingName={'Carbon Emissions'}/>
        </View>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={20} ratingName={'Working Conditions'}/>
        </View>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={95} ratingName={'Ecosystem Impact'}/>
        </View>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={51} ratingName={'Pay distibution'}/>
        </View>
        <View style={styles.RectangularRatingStyle}>
          <RectangularRatingIndicator progressValue={85} ratingName={'Discrimination and Diversity'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  FutureProofRatingTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20
  },
  FutureProofRatingViewStyle: {
    marginHorizontal: 30
  },
  RectangularRatingStyle: {
    paddingVertical: 5
  },
  headingText: {
    color: '#A0A0A0',
    fontSize: 12,
    paddingLeft: 20
  }
})

export default FutureProofRatingView
