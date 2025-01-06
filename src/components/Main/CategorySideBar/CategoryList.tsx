"use client";
import { FC } from "react";
import CategoryCard from "./CategoryCard";
import SubCategoryTimeline from "./SubCategoryTimeline";
import { CategoryType } from "@/types";
import { useRouter } from "next/navigation";
import useCatId from "@/hooks/useCatId";
import useSubCatId from "@/hooks/useSubCatId";

interface ListPropType {
  data: CategoryType;
}

const CategoryList: FC<ListPropType> = ({ data }) => {
  const router = useRouter();
  const catId = useCatId();
  const subCatId = useSubCatId();

  return (
    <div className="w-full">
      <CategoryCard
        data={data}
        onClick={() =>
          router.push(`/${data.cat_id}/${data.sub_cats[0].subcat_id}`)
        }
        clicked={data.cat_id === catId}
      />

      {catId && catId === data.cat_id ? (
        <>
          <SubCategoryTimeline catId={catId} subCatId={subCatId!} />
        </>
      ) : null}
    </div>
  );
};

export default CategoryList;
