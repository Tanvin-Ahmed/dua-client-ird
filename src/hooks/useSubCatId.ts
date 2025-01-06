import { useParams } from "next/navigation";

const useSubCatId = () => {
  const { sub_cart } = useParams();

  return sub_cart ? Number(sub_cart) : null;
};

export default useSubCatId;
