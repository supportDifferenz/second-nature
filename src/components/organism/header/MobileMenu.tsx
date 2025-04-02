import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavDropdown from "./MealDropdownMenu";
interface MobileMenuProps {
    className?: string;
  }
  
  const MobileMenu = ({ className }: MobileMenuProps) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className={className}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-4">
          {/* <NavDropdown
            label="For Dogs"
            items={["Beef Bowl", "Chicken Bowl", "Lamb Bowl"]}
          />
          <NavDropdown label="For Cats" items={["Fish Bowl", "Chicken Bowl"]} /> */}
          <a href="#">About Us</a>
          <a href="#">How it works</a>
          <a href="#">Blogs</a>
          <a href="#">Reviews</a>
          <a href="#">FAQs</a>
        </div>
      </SheetContent>
    </Sheet>
  );
  export default MobileMenu;
