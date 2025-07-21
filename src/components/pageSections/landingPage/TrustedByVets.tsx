import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ backgroundColor: "#2A1616" }}
      whileInView={{ backgroundColor: "#944446" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="text-center text-secondary-2-light container-fluid l"
    >

      <div className="container   py-20 2xl:py-25">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
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
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-11 flex-wrap text-white"
        >
          {vets.map((vet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.25, 0.8, 0.25, 1], // premium feel curve (easeOutQuad)
              }}
              viewport={{ once: true }}

              className="flex flex-col items-center"
            >
              <div className=" w-[118px] h-[118px] sm:w-[138px] sm:h-[138px] rounded-full border-8 border-secondary-2 overflow-hidden">
                <Image
                  src={vet.image}
                  alt={vet.name}
                  fill
                  className="w-full !static h-full object-cover"
                />
              </div>
              <Typography
                tag="h5"
                text={vet.name}
                className="mt-2.5 text-lg font-medium"
              />
              <Typography
                tag="span"
                text={vet.title}
                className="mt-[1px] text-(--fs-body-button-text)"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section >
  );
}
