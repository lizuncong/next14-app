export default async function Page() {
  console.log("rouer cache static render2=====");
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
      <p>
        如果Nav导航组件中，设置Link的prefetch属性为true，那么缓存时间就是5分钟
      </p>
      <div>
        服务器渲染的时间：{new Date().toLocaleString()}{" "}
        <span className="text-red-500">
          这个时间是构建时生成的，每次请求，都是不变的
        </span>
      </div>
    </main>
  );
}
