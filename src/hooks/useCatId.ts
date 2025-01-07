import { useSearchParams } from "next/navigation";

const useCatId = () => {
  const params = useSearchParams();
  const cat = params.get("cat");

  return cat ? Number(cat) : null;
};

export default useCatId;
