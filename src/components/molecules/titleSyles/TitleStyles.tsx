// titleStyles.ts
export type TitleStylePropType = {
  id: string;
  alignment: "left" | "center" | "right";
  arrangement: "block" | "inline";
  description?: string;
};

const TileStyle: Record<string, TitleStylePropType> = {
  PRIMARY_LARGE: {
    id: "primary_large",
    alignment: "center",
    arrangement: "block",
    description: "Main large heading, used for primary page titles",
  },
  PRIMARY_MEDIUM: {
    id: "primary_medium",
    alignment: "center",
    arrangement: "block",
    description: "Medium-sized primary heading, used for subheadings",
  },
  PRIMARY_SMALL: {
    id: "primary_small",
    alignment: "left",
    arrangement: "inline",
    description: "Small primary heading, suitable for section headers",
  },
  SECONDARY_LARGE: {
    id: "secondary_large",
    alignment: "left",
    arrangement: "block",
    description: "Large secondary title, often used for content headings",
  },
  SECONDARY_MEDIUM: {
    id: "secondary_medium",
    alignment: "left",
    arrangement: "inline",
    description: "Medium secondary title, for article headers",
  },
  SECONDARY_SMALL: {
    id: "secondary_small",
    alignment: "right",
    arrangement: "inline",
    description: "Small secondary title, for captions or side notes",
  },
  TERTIARY: {
    id: "tertiary",
    alignment: "center",
    arrangement: "block",
    description: "Tertiary title for additional information",
  },
};

export default ;
