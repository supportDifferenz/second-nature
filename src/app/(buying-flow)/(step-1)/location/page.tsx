import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
// import PetLocationForm from "@/components/organisms/petLocationForm";

export default function PetLocationPage() {
  return (
    <BuyingFlowLayout step={1}>
      <div className="flex-1 bg-green-400 flex flex-col">
        {/* title,content */}
        <div className="bg-amber-100 h-full border flex-1 flex justify-center items-center">location</div>
        {/* navigation */}
        <div>button</div>
      </div>
      {/* <PetLocationForm /> */}
    </BuyingFlowLayout>
  );
}
