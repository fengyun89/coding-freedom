/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  零: [
    'start',
  ],
  一: [
    {
      type: 'category',
      label: '逻辑学',
      items: [
        '逻辑学/index',
        {
          type: 'category',
          label: '形式逻辑',
          items: [
            '逻辑学/形式逻辑/index',
          ],
        },
        {
          type: 'category',
          label: '辩证逻辑',
          items: [
            '逻辑学/辩证逻辑/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '数学',
      items: [
        {
          type: 'category',
          label: '线性代数',
          items: [
            '数学/线性代数/index',
          ],
        },
        {
          type: 'category',
          label: '概率论',
          items: [
            '数学/概率论/index',
          ],
        },
        {
          type: 'category',
          label: '离散数学',
          items: [
            {
              type: 'category',
              label: '集合论',
              items: [
                '数学/离散数学/集合论/index',
              ],
            },
            {
              type: 'category',
              label: '图论',
              items: [
                '数学/离散数学/图论/index',
              ],
            },
            {
              type: 'category',
              label: '排列组合',
              items: [
                '数学/离散数学/排列组合/index',
              ],
            },
            {
              type: 'category',
              label: '数理逻辑',
              items: [
                '数学/离散数学/数理逻辑/index',
              ],
            },
          ],
        },
      ],
    },
  ],
  二: [
    {
      type: 'category',
      label: '数字电路',
      items: [
        '数字电路/index',
      ],
    },
    {
      type: 'category',
      label: '计算机体系结构',
      items: [
        '计算机体系结构/index',
      ],
    },
    {
      type: 'category',
      label: '计算机组成',
      items: [
        '计算机组成/index',
      ],
    },
    {
      type: 'category',
      label: '计算机网络',
      items: [
        '计算机网络/index',
      ],
    },
    {
      type: 'category',
      label: '操作系统',
      items: [
        '操作系统/index',
      ],
    },
    {
      type: 'category',
      label: 'C语言',
      items: [
        'c/程序结构',
        {
          type: 'category',
          label: '词法元素',
          items: [
            'c/词法元素/关键字',
            'c/词法元素/标识符',
            'c/词法元素/通用字符名',
            'c/词法元素/常量',
            'c/词法元素/字符串字面量',
            'c/词法元素/标点符号',
            'c/词法元素/头文件',
            'c/词法元素/预处理数字',
            'c/词法元素/注释',
          ],
        },
        {
          type: 'category',
          label: '值和类型',
          items: [
            'c/值和类型/index',
          ],
        },
        {
          type: 'category',
          label: '声明和定义',
          items: [
            'c/声明和定义/存储类别说明符',
            'c/声明和定义/类型说明符',
            'c/声明和定义/类型限定符',
            'c/声明和定义/函数说明符',
            'c/声明和定义/对齐说明符',
            'c/声明和定义/声明符',
            'c/声明和定义/类型名称',
            'c/声明和定义/类型定义',
            'c/声明和定义/类型推断',
            'c/声明和定义/初始化',
            'c/声明和定义/静态断言',
            'c/声明和定义/属性',
            {
              type: 'category',
              label: '外部定义',
              items: [
                'c/声明和定义/外部定义/函数定义',
                'c/声明和定义/外部定义/外部对象定义',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '表达式',
          items: [
            'c/表达式/基本表达式',
            'c/表达式/算术运算符',
            'c/表达式/逻辑运算符',
            'c/表达式/按位运算符',
            'c/表达式/位移运算符',
            'c/表达式/赋值运算符',
            'c/表达式/关系运算符',
            'c/表达式/条件运算符',
            'c/表达式/逗号运算符',
            'c/表达式/类型转换运算符',
            'c/表达式/成员访问运算符',
            'c/表达式/常量表达式',
          ],
        },
        {
          type: 'category',
          label: '语句',
          items: [
            'c/语句/带标签的语句',
            'c/语句/复合语句',
            'c/语句/表达式语句和空语句',
            'c/语句/选择语句',
            'c/语句/迭代语句',
            'c/语句/跳转语句',
          ],
        },
        {
          type: 'category',
          label: '预处理指令',
          items: [
            'c/预处理指令/条件包含',
            'c/预处理指令/源文件包含',
            'c/预处理指令/二进制资源包含',
            'c/预处理指令/宏替换',
            'c/预处理指令/行控制',
            'c/预处理指令/诊断指令',
            'c/预处理指令/Pragma指令',
            'c/预处理指令/空指令',
            'c/预处理指令/预定义宏',
            'c/预处理指令/Pragma运算符',
          ],
        },
        {
          type: 'category',
          label: '标准库',
          items: [
            'c/标准库/<assert.h>',
            'c/标准库/<complex.h>',
            'c/标准库/<ctype.h>',
            'c/标准库/<errno.h>',
            'c/标准库/<fenv.h>',
            'c/标准库/<float.h>',
            'c/标准库/<inttypes.h>',
            'c/标准库/<iso646.h>',
            'c/标准库/<limits.h>',
            'c/标准库/<locale.h>',
            'c/标准库/<math.h>',
            'c/标准库/<setjmp.h>',
            'c/标准库/<signal.h>',
            'c/标准库/<stdalign.h>',
            'c/标准库/<stdarg.h>',
            'c/标准库/<stdatomic.h>',
            'c/标准库/<stdbit.h>',
            'c/标准库/<stdbool.h>',
            'c/标准库/<stdckdint.h>',
            'c/标准库/<stddef.h>',
            'c/标准库/<stdint.h>',
            'c/标准库/<stdio.h>',
            'c/标准库/<stdlib.h>',
            'c/标准库/<stdnoreturn.h>',
            'c/标准库/<string.h>',
            'c/标准库/<tgmath.h>',
            'c/标准库/<threads.h>',
            'c/标准库/<time.h>',
            'c/标准库/<uchar.h>',
            'c/标准库/<wchar.h>',
            'c/标准库/<wctype.h>',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '数据结构与算法',
      items: [
        '数据结构与算法/什么是数据结构',
        '数据结构与算法/什么是算法',
        '数据结构与算法/如何衡量算法的优劣',
        {
          type: 'category',
          label: '线性表',
          link: {
            type: 'doc',
            id: '数据结构与算法/线性表/index',
          },
          items: [
            '数据结构与算法/线性表/顺序表',
            '数据结构与算法/线性表/链表',
            '数据结构与算法/线性表/双向链表',
            '数据结构与算法/线性表/循环链表',
          ],
        },
        {
          type: 'category',
          label: '栈',
          link: {
            type: 'doc',
            id: '数据结构与算法/栈/index',
          },
          items: [
            '数据结构与算法/栈/顺序栈',
            '数据结构与算法/栈/链栈',
            '数据结构与算法/栈/栈的应用',
          ],
        },
        {
          type: 'category',
          label: '队列',
          link: {
            type: 'doc',
            id: '数据结构与算法/队列/index',
          },
          items: [
            '数据结构与算法/队列/顺序队列',
            '数据结构与算法/队列/链队列',
            '数据结构与算法/队列/双端队列',
            '数据结构与算法/队列/队列的应用',
          ],
        },
        '数据结构与算法/串',
        '数据结构与算法/集合',
        '数据结构与算法/字典',
        '数据结构与算法/哈希表',
        '数据结构与算法/树',
        '数据结构与算法/图',
        '数据结构与算法/查找',
        '数据结构与算法/排序',
      ],
    },
    {
      type: 'category',
      label: '编译原理',
      items: [
        '编译原理/index',
      ],
    },
    {
      type: 'category',
      label: '数据库',
      items: [
        '数据库/index',
      ],
    },
  ],
  三: [
    {
      type: 'category',
      label: '编程语言',
      items: [
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            '编程语言/javascript/index',
          ],
        },
        {
          type: 'category',
          label: 'TypeScript',
          items: [
            '编程语言/typescript/index',
          ],
        },
        {
          type: 'category',
          label: 'Python',
          items: [
            '编程语言/python/index',
          ],
        },
        {
          type: 'category',
          label: 'Java',
          items: [
            '编程语言/java/index',
          ],
        },
        {
          type: 'category',
          label: 'Kotlin',
          items: [
            '编程语言/kotlin/index',
          ],
        },
        {
          type: 'category',
          label: 'C#',
          items: [
            '编程语言/csharp/index',
          ],
        },
        {
          type: 'category',
          label: 'Go',
          items: [
            '编程语言/go/index',
          ],
        },
        {
          type: 'category',
          label: 'Swift',
          items: [
            '编程语言/swift/index',
          ],
        },
        {
          type: 'category',
          label: 'C++',
          items: [
            '编程语言/c++/index',
          ],
        },
        {
          type: 'category',
          label: 'Rust',
          items: [
            '编程语言/rust/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '设计模式',
      items: [
        '设计模式/index',
      ],
    },
    {
      type: 'category',
      label: '软件工程',
      items: [
        '软件工程/index',
      ],
    },
  ],
  四: [
    {
      type: 'category',
      label: '竞品分析',
      items: [
        '产品/竞品分析/index',
      ],
    }
  ]
};

module.exports = sidebars;
