"use server";
import { IProductItem } from "@/types/product";
export async function clearProductList() {
  const result = await fetch(
    "https://next16-app.vercel.app/api/product/clear",
    {
      method: "POST",
      cache: "no-store",
    }
  );
  const res = await result.json();

  return res;
}
export async function getProductList() {
  const result = await fetch("https://next16-app.vercel.app/api/product/list", {
    method: "POST",
    cache: "no-store",
  });
  const res: { data: IProductItem[] } = await result.json();

  return res.data;
}
