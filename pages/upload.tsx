import { ChangeEvent, useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string); // Asserting the result to be a string
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded Image" />}
    </div>
  );
};

export default UploadImage;
