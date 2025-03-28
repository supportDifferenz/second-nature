import Typography from "@/components/atoms/typography/Typography";
import React from "react";
import { TitleProps } from "./type";

export const InlinePrimaryTitle: React.FC<TitleProps> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "center",
  textColor = "#00683D",
  className,
  order = "accenting",
}) => {
  return (
    <div className={`text-${textAlign} ${className}`}>
      {caption && (
        <Typography
          tag="p"
          text={caption}
          className="text-sm font-medium"
        ></Typography>
      )}

      {order === "accenting" ? (
        <Typography
          tag="h2"
          text={title}
          style={{ color: `${textColor}` }}
          className="mb-(--space-10-20)"
        >
          {" "}
          <span className="highlight ">{highlight}</span>
        </Typography>
      ) : (
        <Typography
          tag="h2"
          text={highlight || ""}
          style={{ color: `${textColor}` }}
          className="mb-(--space-10-20) highlight"
        >
          {" "}
          <span className="font-bellota-text font-normal ">{title}</span>
        </Typography>
      )}

      <Typography
        tag="h6"
        text={paragraph}
        className={`text-lg  max-w-[90%] ${
          textAlign === "center"
            ? "mx-auto"
            : textAlign === "left"
            ? "ml-0"
            : "mr-0"
        }`}
      ></Typography>
    </div>
  );
};

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
