import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getInvoiceBySubIdAndPetId } from "@/services/api/subscriptionApis";

export const useGetInvoiceBySubIdAndPetId = (subId: string, petId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_INVOICE_BY_SUB_ID_AND_PET_ID, subId, petId],
    queryFn: async () => getInvoiceBySubIdAndPetId(subId, petId),
    enabled: !!subId && !!petId,
  });
};