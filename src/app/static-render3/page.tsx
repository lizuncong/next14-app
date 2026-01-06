export default async function Page() {
  console.log("app static render3=====");
  return (
    <main className="md">
      <h1 className="text-lg font-bold">
        Next 14 客户端路由缓存功能(Router Cache)
      </h1>
      <p>
        本篇文章演示了Next.js
        14的客户端路由缓存功能。按照next14文档的说法，静态渲染的页面，客户端路由缓存是5分钟。
        这个页面是静态渲染的页面，但实际上超过30秒，缓存就失效了，会重新请求
      </p>
    </main>
  );
}
