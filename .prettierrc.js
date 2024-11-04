module.exports = {
    // 箭头函数只有一个参数的时候可以省略括号
    arrowParens: "avoid",
    // 括号内不会出现空格
    bracketSpacing: true,
    printWith: 100, // 折行字数
    tabWidth: 2, // 缩进空格行
    useTabs: false, // 缩进不使用tab, 使用空格
    semi: true, // 加分号
    singleQuote: true, // 使用单引号替代双引号
    quoteProps: 'as-needed', // 对象的key是否用引号括起来, 需要时添加
    jsxSingleQuote: true, // 在jsx中使用单引号替换双引号
}