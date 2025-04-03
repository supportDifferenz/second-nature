export type HeroBannersPropsType = {
  id: string;
  image: {
    web: string;
    tablet: string;
    mobile: string;
  };
  caption?: string;
  captionColor?: string;
  title?: string;
  paragraph?: string;
  paragraphColor?: string;
  halfTitle?: string;
  buttonText?: string;
  buttonTextColor?: string;
  buttonLink?: string;
  bannerThemeColor?: string;
};

export type FAQSItemsProps = {
  question: string;
  answer: string;
};



export type FooterBannerCTAPropsType = {
  id: string;
  image: {
    web: string;
    tablet: string;
    mobile: string;
  };
  caption?: string;
  captionColor: string;
  title?: string;
  paragraph?: string;
  paragraphColor?: string;
  subTitle?: string;
  buttonText?: string;
  buttonTextColor?: string;
  buttonLink?: string;
  bannerThemeColor: string;
};