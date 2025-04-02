import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

const TopHeader = () => (
  <div className="bg-primary">
    <div className="container">
      <Typography
        tag="p"
        text="Get 30% off your first delivery -"
        className=" text-primary-light flex items-center justify-center py-2.5"
      >
        <Button variant={"linkPrimaryLight"}>Order Now</Button>
      </Typography>
    </div>
  </div>
);
export default TopHeader;
