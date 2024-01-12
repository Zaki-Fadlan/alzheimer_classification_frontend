import React, { useState } from "react";
import { Button, CardBody, CardFooter } from "@nextui-org/react";
const FooterCard = ({ mriimage }) => {
  const [result, setResult] = useState(false);
  const handleAnalyze = () => {
    // if (selectedImage) {
    //   const img = new Image();

    //   img.src = selectedImage;

    //   img.onload = () => {
    //     const canvas = document.createElement("canvas");
    //     const ctx = canvas.getContext("2d");

    //     canvas.width = 128;
    //     canvas.height = 128;

    //     ctx.drawImage(
    //       img,
    //       0,
    //       0,
    //       img.width,
    //       img.height,
    //       0,
    //       0,
    //       canvas.width,
    //       canvas.height
    //     );
    //     canvas.toBlob((blob) => {
    //       const formData = new FormData();
    //       formData.append("img", blob, "image.jpg");

    //       fetch(backendUrl, {
    //         method: "POST",
    //         body: formData,
    //       })
    //         .then((response) => {
    //           // Lakukan sesuatu dengan respons
    //           console.log(response);
    //         })
    //         .catch((error) => {
    //           // Tangani kesalahan
    //           console.error("Error:", error);
    //         });
    //     }, "image/jpeg");
    //   };
    // }

    fetch("http://127.0.0.1:5000")
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <CardFooter className="flex-col text-small justify-center items-center">
      {result ? (
        <CardBody className="bg-red-600 shadow-md rounded p-2 flex justify-center items-center">
          <b className="text-white">{result.data}</b>
        </CardBody>
      ) : (
        <CardBody className="bg-red-600 shadow-md rounded p-2 flex justify-center items-center">
          <b className="text-white">Hasil belum ada</b>
        </CardBody>
      )}
      <Button onClick={handleAnalyze} className="mt-2" color="primary">
        Classify
      </Button>
    </CardFooter>
  );
};

export default FooterCard;
