import { getProductList } from "./action";
import List from "./components/List";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const productList = await getProductList();
  return (
    <main className="md">
      <h1 className="text-lg font-bold">
        Next 14 客户端路由缓存功能(Router Cache)
      </h1>
      <p>
        本篇文章演示了Next.js
        14的客户端路由缓存功能。Next14中，页面默认会在客户端缓存。动态渲染的页面，缓存30秒。静态渲染的页面缓存5分钟。本页面是
        <span className="text-red-500">动态渲染</span>
        的，因此会在客户端缓存30秒。可以点击Add按钮跳去添加商品页面，添加商品后，返回本页面，会发现30秒内，商品列表没有更新。
        注意观察服务器渲染时间和客户端useEffect执行时间。
      </p>
      <div>
        服务器渲染的时间：{new Date().toLocaleString()}{" "}
        <span className="text-red-500">每次请求，这个渲染时间都会重新生成</span>
      </div>
      <div>locale: {locale}</div>
      <div className="my-4">
        <Link
          className="text-blue-500"
          href="/cache/router-cache/en/products/add"
        >
          Add
        </Link>
      </div>
      <List
        defaultList={productList}
        renderTime={new Date().toLocaleString()}
      />
    </main>
  );
}
