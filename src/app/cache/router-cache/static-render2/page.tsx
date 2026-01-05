import Link from "next/link";
export default async function Page() {
  console.log("rouer cache static render2=====");
  return (
    <main className="md">
      <h1 className="text-lg font-bold">
        Next 14 客户端路由缓存功能(Router Cache)
      </h1>
      <p>
        本篇文章演示了Next.js
        14的客户端路由缓存功能。这个页面是静态渲染的页面，会在客户端缓存5分钟
      </p>
      <div>
        服务器渲染的时间：{new Date().toLocaleString()}{" "}
        <span className="text-red-500">每次请求，这个渲染时间都会重新生成</span>
      </div>
    </main>
  );
}
