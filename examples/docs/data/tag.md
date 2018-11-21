<tu-tag>
  Tag label
</tu-tag>

<br>
<tu-tag size="large" :closable="true">
  Tag label
</tu-tag>
<br>
<tu-tag size="large" :round="true">
  Tag label
</tu-tag>
<br>
<tu-tag  :closable="true" delete-btn-size="small">
  Tag label
</tu-tag>
<br>
<tu-tag-list >
<tu-tag :closable="true" delete-btn-size="small" >
  Tag label
</tu-tag>
<tu-tag :closable="true" delete-btn-size="small" >
  Tag label
</tu-tag>
<tu-tag :closable="true" delete-btn-size="small" >
  Tag label
</tu-tag>
<tu-tag :closable="true" delete-btn-size="small" >
  Tag label
</tu-tag>

</tu-tag-list>
<br>
<tu-tag-list :addon="true" >
<tu-tag  >
  Tag label
</tu-tag>
<tu-tag  color="dark">
  Tag label
</tu-tag>
</tu-tag-list>

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 颜色 | string | white / light / dark / black / text / primary / link / info / success / warning / danger |     -     |
| size  | 尺寸 | string |   medium / large | normal |
| delete-btn-size  | 尺寸 | string |   medium / large | normal |
| closable | 是否可关闭 | boolean | — | false |
| round | 是否圆角按钮   | boolean |-| false |
| addon | 是否扩展(group/list) | boolean |-| false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭 Tag 时触发的事件 | — |
