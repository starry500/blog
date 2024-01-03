(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{460:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"husky规范代码提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky规范代码提交"}},[s._v("#")]),s._v(" husky规范代码提交")]),s._v(" "),a("ul",[a("li",[s._v("当您提交或推送时，您可以使用它来 lint 提交消息、运行测试、lint 代码等。")]),s._v(" "),a("li",[s._v("Husky 支持所有 Git 钩子。")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"}},[s._v("husky"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"v7-0-0-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v7-0-0-使用"}},[s._v("#")]),s._v(" v7.0.0 使用")]),s._v(" "),a("ol",[a("li",[s._v("暂不讨论其它版本")]),s._v(" "),a("li",[s._v("这个版本和v4不同的区别在于 该版本不需要在 "),a("code",[s._v("package.json")]),s._v(" 中添加")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json 中不需要添加下面代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在commit之前先执行npm run test命令")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commitlint -e $HUSKY_GIT_PARAMS"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 校验commit时添加的备注信息是否符合我们要求的规范")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("npm install husky@7.0.0 -D")])]),s._v(" "),a("li",[a("code",[s._v("npx husky-init")]),s._v("，运行之后会新增一个 "),a("code",[s._v(".husky")]),s._v(" 目录，同时在 "),a("code",[s._v("package.json")]),s._v(" 中的 "),a("code",[s._v("script")]),s._v(" 对象中新增一条 "),a("code",[s._v('"prepare": "husky install"')]),s._v("的命令")]),s._v(" "),a("li",[a("code",[s._v("npm install")])])]),s._v(" "),a("h3",{attrs:{id:"添加-git-钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-git-钩子"}},[s._v("#")]),s._v(" 添加 "),a("code",[s._v("git")]),s._v(" 钩子")]),s._v(" "),a("h4",{attrs:{id:"pre-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-commit"}},[s._v("#")]),s._v(" "),a("code",[s._v("pre-commit")])]),s._v(" "),a("p",[s._v("项目要使用 git 进行代码提交时")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("npx husky add .husky/pre-commit 'npm run test'")])]),s._v(" "),a("li",[s._v("其实不推荐这种新增的写法，正确写法应该分两步进行，如下：")]),s._v(" "),a("li",[a("code",[s._v("npx husky add .husky/pre-commit")]),s._v("，"),a("code",[s._v(".husky")]),s._v(" 目录中新增一个 "),a("code",[s._v("pre-commit")]),s._v(" 文件")]),s._v(" "),a("li",[s._v("修改 "),a("code",[s._v("pre-commit")]),s._v(" 文件的内容")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# pre-commit 文件\n\n#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpm run lint:fix # 修改这里，上面的内容一般不需要动\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"commit-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-msg"}},[s._v("#")]),s._v(" "),a("code",[s._v("commit-msg")])]),s._v(" "),a("p",[s._v("验证提交信息是否符合规范")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("npx husky add .husky/commit-msg 'npx --no-install commitlint --edit \"$1\"'")]),s._v("，经测试，这样会报错；这时应该分两步来完成")]),s._v(" "),a("li",[a("code",[s._v("npx husky add .husky/commit-msg")]),s._v("，在 "),a("code",[s._v(".husky")]),s._v(" 目录下新建一个 "),a("code",[s._v("commit-msg")]),s._v(" 文件")]),s._v(" "),a("li",[s._v("打开 "),a("code",[s._v(".husky/commit-msg")]),s._v(" 文件修改其内容")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# commig-msg 文件\n\n#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit $1 # 你要修改的信息\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("安装commitlint："),a("code",[s._v("npm install @commitlint/cli @commitlint/config-conventional -D")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[s._v("commitlint官网"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[s._v("根目录新增 "),a("code",[s._v("commitlint.config.js")]),s._v(" 文件，内容如下：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// commitlint.config.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@commitlint/config-conventional'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("至此就配置好了")])])}),[],!1,null,null,null);t.default=e.exports}}]);