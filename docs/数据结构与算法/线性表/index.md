# 线性表

线性表是数据元素的序列。

除了第一个元素，每个元素有且只有一个前驱；除了最后一个元素，每个元素有且只有一个后继。

## 线性表的抽象数据类型

```
ADT List {
    数据对象：
        D = { ei | ei ∈ ElementSet, i = 1, 2, ..., n, n >= 0 }
    数据关系：
        R = { <ei-1, ei> | ei-1, ei ∈ D, i = 2, 3, ..., n }
    基本操作：
        unshift(element) 向线性表头部添加元素
        push(element) 向线性表尾部添加元素
        insert(position, element) 向线性表指定位置添加元素
        shift() 删除线性表头部的元素
        pop() 删除线性表尾部的元素
        removeAt(position) 删除线性表中指定位置的元素
        remove(element) 删除线性表中指定元素
        getFirst() 获取线性表头部的元素
        getLast() 获取线性表尾部的元素
        getElementAt(position) 获取线性表中指定位置的元素
        indexOf(element) 获取线性表中指定元素的位置
        clear() 清空线性表
        isEmpty() 判断线性表是否为空
        size() 获取线性表中元素的个数
        print() 打印线性表中的元素
}
```
