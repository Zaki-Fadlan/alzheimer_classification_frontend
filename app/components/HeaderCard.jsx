import React from "react";
import { CardHeader, Divider } from "@nextui-org/react";

const HeaderCard = () => {
  return (
    <>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <h1 className="text-lg text-default-500">
            <b className="text-black">
              Alzheimer Disease Classification using Mobilenet V3
            </b>
          </h1>
        </div>
      </CardHeader>
      <Divider className="mb-2" />
    </>
  );
};

export default HeaderCard;
