---
category: Components
subtitle: 基础弹窗
group: 数据展示
title: BasicDialog
cover: null
demo: null
---
## 何时使用

需要用户处理事务，或者不希望跳转页面以致打断工作流程时，可以使用 `BasicDialog` 在当前页面使用一个对话框，承载相应的操作。

## 代码演示

```html
<!-- bottom -->
<code src="./src/pages-extend/employment/apply.jsx">直聘上传简历展示</code>
<code src="./src/pages-supply/supplier/my-appraise.js"ß
 >我的评价显示删除操作</code
>
<!-- center -->
<code src="./src/pages-supply/mall/all-order.js">完成订单</code>
```

## API

```jsx
export default function example() {
 const [showDialog, setShowDialog] = useState(false);

 return (
  <>
   <Button onClick={() => setShowDialog(true)}>打开弹窗</Button>
   <BasicDialog
    mode="center"
    className="example-dailog"
    visible={showDialog}
    onClose={() => {
     setShowDialog(false);
    }}
   >
    弹窗内容
    <Button onClick={() => setShowDialog(false)}>完成</Button>
   </BasicDialog>
  </>
 );
}
```

### BasicDialog

| 参数         | 说明                                                                           | 类型                 | 默认值   |
| ------------ | ------------------------------------------------------------------------------ | -------------------- | -------- |
| mode         | 弹窗位置                                                                       | `center` \| `bottom` | 'center' |
| classname    | 同一般 ReactNode 节点的 classname (挂在弹窗的 body-content 上)                 | string               | ''       |
| visible      | 控制弹窗的显示与隐藏                                                           | boolean              | false    |
| mask         | 是否隐藏遮罩                                                                | boolean              | true     |
| maskClosable | 点击其他区域是否能关闭                                                         | boolean              | false    |
| closable     | 是否展示关闭按钮                                                               | boolean              | true     |
| noPadding    | 取消弹窗(body-content)默认的 padding 除了靠屏幕的一边(可以通过 classname 设置) | boolean              | false    |
| children     | 弹窗展示内容                                                                   | ReactNode            | -        |
| onClose      | 关闭回调(在关闭回调中设置 setShowDialog(false)确保下一次还能打开弹窗 )         | function(e)          | -        |
