<tu-button
@click="open">
可自动关闭
</tu-button>
<script>
export default {
    methods: {
      open() {
        this.$notify({
          color: 'dark',
          title: '提示',
          content: '这是一条会自动关闭的消息',
          position: 'top-center'
        });
         this.$notify({
          color: 'primary',
          title: '提示',
          content: '这是一条会自动关闭的消息',
          position: 'top-left',
          icon:'ban'
        });

      },
    }
  };
</script>



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color | 颜色 | string | white / light / dark / black / text / primary / link / info / success / warning / danger |     -     |
| title   | 标题 | string |   -   |     -     |
| content   | 内容 | string |   -   |     -     |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 4500 |
| icon   | 图标 | string |  -  |     -     |
| position | 自定义弹出位置 | string | top-right/top-left/bottom-right/bottom-left | top-right |
| closable | 是否可关闭  | Boolean |  -   |   true   |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| onClose | 关闭时的回调函数 | function | — | — |
| showClose | 是否显示关闭按钮 | boolean | — | true |
| offset | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number | — | 0 |


### Slot

| Name | Description |
|------|--------|
| icon | 标题的内容 |
