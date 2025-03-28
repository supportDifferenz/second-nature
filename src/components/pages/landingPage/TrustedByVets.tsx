import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";

export default function TrustedByVets() {
  const vets = [
    {
      name: "Dr. Emmy",
      title: "Veterinarian",
      image: "/images/nutritionists-1.webp",
    },
    {
      name: "Dr. Salim",
      title: "Veterinarian",
      image: "/images/nutritionists-2.webp",
    },
    {
      name: "Dr. Hari",
      title: "Veterinarian",
      image: "/images/nutritionists-3.webp",
    },
  ];
  return (
    <section className=" text-center text-secondary-2-light bg-[#8C3D3D] container-fluid">
      <div className="container   py-20 2xl:py-25">
        <Typography
          tag="h2"
          text="Formulated by nutritionists,"
          className="supporting mb-(--space-67-75) capitalize"
        >
          <Typography
            tag="span"
            text="Trusted By Vets"
            className="highlight block"
          />
        </Typography>
        <div className="flex justify-center gap-11 flex-wrap  text-white">
          {vets.map((vet, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[138px] h-[138px] rounded-full border-8 border-secondary-2 overflow-hidden">
                <Image
                  src={vet.image}
                  alt={vet.name}
                  fill
                  className="w-full !static h-full object-cover"
                />
              </div>
              <Typography
                tag="h6"
                text={vet.name}
                className="mt-2.5 text-lg font-medium"
              />
              <Typography
                tag="span"
                text={vet.title}
                className="mt-[1px]  text-(--fs-body-button-text)"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
