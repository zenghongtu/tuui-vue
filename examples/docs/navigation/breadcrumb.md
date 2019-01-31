
<tu-breadcrumb separator="arrow">
    <tu-breadcrumb-item :to="{}">hello</tu-breadcrumb-item>
    <tu-breadcrumb-item>hello1</tu-breadcrumb-item>
    <tu-breadcrumb-item>hello2</tu-breadcrumb-item>
</tu-breadcrumb>

### Breadcrumb Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| align  | 位置 | string | centered / right  |    -     |
| size  | 尺寸 | string | small / medium / large |    -     |
| separator  | 分隔符 | string | arrow / bullet / dot / succeeds  |    -     |

### Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
