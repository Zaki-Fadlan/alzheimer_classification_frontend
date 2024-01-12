"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { useState } from "react";
import { Card } from "@nextui-org/react";
import HeaderCard from "./components/HeaderCard";
import BodyCard from "./components/BodyCard";
import FooterCard from "./components/FooterCard";

export default function Home() {
  const [dataImage, setDataImage] = useState("");
  const sendImgToFooter = (data) => {
    setDataImage(data);
  };
  return (
    <NextUIProvider className="bg-blue-950">
      <main className="flex light min-h-screen flex-col items-center justify-between p-24">
        <Card shadow="sm">
          <HeaderCard />
          <BodyCard sendImgToFooter={sendImgToFooter} />
          <FooterCard mriimage={dataImage} />
        </Card>
      </main>
    </NextUIProvider>
  );
}
