import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <section>
      <div className="container border">
        <div>
          <div>
            <SecondaryBlockTitle
              title="What"
              highlight="Customers Say"
              textAlign="left"
              textColor="#00683D"
              className="ml-0 mb-(--space-8-30)"
            />
            <Button variant="linkSecondary">
              More Reviews
              <Image
                src="/icons/secondary-1-chevron-right.svg"
                alt="icon"
                fill
                className="!static"
              />
            </Button>
          </div>
          <div>
            <Image
              src="what-customers-says-vector.svg"
              alt="What Customers Say"
              fill
              className="!static w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
