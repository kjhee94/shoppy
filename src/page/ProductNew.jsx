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
    <section className="w-full px-4">
      <h2 className="text-xl my-4">+ Add New Product</h2>
      <div className="flex">
        {!file && (
          <div className="w-80 bg-gray-300 text-center">
            이미지를 선택해 주세요
          </div>
        )}
        {file && (
          <img
            className="w-80"
            src={URL.createObjectURL(file)}
            alt="local_file"
          />
        )}
        <form id="AddNewProductForm" className="flex flex-col ml-4" onSubmit={handleSubmit}>
          <input
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
            autocomplete="off"
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
            autocomplete="off"
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={product.description ?? ""}
            placeholder="제품 설명"
            required
            autocomplete="off"
            onChange={handleChange}
          />
          <input
            className="mb-2"
            type="text"
            name="options"
            value={product.options ?? ""}
            placeholder="옵션들_콤마(,)로 구분"
            required
            autocomplete="off"
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
