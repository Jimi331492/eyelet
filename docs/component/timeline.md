---
category: Components
subtitle: 供应链时间轴
group: 数据展示
title: Timeline
cover: https://canyan.kp-static.com/components/Timeline-example.jpeg
demo: null
---

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需按时间排列时。
- 需要有一条时间轴进行视觉上的串联时。

## 代码演示

```html
<!-- prettier-ignore -->
<code src="../delivery-detail.jsx">基本用法</code>
```

## API

```jsx
export default function example() {
 const item = {
  title: '标题',
  content: ['内容1', '内容2'],
  active: false,
 };
 const data = new Aarry(3).fill(item);

 return <Timeline data={data} />;
}
```

### Timeline

时间轴。

| 参数        | 说明                                                                               | 类型         | 默认值    |
| ----------- | ---------------------------------------------------------------------------------- | ------------ | --------- |
| classname   | 同一般 ReactNode 节点的 classname                                                  | string       | ''        |  |
| data        | 展示的数据                                                                         | array\<item> | null      |
| activeColor | 节点 active 的颜色 (dot 和内容的颜色) `blue`、`red`、`green`、`gray`或自定义的色值 | string       | '#323233' |

### data.item

时间轴的每一个节点。

| 参数    | 说明                                                                           | 类型               | 默认值                |
| ------- | ------------------------------------------------------------------------------ | ------------------ | --------------------- |
| title   | 标题                                                                           | string             | -                     |
| content | 子内容                                                                         | array\<string>     | -                     |
| active  | 节点是否 active 状态                                                           | boolean            | false                 |
| color   | 指定 item 颜色 (dot 和内容的颜色) `blue`、`red`、`green`、`gray`或自定义的色值 | string             | `#c8c9cc`             |
| dotSize | dot 的大小                                                                     | `small` \| `large` | title?'large':'small' |
