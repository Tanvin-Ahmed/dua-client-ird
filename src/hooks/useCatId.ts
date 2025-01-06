import { useParams } from "next/navigation";

const useCatId = () => {
  const { cat } = useParams();

  return cat ? Number(cat) : null;
};

export default useCatId;
