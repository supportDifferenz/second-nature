import Typography from "@/components/atoms/typography/Typography";
import React from "react";
import { TitleProps } from "./type";

export const InlinePrimaryTitle: React.FC<TitleProps> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "bottom",
  textColor = "#00683D",
  className,
}) => {
  return (
    <div className={`text-${textAlign} `}>
      {caption && (
        <Typography
          tag="p"
          text={caption}
          className="text-sm font-medium"
        ></Typography>
      )}
      <Typography
        tag="h2"
        text={title}
        style={{ color: `${textColor}` }}
        className="mb-(--space-10-20)"
      >
        {" "}
        <span className="highlight ">{highlight}</span>
      </Typography>
      <Typography
        tag="h6"
        text={paragraph}
        className="text-lg max-w-[90%] mx-auto"
      ></Typography>
    </div>
  );
};

export const SecondaryBlockTitle: React.FC<TitleProps> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "bottom",
  textColor = "#00683D",
  className,
}) => {
  return (
    <div
      className={`text-${textAlign}  w-fit flex flex-col items-center text-center mx-auto`}
    >
      <Typography
        tag="h2"
        className="capitalize text-primary-dark mb-[var(--space-20-30)]"
        text={title}
        role="title"
        ariaLabel={title + highlight}
        ariaLabelledBy="title"
      >
        <span
          className="highlight block"
          role="title"
          aria-label={highlight}
          aria-labelledby="title"
        >
          {highlight}
        </span>
      </Typography>
      <Typography
        tag="h6"
        className="w-[85%] sm:w-[50%]"
        text={paragraph}
        ariaLabel={paragraph}
        ariaLabelledBy="title"
      />
    </div>
  );
};
export const HealthBenefitTitle: React.FC<TitleProps> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "bottom",
  textColor = "#00683D",
  className,
}) => {
  return (
    <div
      className={`text-${textAlign}  w-fit flex flex-col items-center text-center mx-auto`}
    >
      <Typography
        tag="h2"
        className="capitalize text-primary-dark mb-[var(--space-10-20)]"
        text={title}
        role="title"
        ariaLabel={title + highlight}
        ariaLabelledBy="title"
      />
      <Typography
        tag="h6"
        className="w-[90%] sm:w-[60%]"
        text={paragraph}
        ariaLabel={paragraph}
        ariaLabelledBy="title"
      />
    </div>
  );
};
// export const HealthBenefitDescription: React.FC<TitleProps> = ({
//   title = "no text",
//   highlight,
//   paragraph,
//   caption,
//   textAlign = "bottom",
//   textColor = "#00683D",
//   className,
// }) => {
//   return (
//     <div
//       className={`text-${textAlign}  w-fit flex flex-col items-center text-center mx-auto`}
//     >
//       <Typography
//         tag="h6"
//         className="capitalize text-primary-dark mb-[var(--space-10-20)]"
//         text={title}
//         role="title"
//         ariaLabel={title + highlight}
//         ariaLabelledBy="title"
//       >
//         <span
//           className="highlight block"
//           role="title"
//           aria-label={highlight}
//           aria-labelledby="title"
//         >
//           {highlight}
//         </span>
//       </Typography>
//     </div>
//   );
// };

// export const BlockSecondaryTitle: React.FC<TitleProps> = ({
//   title,
//   highlight,
//   paragraph,
//   caption,
//   textAlign = "center",
//   textColor = "text-green-700",
//   captionPosition = "top",
// }) => {
//   return (
//     <div className={`text-${textAlign} ${textColor}`}>
//       {caption && captionPosition === "top" && (
//         <Typography
//           tag="p"
//           text="{caption}"
//           className="text-sm font-medium"
//         ></Typography>
//       )}
//       <Typography tag="h2" className="text-3xl font-bold" text="{title}">
//         , <span className="font-semibold">{highlight}</span>
//       </Typography>
//       {caption && captionPosition === "bottom" && (
//         <Typography
//           tag="p"
//           className="text-sm font-medium"
//           text="{caption}"
//         ></Typography>
//       )}
//       <Typography tag="p" className="text-lg" text="{paragraph}"></Typography>
//     </div>
//   );
// };

// export const BlockPrimaryTitle: React.FC<TitleProps> = ({
//   title,
//   highlight,
//   paragraph,
//   caption,
//   textAlign = "center",
//   textColor = "text-green-700",
//   captionPosition = "top",
// }) => {
//   return (
//     <div className={`text-${textAlign} ${textColor}`}>
//       {caption && captionPosition === "top" && (
//         <Typography
//           tag="p"
//           text={caption}
//           className="text-sm font-medium uppercase"
//         ></Typography>
//       )}
//       <Typography tag="h2" text={title} className="text-3xl font-bold">
//         <span className="font-semibold">{highlight}</span>
//       </Typography>
//       {caption && captionPosition === "bottom" && (
//         <Typography
//           tag="p"
//           text={caption}
//           className="text-sm font-medium uppercase"
//         ></Typography>
//       )}
//       <Typography tag="p" text={paragraph} className="text-lg"></Typography>
//     </div>
//   );
// };
