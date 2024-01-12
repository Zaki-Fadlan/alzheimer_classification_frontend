import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
const BodyCard = ({ sendImgToFooter }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const dataToSend = "monyet";
  sendImgToFooter(dataToSend);

  return (
    <CardBody className="light overflow-visible p-0 flex justify-center items-center">
      <Card shadow="md" isPressable>
        <CardBody className="overflow-visible p-0 flex justify-center items-center ">
          <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
            <div className="h-full w-full text-center flex flex-col justify-center items-center">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="h-40 mx-auto mb-2"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[280px] w-[280px] text-blue-400 group-hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              )}
              <p className="pointer-none text-gray-500 ">
                {selectedImage
                  ? ""
                  : "Select a MRI Image file from your computer"}
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              // accept=".jpg"
              onChange={handleFileChange}
            />
          </label>
        </CardBody>
      </Card>
    </CardBody>
  );
};

export default BodyCard;
