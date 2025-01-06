"use client";

import { appContext } from "@/components/context/AppContext";
import useSubCatId from "@/hooks/useSubCatId";
import { SubcategoryType } from "@/types";
import { cn } from "@/utils";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";

interface SubCategoryButton {
  data: SubcategoryType;
}
const SubCategoryButton: FC<SubCategoryButton> = ({ data }) => {
  const router = useRouter();
  const subCatId = useSubCatId();

  const { sectionRefs } = useContext(appContext);

  const scrollToSection = (id: number): void => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <p
      className={cn(
        "text-sm tracking-wide cursor-pointer outline-none text-left",
        {
          "text-green-600": subCatId && subCatId === data.subcat_id,
        }
      )}
      onClick={(e) => {
        e.stopPropagation();
        router.push(`/duas/${data.cat_id}/${data.subcat_id}`);
        scrollToSection(data.subcat_id);
      }}
    >
      {data.subcat_name_en}
    </p>
  );
};

export default SubCategoryButton;
