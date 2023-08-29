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
  开始: [
    'start',
  ],
  数学: [
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
  计算机系统: [
    {
      type: 'category',
      label: '布尔逻辑',
      items: [
        '计算机系统/布尔逻辑/index',
      ],
    },
    {
      type: 'category',
      label: '数字电路',
      items: [
        '计算机系统/数字电路/index',
      ],
    },
    {
      type: 'category',
      label: '计算机体系结构',
      items: [
        '计算机系统/计算机体系结构/index',
      ],
    },
    {
      type: 'category',
      label: '计算机组成',
      items: [
        '计算机系统/计算机组成/index',
      ],
    },
    {
      type: 'category',
      label: '操作系统',
      items: [
        '计算机系统/操作系统/index',
      ],
    },
    {
      type: 'category',
      label: '汇编',
      items: [
        '计算机系统/汇编/index',
      ],
    },
    {
      type: 'category',
      label: '计算机网络',
      items: [
        '计算机系统/计算机网络/index',
      ],
    },
  ],
  C: [
    'C/index',
    {
      type: 'category',
      label: '程序结构',
      link: {
        type: 'doc',
        id: 'C/程序结构/index',
      },
      items: [
        'C/程序结构/程序入口',
      ],
    },
    {
      type: 'category',
      label: '词法元素',
      link: {
        type: 'doc',
        id: 'C/词法元素/index',
      },
      items: [
        {
          type: 'category',
          label: '关键字',
          link: {
            type: 'doc',
            id: 'C/词法元素/关键字/index',
          },
          items: [
            'C/词法元素/关键字/typedef',
          ],
        },
        {
          type: 'category',
          label: '标识符',
          link: {
            type: 'doc',
            id: 'C/词法元素/标识符/index',
          },
          items: [
          ],
        },
        {
          type: 'category',
          label: '通用字符名',
          link: {
            type: 'doc',
            id: 'C/词法元素/通用字符名/index',
          },
          items: [
          ],
        },
        {
          type: 'category',
          label: '常量',
          link: {
            type: 'doc',
            id: 'C/词法元素/常量/index',
          },
          items: [
          ],
        },
        {
          type: 'category',
          label: '字符串字面量',
          link: {
            type: 'doc',
            id: 'C/词法元素/字符串字面量/index',
          },
          items: [
          ],
        },
        {
          type: 'category',
          label: '标点符号',
          link: {
            type: 'doc',
            id: 'C/词法元素/标点符号/index',
          },
          items: [
          ],
        },
        {
          type: 'category',
          label: 'Header names',
          link: {
            type: 'doc',
            id: 'C/词法元素/Header names/index',
          },
          items: [
          ],
        },
        {
          type: 'category',
          label: '预处理数字',
          link: {
            type: 'doc',
            id: 'C/词法元素/预处理数字/index',
          },
          items: [
          ],
        },
        'C/词法元素/注释',
      ],
    },
    {
      type: 'category',
      label: '预处理指令',
      link: {
        type: 'doc',
        id: 'C/预处理指令/index',
      },
      items: [
        'C/预处理指令/include',
        'C/预处理指令/define',
      ],
    },
    {
      type: 'category',
      label: '数据类型',
      link: {
        type: 'doc',
        id: 'C/数据类型/index',
      },
      items: [
        'C/数据类型/void',
        {
          type: 'category',
          label: '算术类型',
          link: {
            type: 'doc',
            id: 'C/数据类型/算术类型/index',
          },
          items: [
            'C/数据类型/算术类型/布尔类型',
            'C/数据类型/算术类型/字符类型',
            'C/数据类型/算术类型/整型',
            'C/数据类型/算术类型/浮点型',
          ],
        },
        'C/数据类型/枚举类型',
        {
          type: 'category',
          label: '派生类型',
          link: {
            type: 'doc',
            id: 'C/数据类型/派生类型/index',
          },
          items: [
            'C/数据类型/派生类型/数组类型',
            'C/数据类型/派生类型/结构体类型',
            'C/数据类型/派生类型/联合体类型',
            'C/数据类型/派生类型/函数类型',
            'C/数据类型/派生类型/指针类型',
            'C/数据类型/派生类型/原子类型',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '表达式',
      link: {
        type: 'doc',
        id: 'C/表达式/index',
      },
      items: [
        'C/表达式/位移运算符',
        'C/表达式/关系运算符',
        'C/表达式/基本表达式',
        'C/表达式/常量表达式',
        'C/表达式/成员访问运算符',
        'C/表达式/条件运算符',
        'C/表达式/算术运算符',
        'C/表达式/类型转换运算符',
        'C/表达式/赋值运算符',
        'C/表达式/逗号运算符',
        'C/表达式/逻辑运算符',
      ],
    },
    {
      type: 'category',
      label: '声明和定义',
      link: {
        type: 'doc',
        id: 'C/声明和定义/index',
      },
      items: [
      ],
    },
    {
      type: 'category',
      label: '语句',
      link: {
        type: 'doc',
        id: 'C/语句/index',
      },
      items: [
        'C/语句/表达式语句',
        'C/语句/空语句',
        'C/语句/复合语句',
        'C/语句/带标签的语句',
        'C/语句/跳转语句',
        'C/语句/迭代语句',
        'C/语句/选择语句',
      ],
    },
    {
      type: 'category',
      label: '标准库',
      link: {
        type: 'doc',
        id: 'C/标准库/index',
      },
      items: [
      ],
    },
  ],
  'C++': [
    'C++/index',
  ],
  数据结构与算法: [
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
  编译原理: [
    '编译原理/index',
  ],
};

module.exports = sidebars;
