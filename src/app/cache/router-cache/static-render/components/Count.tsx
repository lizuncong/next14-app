"use client";

import { useEffect, useState } from "react";

interface Props {
  renderTime: string;
}
export default function Count(props: Props) {
  const { renderTime } = props;
  const [innerTime, setInnerTime] = useState("");
  useEffect(() => {
    console.log("product list page useEffect=====");
    setInnerTime(new Date().toLocaleString());
  }, []);
  return (
    <div>
      客户端组件
      <div>服务器渲染的时间：{renderTime}</div>
      <div>客户端useEffect执行的时间：{innerTime}</div>
    </div>
  );
}
