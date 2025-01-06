"use client";
import { appContext } from "@/components/context/AppContext";
import { DuaNameType } from "@/types";
import { cn } from "@/utils";
import Image from "next/image";
import { useContext, useState } from "react";

interface Props {
  dua_names: DuaNameType[];
}

const DuaTimeline = ({ dua_names }: Props) => {
  const { duaCardRef, setCategoryOpen } = useContext(appContext);
  const [selectedDuaId, setSelectedDuaId] = useState(0);

  const scrollToSection = (id: number): void => {
    setSelectedDuaId(id);
    duaCardRef.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return dua_names && dua_names.length
    ? dua_names.map((dua) => (
        <div
          key={crypto.randomUUID()}
          onClick={(e) => {
            e.stopPropagation();
            scrollToSection(dua.dua_id);
            setCategoryOpen(false);
          }}
        >
          <div className="flex justify-start items-center gap-x-3 ml-1 my-2">
            <Image
              src={"/icons/duaarrow.svg"}
              height={12}
              width={12}
              alt="dua"
            />
            <p
              className={cn("text-[12px] cursor-pointer", {
                "text-green-600": dua.dua_id === selectedDuaId,
              })}
            >
              {dua.dua_name_en}
            </p>
          </div>
        </div>
      ))
    : null;
};

export default DuaTimeline;
