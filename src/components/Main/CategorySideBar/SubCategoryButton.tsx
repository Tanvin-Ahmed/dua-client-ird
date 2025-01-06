"use client";

import { appContext } from "@/components/context/AppContext";
import useSubCatId from "@/hooks/useSubCatId";
import { SubcategoryType } from "@/types";
import { cn } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { FC, useCallback, useContext } from "react";

interface SubCategoryButton {
  data: SubcategoryType;
}
const SubCategoryButton: FC<SubCategoryButton> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const subCatId = useSubCatId();

  const { sectionRefs } = useContext(appContext);

  const scrollToSection = (id: number): void => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const setQueryStringInUrl = useCallback(
    (catId: number, subCatId: number) => {
      const queryString = `cat=${catId}&subcat=${subCatId}`;
      router.push(pathname.replace(/\/$/, "") + "?" + queryString);
    },
    [router, pathname]
  );

  return (
    <p
      className={cn(
        "text-sm tracking-wide cursor-pointer outline-none text-left",
        {
          "text-green-600": subCatId && subCatId === data.subcat_id,
        }
      )}
      onClick={() => {
        setQueryStringInUrl(data.cat_id, data.subcat_id);
        scrollToSection(data.subcat_id);
      }}
    >
      {data.subcat_name_en}
    </p>
  );
};

export default SubCategoryButton;
