import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { useGetAllOffers } from "@/hooks/subscriptionHooks/getAllOffers";

const TopHeader = () => {

  const { data: offers } = useGetAllOffers();
  const discountPercentage = offers?.result?.[0]?.discount_percent || 10;

  return (
    <div className="bg-primary">
      <div className="container">
        <Typography
          tag="p"
          text={`Get ${discountPercentage}% off your first delivery -&nbsp;`}
          // text="Get 30% off your first delivery -&nbsp;"
          className=" text-primary-light flex items-center justify-center py-2  lg:py-2.5 max-[380px]:!text-[14px]"
        >
          <Button variant={"linkPrimaryLight"}> Order Now</Button>
        </Typography>
      </div>
    </div>
  )
};
export default TopHeader;
