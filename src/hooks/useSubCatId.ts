import { useSearchParams } from "next/navigation";

const useSubCatId = () => {
  const params = useSearchParams();
  const subCat = params.get("subcat");

  return subCat ? Number(subCat) : null;
};

export default useSubCatId;
