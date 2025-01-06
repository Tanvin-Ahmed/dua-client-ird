"use client";
import { FC, HTMLAttributes } from "react";
import SubCategoryButton from "./SubCategoryButton";
import DuaTimeline from "./DuaTimeline";
import { SubcategoryType } from "@/types";

interface SubCategoryTimelineProps extends HTMLAttributes<HTMLDivElement> {
  catId: number;
  subCatId: number;
  data: SubcategoryType[];
}

const SubCategoryTimeline: FC<SubCategoryTimelineProps> = ({
  catId,
  subCatId,
  data,
  ...props
}) => {
  return data && data.length
    ? data.map((subCat) => (
        <section key={crypto.randomUUID()} className="bg-white mt-2">
          <div className="ml-4 w-full">
            <div className="relative col-span-12 px-4 space-y-6">
              <div className="relative px-4 col-span-8 space-y-4 before:absolute before:top-0 before:bottom-0 before:w-0.5 before:-left-3 before:border-l-2 before:border-dotted before:border-green-500">
                <div
                  {...props}
                  className="flex flex-col relative before:absolute before:top-2 before:w-2 before:h-2 before:rounded-full before:left-[-31px] before:z-[1] before:bg-green-600"
                >
                  <SubCategoryButton data={subCat} />
                  {subCatId === subCat.subcat_id && catId === subCat.cat_id ? (
                    <DuaTimeline
                      dua_names={subCat.dua_names.filter(
                        (dua) => dua.dua_name_en
                      )}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))
    : null;
};

export default SubCategoryTimeline;
