import Typography from "@/components/atoms/typography/Typography";
import React from "react";
import { TitlePropsType } from "@/components/types/type";
import { cn } from "@/lib/utils";

export const PrimaryInlineTitle: React.FC<TitlePropsType> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "text-center",
  textColor = "#00683D",
  className,
  order = "accenting",
  paragraphColor,
}) => {
  return (
    <div className={`${textAlign} ${className}`}>
      {caption && (
        <Typography
          tag="p"
          text={caption}
          className={`text-sm font-medium `}
        ></Typography>
      )}

      {order === "accenting" ? (
        <Typography
          tag="h2"
          text={title}
          style={{ color: `${textColor}` }}
        >
          {" "}
          <span className="highlight ">{highlight}</span>
        </Typography>
      ) : (
        <Typography
          tag="h2"
          text={highlight || ""}
          style={{ color: `${textColor}` }}
          className=" highlight"
        >
          {" "}
          <span className="font-bellota-text font-normal ">{title}</span>
        </Typography>
      )}

      {paragraph && (
        <Typography
          tag="h6"
          text={paragraph}
          className={`
            text-lg
            ${textAlign === "text-left" ? "ml-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            ${textAlign === "text-center" ? "mx-auto sm:max-w-[70%]  lg:max-w-[50%]" : ""}
            ${textAlign === "text-right" ? "mr-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            mt-3

          `}
          style={{
            color: `${paragraphColor ? paragraphColor : "var(--text-color)"}`,
          }}
        />
      )}
    </div>
  );
};

export const PrimaryBlockTitle: React.FC<TitlePropsType> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "text-center",
  textColor = "#00683D",
  paragraphColor,
  className,
  order = "accenting",
}) => {
  return (
    <div className={`${textAlign} ${className}`}>
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
          className="mb-3"
        >
          {" "}
          <span className="highlight block">{highlight}</span>
        </Typography>
      ) : (
        <Typography
          tag="h2"
          text={highlight || ""}
          style={{ color: `${textColor}` }}
          className="mb-3 highlight"
        >
          {" "}
          <span className="font-bellota-text font-normal ">{title}</span>
        </Typography>
      )}

      {paragraph && (
        <Typography
          tag="h6"
          text={paragraph}
          className={`
            text-lg
            ${textAlign === "text-left" ? "ml-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            ${textAlign === "text-center" ? "mx-auto sm:max-w-[70%]  lg:max-w-[50%]" : ""}
            ${textAlign === "text-right" ? "mr-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            mt-[var(--space-10-20)]
          `}
          style={{
            color: `${paragraphColor ? paragraphColor : "var(--text-color)"}`,
          }}
        />
      )}
    </div>
  );
};

export const SecondaryInlineTitle: React.FC<TitlePropsType> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "text-center",
  textColor = "#00683D",
  className,
  order = "accenting",
  paragraphColor,
}) => {
  return (
    <div className={`${textAlign}  ${className} `}>
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
          className={`capitalize   `}
          style={{ color: `${textColor}` }}
          role="title"
          ariaLabel={title + highlight}
          ariaLabelledBy="title"
        >
          {" "}
          <span className="highlight ">{highlight}</span>
        </Typography>
      ) : (
        <Typography
          tag="h2"
          className={`capitalize   mb-3`}
          text={highlight || ""}
          style={{ color: `${textColor}` }}
          role="title"
          ariaLabel={title + highlight}
          ariaLabelledBy="title"
        >
          <span className="highlight ">{title}</span>
        </Typography>
      )}

      {paragraph && (
        <Typography
          tag="h6"
          text={paragraph}
          className={`
            text-lg
            ${textAlign === "text-left" ? "ml-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            ${textAlign === "text-center" ? "mx-auto sm:max-w-[70%]  lg:max-w-[50%]" : ""}
            ${textAlign === "text-right" ? "mr-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            mt-[var(--space-10-20)]
          `}
          style={{
            color: `${paragraphColor ? paragraphColor : "var(--text-color)"}`,
          }}
        />
      )}
    </div>
  );
};

export const SecondaryBlockTitle: React.FC<TitlePropsType> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "text-center",
  textColor = "#00683D",
  className,
  order = "accenting",
  paragraphColor,
}) => {
  return (
    <div className={`${textAlign}  ${className}`}>
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
          className={`capitalize max-sm:mx-5`}
          text={title}
          role="title"
          ariaLabel={title + highlight}
          ariaLabelledBy="title"
          style={{ color: `${textColor}` }}
        >
          {" "}
          <span className="highlight block">{highlight}</span>
        </Typography>
      ) : (
        <Typography
          tag="h2"
          className={`capitalize max-sm:mx-5`}
          text={highlight || ""}
          role="title"
          ariaLabel={title + highlight}
          ariaLabelledBy="title"
          style={{ color: `${textColor}` }}
        >
          <span className="highlight ">{title}</span>
        </Typography>
      )}

      {paragraph && (
        <Typography
          tag="h6"
          text={paragraph}
          className={`
            text-lg
            ${textAlign === "text-left" ? "ml-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            ${textAlign === "text-center" ? "mx-auto sm:max-w-[70%]  lg:max-w-[50%]" : ""}
            ${textAlign === "text-right" ? "mr-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            mt-[var(--space-20-30)] max-sm:mx-5
          `}
          style={{
            color: `${paragraphColor ? paragraphColor : "var(--text-color)"}`,
          }}
        />
      )}
    </div>
  );
};

export const HealthBenefitTitle: React.FC<TitlePropsType> = ({
  title = "no text",
  highlight,
  paragraph,
  // caption,
  textAlign = "text-center",
  // textColor = "#00683D",
  // className,
  paragraphColor,
}) => {
  return (
    <div
      className={`${textAlign}  w-fit flex flex-col items-center text-center mx-auto`}
    >
      <Typography
        tag="h2"
        className="capitalize text-primary-dark "
        text={title}
        role="title"
        ariaLabel={title + highlight}
        ariaLabelledBy="title"
      />

      {paragraph && (
        <Typography
          tag="h6"
          text={paragraph}
          className={`
            text-lg
            ${textAlign === "text-left" ? "ml-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            ${textAlign === "text-center" ? "mx-auto sm:max-w-[70%]  lg:max-w-[50%]" : ""}
            ${textAlign === "text-right" ? "mr-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            mt-[var(--space-10-20)]
          `}
          style={{
            color: `${paragraphColor ? paragraphColor : "var(--text-color)"}`,
          }}
        />
      )}
    </div>
  );
};

export const MealTransitionTitle: React.FC<TitlePropsType> = ({
  title = "no text",
  highlight,
  paragraph,
  caption,
  textAlign = "text-center",
  textColor = "#00683D",
  className,
  // order = "accenting",
  paragraphColor,
}) => {
  return (
    <div className={cn(`${textAlign}  ${className}`)}>
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
      >
        {" "}
        <span className="highlight ">{highlight}</span>
      </Typography>

      {paragraph && (
        <Typography
          tag="h6"
          text={paragraph}
          className={`
            text-lg
            ${textAlign === "text-left" ? "ml-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            ${textAlign === "text-center" ? "mx-auto sm:max-w-[70%]  lg:max-w-[50%]" : ""}
            ${textAlign === "text-right" ? "mr-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
              mt-(--space-10-20)

          `}
          style={{
            color: `${paragraphColor ? paragraphColor : "var(--text-color)"}`,
          }}
        />
      )}
    </div>
  );
};
export const PetFoodLookingTitle: React.FC<TitlePropsType> = ({
  title = "no text",
  highlight,
  paragraph,
  // caption,
  textAlign = "text-center",
  // textColor = "#00683D",
  className,
  // order = "accenting",
  paragraphColor,
}) => {
  return (
    <div
      className={` ${className} w-fit flex flex-col px-[] items-center sm:items-start text-center sm:text-left mx-auto sm:mr-auto`}
    >
      <Typography
        tag="h2"
        className="capitalize text-secondary-1 "
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

      {paragraph && (
        <Typography
          tag="h6"
          text={paragraph}
          className={`
            text-lg 
            ${textAlign === "text-left" ? "ml-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            ${textAlign === "text-center" ? "mx-auto sm:max-w-[70%]  lg:max-w-[50%]" : ""}
            ${textAlign === "text-right" ? "mr-0 sm:max-w-[80%]  lg:max-w-[60%]" : ""}
            mb-[var(--space-20-30)]
          `}
          style={{
            color: `${paragraphColor ? paragraphColor : "var(--text-color)"}`,
          }}
        />
      )}
    </div>
  );
};
// export const HealthBenefitDescription: React.FC<TitlePropsType> = ({
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

// export const BlockSecondaryTitle: React.FC<TitlePropsType> = ({
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

// export const BlockPrimaryTitle: React.FC<TitlePropsType> = ({
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
