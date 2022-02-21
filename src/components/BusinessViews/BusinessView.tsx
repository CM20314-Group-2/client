import DescriptionView from "@components/BusinessViews/DescriptionView";
import ImagesCarousel from "@components/BusinessViews/ImagesCarousel";
import RatingsView from "@components/BusinessViews/RatingsView";
import TitleView from "@components/BusinessViews/TitleView";
import { BusinessType, DisplayableBusiness } from "@futureproof/typings";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

// PLACEHOLDER BUSINESS -> Update to fetch graphQL
const ExampleBusiness: DisplayableBusiness = {
  id: "1",
  name: "Starbucks",
  profileText: "This is a test business",
  sustainabilityScore: 100,
  customerScore: 65,
  type: BusinessType.Cafe,
  profilePicture:
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
};

const BusinessView = () => {
  return (
    <SafeAreaView style={styles.businessViewStyle}>
      <ScrollView>
        <TitleView
          name={ExampleBusiness.name}
          profilePicture={ExampleBusiness.profilePicture}
        />
        <DescriptionView profileText={ExampleBusiness.profileText} />
        <RatingsView
          customerScore={ExampleBusiness.customerScore}
          sustainabilityScore={ExampleBusiness.sustainabilityScore}
        />
        <ImagesCarousel />
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  businessViewStyle: {
    marginHorizontal: 30,
  },
});

export default BusinessView;