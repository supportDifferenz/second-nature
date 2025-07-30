"use client";

import FooterBannerCTA from '@/components/organism/footerBannerCTA/FooterBannerCTA';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import useAuthStore from '@/zustand/store/authDataStore';

export default function FooterBannerCta() {

  const searchParams = useSearchParams();
  const pet = searchParams.get("pet");
  const protein = searchParams.get("protein");

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const footerBannerData = {
    dog: {
      beef: {
        id:"footer-banner",
        image:{
          web: "/images/MealsFooterDogBeef.webp",
          tablet: "/images/meals-footer-cta-mob.webp",
          mobile: "/images/meals-footer-cta-mob.webp",
        },
        caption: "get started with us",
        captionColor: "#fff",
        title: "Ready to fuel your dog",
        subTitle: "with the power of beef?",
        paragraph: "Packed with premium protein and heart-friendly nutrients, the Beef Bowl supports strong muscles, healthy digestion, and a vibrant coat.",
        subParagraph: "Subscribe to a meal plan today and give your dog the nutrition they need to thrive!",
        paragraphColor: "#FFFFFF",
        buttonText: "Build your plan",
        buttonLink: isAuthenticated ? "/location" : "/user-details",
        // buttonLink: "/location",
        bannerThemeColor: "#fff",
        align: "center" as "left" | "center" | "right",
      },
      chicken: {
        id: "footer-banner",
        image: {
          web: "/images/MealsFooterDogBeef.webp",
          tablet: "/images/meals-footer-cta-mob.webp",
          mobile: "/images/meals-footer-cta-mob.webp",
        },
        caption: "get started with us",
        captionColor: "#fff",
        title: "Could Chicken Bowl be",
        subTitle: "your dog's new favorite?",
        paragraph: "Light, lean, and nourishing, it’s perfect for keeping your pup active, healthy, and happy.",
        subParagraph: "• Light, lean, and nourishing, it’s perfect for keeping your pup active, healthy, and happy.",
        paragraphColor: "#FFFFFF",
        buttonText: "Build your plan",
        buttonLink: isAuthenticated ? "/location" : "/user-details",
        // buttonLink: "/location",
        bannerThemeColor: "#fff",
        align: "center" as "left" | "center" | "right",
      },
      lamb: {
        id: "footer-banner",
        image: {
          web: "/images/MealsFooterDogBeef.webp",
          tablet: "/images/meals-footer-cta-mob.webp",
          mobile: "/images/meals-footer-cta-mob.webp",
        },
        caption: "get started with us",
        captionColor: "#fff",
        title: "Is Lamb the wholesome",
        subTitle: "choice your dog deserves?",
        paragraph: "Rich in flavor and nutrients, the Lamb Bowl is perfect for sensitive stomachs and supports immune health, joint function, and overall vitality.",
        subParagraph: "Sign up for a meal plan now and treat your dog to the benefits of fresh, wholesome food!",
        paragraphColor: "#FFFFFF",
        buttonText: "Build your plan",
        buttonLink: isAuthenticated ? "/location" : "/user-details",
        // buttonLink: "/location",
        bannerThemeColor: "#fff",
        align: "center" as "left" | "center" | "right",
      }
    },
    cat: {
      beef: {
        id:"footer-banner",
        image:{
          web: "/images/MealsCatCTAWeb.webp",
          tablet: "/images/MealsCatCTAMob.webp",
          mobile: "/images/MealsCatCTAMob.webp",
        },
        caption: "get started with us",
        captionColor: "#fff",
        title: "Ready to fuel your cat",
        subTitle: "with the power of beef?",
        paragraph: "Packed with premium protein and heart-friendly nutrients, the Beef Bowl supports strong muscles, healthy digestion, and a vibrant coat.",
        subParagraph: "Subscribe to a meal plan today and give your cat the nutrition they need to thrive!",
        paragraphColor: "#FFFFFF",
        buttonText: "Build your plan",
        buttonLink: isAuthenticated ? "/location" : "/user-details",
        // buttonLink: "/location",
        bannerThemeColor: "#fff",
        align: "center" as "left" | "center" | "right",
      },
      chicken: {
        id: "footer-banner",
        image: {
          web: "/images/MealsCatCTAWeb.webp",
          tablet: "/images/MealsCatCTAMob.webp",
          mobile: "/images/MealsCatCTAMob.webp",
        },
        caption: "get started with us",
        captionColor: "#fff",
        title: "Could Chicken Bowl be",
        subTitle: "your cat's new favorite?",
        paragraph: "Light, lean, and nourishing, it’s perfect for keeping your pup active, healthy, and happy.",
        subParagraph: "• Light, lean, and nourishing, it’s perfect for keeping your pup active, healthy, and happy.",
        paragraphColor: "#FFFFFF",
        buttonText: "Build your plan",
        buttonLink: isAuthenticated ? "/location" : "/user-details",
        // buttonLink: "/location",
        bannerThemeColor: "#fff",
        align: "center" as "left" | "center" | "right",
      },
      lamb: {
        id: "footer-banner",
        image: {
          web: "/images/MealsCatCTAWeb.webp",
          tablet: "/images/MealsCatCTAMob.webp",
          mobile: "/images/MealsCatCTAMob.webp",
        },
        caption: "get started with us",
        captionColor: "#fff",
        title: "Is Lamb the wholesome",
        subTitle: "choice your cat deserves?",
        paragraph: "Rich in flavor and nutrients, the Lamb Bowl is perfect for sensitive stomachs and supports immune health, joint function, and overall vitality.",
        subParagraph: "Sign up for a meal plan now and treat your dog to the benefits of fresh, wholesome food!",
        paragraphColor: "#FFFFFF",
        buttonText: "Build your plan",
        buttonLink: isAuthenticated ? "/location" : "/user-details",
        // buttonLink: "/location",
        bannerThemeColor: "#fff",
        align: "center" as "left" | "center" | "right",
      }
    }
  }

  // Ensure pet and protein are valid string keys
  const petKey = (pet === "dog" || pet === "cat") ? pet : "dog";
  const proteinKey = (protein === "beef" || protein === "chicken" || protein === "lamb") ? protein : "beef";
  const selectedData = petKey && proteinKey ? footerBannerData[petKey][proteinKey] : footerBannerData.dog.beef;

  return (
    <FooterBannerCTA
      id={selectedData?.id || "footer-banner"}
      image={{
        web: selectedData?.image?.web || "/images/meals-footer-cta.webp",
        tablet: selectedData?.image?.tablet || "/images/meals-footer-cta-mob.webp",
        mobile: selectedData?.image?.mobile || "/images/meals-footer-cta-mob.webp",
      }}
      caption={selectedData?.caption || "get started with us"}
      captionColor={selectedData?.captionColor || "#fff"}
      title={selectedData?.title || "Ready to fuel your dog"}
      subTitle={selectedData?.subTitle || "with the power of beef?"}
      paragraph={selectedData?.paragraph || "Packed with premium protein and heart-friendly nutrients, the Beef Bowl supports strong muscles, healthy digestion, and a vibrant coat."}
      subParagraph={selectedData?.subParagraph || "Subscribe to a meal plan today and give your dog the nutrition they need to thrive!"}
      paragraphColor={selectedData?.paragraphColor || "#FFFFFF"}
      buttonText={selectedData?.buttonText || "Build your plan"}
      buttonLink={selectedData?.buttonLink || `${isAuthenticated ? "/location" : "/user-details"}`}
      // buttonLink={selectedData?.buttonLink || "/location"}
      bannerThemeColor={selectedData?.bannerThemeColor || "#fff"}
      align={selectedData?.align || "center"}
    />

    // <FooterBannerCTA
    //   id="footer-banner"
    //   image={{
    //     web: "/images/meals-footer-cta.webp",
    //     tablet: "/images/meals-footer-cta-mob.webp",
    //     mobile: "/images/meals-footer-cta-mob.webp",
    //   }}
    //   caption="get started with us"
    //   captionColor="#fff"
    //   title="Give Your Fur Baby"
    //   subTitle="the Gift of Real Food Today!"
    //   paragraph="Pets deserve better than processed kibble or canned food. Second Nature believes in nourishing your fur baby with fresh meals made from real, human-grade ingredients."
    //   paragraphColor="#FFFFFF"
    //   buttonText="Build your plan"
    //   buttonLink="/location"
    //   bannerThemeColor="#fff"
    //   align="center" // Can be "left", "center", or "right"
    // />
  )
}
