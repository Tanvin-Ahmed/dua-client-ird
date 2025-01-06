import { useParams } from "next/navigation";

const useSubCatId = () => {
  const { sub_cat } = useParams();

  return sub_cat ? Number(sub_cat) : null;
};

export default useSubCatId;
