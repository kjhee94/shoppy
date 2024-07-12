import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";
import { useNavigate } from "react-router-dom";

export default function ProductNew() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addNewProduct(product, url) //
          .then(() => {
            alert("제품이 추가되었습니다.");
            navigate("/products");
          });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full px-4 text-center">
      <div className="flex flex-col md:flex-row">
        {!file && (
          <div className="w-80 h-[440px] bg-gray-300 flex items-center justify-center shrink-0">
            <p>No Image</p>
          </div>
        )}
        {file && (
          <img
            className="w-80 h-[440px] object-cover shrink-0"
            src={URL.createObjectURL(file)}
            alt="local_file"
          />
        )}
        <form className="flex flex-col w-full my-4 md:ml-4 md:mt-0" onSubmit={handleSubmit}>
          <input
            className="mt-0"
            type="file"
            accept="image/*"
            name="file"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            value={product.title ?? ""}
            placeholder="제품명"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={product.price ?? ""}
            placeholder="가격"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={product.category ?? ""}
            placeholder="카테고리"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={product.description ?? ""}
            placeholder="제품 설명"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            className="mb-2"
            type="text"
            name="options"
            value={product.options ?? ""}
            placeholder="옵션 ( , 로 구분)"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <Button
            text={isUploading ? "업로드 중" : "제품 등록하기"}
            disabled={isUploading}
          />
        </form>
      </div>
    </section>
  );
}
