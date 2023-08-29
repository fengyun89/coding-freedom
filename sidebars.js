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
    {
      type: 'category',
      label: '关键字',
      items: [
        'C/关键字/index',
        'C/关键字/typedef',
      ],
    },
    {
      type: 'category',
      label: '预处理指令',
      items: [
        'C/预处理指令/index',
        'C/预处理指令/include',
        'C/预处理指令/define',
      ],
    },
    {
      type: 'category',
      label: '数据类型',
      items: [
        'C/数据类型/index',
      ],
    },
    {
      type: 'category',
      label: '标准库',
      items: [
        'C/标准库/index',
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
