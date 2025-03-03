import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function ProductNew() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const { addProduct } = useProducts();
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
        addProduct.mutate({ product, url }, {
          onSuccess: () => {
            alert("제품이 추가되었습니다.");
            navigate("/products");
        }})
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full p-4 flex flex-col sm:flex-row items-center">
      <div className="w-full min-h-10 sm:w-80 sm:h-[440px] bg-gray-300 flex items-center justify-center shrink-0">
        {!file && <p>No Image</p>}
        {file && (
          <img
            className="w-full h-full object-cover"
            src={URL.createObjectURL(file)}
            alt="local_file"
          />
        )}
      </div>
      <form
        className="flex flex-col w-full mt-4 sm:ml-4 sm:mt-0"
        onSubmit={handleSubmit}
      >
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
    </section>
  );
}
