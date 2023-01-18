# 规范

## 数据库名

格式：`<项目名>_<环境>`  
例如：`cms_dev` CMS 项目开发环境

## 表名

格式：`<模块名>_<实体名>`  
例如：`sys_user` 系统用户表

## 字段名

> 要求：
> - 减少歧义：命名仅表达一种含义。
> - 统一命名：同样含义的字段，命名保持一致。
> - 慎用缩写：如果使用缩写必须是公认的并且全系统统一的。
> - 慎用复数：字段复数表示为多个，常以JSON数组和分隔字符串来存储，如果需要反向查询，建议另外建表。

- `max_<any>` 最大阈值
- `min_<any>` 最小阈值
- `total_<any>` 总数
- `<any>_count` 计数
- `<any>_date` 时间
- `<any>_<entity>_id` 关联实体id

例如：

- `id` 主键
- `name` 名称
- `description` 描述
- `created_by` 创建人id
- `created_date` 创建时间
- `last_modified_by` 最后修改人id
- `last_modified_date` 最后修改时间
- `active` 是否有效

## 索引名

- `uk_` 唯一索引
- `idx_` 普通索引

