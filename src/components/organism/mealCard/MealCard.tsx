// MealCard.tsx
import { useNavigate } from "react-router-dom";
import { MealCardProps } from "../type";
import { Button } from "@/components/ui/button";
import BadgeTitle from "@/components/atoms/badgeTitle/BadgeTitle";
import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";

export const MealCard: React.FC<MealCardProps> = ({
  tag,
  title,
  image,
  features = [],
  buttons,
}) => {
  //   const navigate = useNavigate();

  return (
    <div className=" border-primary p-6 rounded-xl bg-cream flex flex-col items-center sm:flex-row gap-(--space-24-45) border bg-primary-light">
      <div className="flex flex-col items-center">
        {tag && (
          <BadgeTitle
            label="meals"
            color="#F15353"
            className="mb-(--space-13-19)"
          />
        )}
        <Typography
          tag="h5"
          text={title}
          className="text-primary-dark mb-6 lg:mb-5"
          role="title"
          ariaLabel={title}
          ariaLabelledBy="title"
        />
        <div className="w-(--space-197-216)">
          <Image src={image} alt={title} fill className="!static" />
        </div>
      </div>

      <div className="flex flex-col items-center sm:items-start sm:justify-center ">
        {/* Features List */}
        <ul
          className="flex flex-col sm:grid gap-y-4 gap-x-7  max-w-fit"
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`, // Dynamic columns
            gridAutoRows: "1fr", // Ensure equal row height
          }}
        >
          {features.map((feature, index) => (
            <li
              key={index}
              className="w-fit  flex items-start text-primary-dark  gap-2"
              style={{
                gridRow: `${(index % 3) + 1}`, // Distribute items into 3 fixed rows
              }}
            >
              <div className="min-w-[8px] w-[8px] relative mt-[3px] ">
                <Image
                  src="/icons/primary-dark-chevron-right.svg"
                  alt="Arrow icon"
                  fill
                  className="!static"
                />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4  mt-8">
          {buttons.map((button, index) => (
            <Button
              key={index}
              // onClick={() => navigate(button.route)}
              variant={index === 0 ? "primaryBtn" : "linkSecondary"}
              size={index === 0 ? "md" : "regular"}
              className={index === 0 ? "text-white" : "outlinePrimaryBtn"}
            >
              {button.label}

              {index !== 0 && (
                <Image
                  src="/icons/secondary-1-chevron-right.svg"
                  alt="icon"
                  fill
                  className="!static"
                />
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
