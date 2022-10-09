(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{383:function(s,n,t){"use strict";t.r(n);var a=t(10),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("grep 更适合单纯的查找或匹配文本")]),s._v(" "),n("li",[s._v("sed 更适合编辑匹配到的文本")]),s._v(" "),n("li",[s._v("awk 更适合格式化文本，对文本进行较复杂格式处理")])])]),s._v(" "),n("h2",{attrs:{id:"grep"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[s._v("#")]),s._v(" grep")]),s._v(" "),n("p",[s._v("参数")]),s._v(" "),n("blockquote",[n("ul",[n("li",[n("strong",[s._v("-a 或 --text")]),s._v(" : 不要忽略二进制的数据。")]),s._v(" "),n("li",[n("strong",[s._v("-A<显示行数> 或 --after-context=<显示行数>")]),s._v(" : 除了显示符合范本样式的那一列之外，并显示该行之后的内容。")]),s._v(" "),n("li",[n("strong",[s._v("-b 或 --byte-offset")]),s._v(" : 在显示符合样式的那一行之前，标示出该行第一个字符的编号。")]),s._v(" "),n("li",[n("strong",[s._v("-B<显示行数> 或 --before-context=<显示行数>")]),s._v(" : 除了显示符合样式的那一行之外，并显示该行之前的内容。")]),s._v(" "),n("li",[n("strong",[s._v("-c 或 --count")]),s._v(" : 计算符合样式的列数。")]),s._v(" "),n("li",[n("strong",[s._v("-C<显示行数> 或 --context=<显示行数>或-<显示行数>")]),s._v(" : 除了显示符合样式的那一行之外，并显示该行之前后的内容。")]),s._v(" "),n("li",[n("strong",[s._v("-d <动作> 或 --directories=<动作>")]),s._v(" : 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep指令将回报信息并停止动作。")]),s._v(" "),n("li",[n("strong",[s._v("-e<范本样式> 或 --regexp=<范本样式>")]),s._v(" : 指定字符串做为查找文件内容的样式。")]),s._v(" "),n("li",[n("strong",[s._v("-E 或 --extended-regexp")]),s._v(" : 将样式为延伸的正则表达式来使用。")]),s._v(" "),n("li",[n("strong",[s._v("-f<规则文件> 或 --file=<规则文件>")]),s._v(" : 指定规则文件，其内容含有一个或多个规则样式，让grep查找符合规则条件的文件内容，格式为每行一个规则样式。")]),s._v(" "),n("li",[n("strong",[s._v("-F 或 --fixed-regexp")]),s._v(" : 将样式视为固定字符串的列表。")]),s._v(" "),n("li",[n("strong",[s._v("-G 或 --basic-regexp")]),s._v(" : 将样式视为普通的表示法来使用。")]),s._v(" "),n("li",[n("strong",[s._v("-h 或 --no-filename")]),s._v(" : 在显示符合样式的那一行之前，不标示该行所属的文件名称。")]),s._v(" "),n("li",[n("strong",[s._v("-H 或 --with-filename")]),s._v(" : 在显示符合样式的那一行之前，表示该行所属的文件名称。")]),s._v(" "),n("li",[n("strong",[s._v("-i 或 --ignore-case")]),s._v(" : 忽略字符大小写的差别。")]),s._v(" "),n("li",[n("strong",[s._v("-l 或 --file-with-matches")]),s._v(" : 列出文件内容符合指定的样式的文件名称。")]),s._v(" "),n("li",[n("strong",[s._v("-L 或 --files-without-match")]),s._v(" : 列出文件内容不符合指定的样式的文件名称。")]),s._v(" "),n("li",[n("strong",[s._v("-n 或 --line-number")]),s._v(" : 在显示符合样式的那一行之前，标示出该行的列数编号。")]),s._v(" "),n("li",[n("strong",[s._v("-o 或 --only-matching")]),s._v(" : 只显示匹配PATTERN 部分。")]),s._v(" "),n("li",[n("strong",[s._v("-q 或 --quiet或--silent")]),s._v(" : 不显示任何信息。")]),s._v(" "),n("li",[n("strong",[s._v("-r 或 --recursive")]),s._v(' : 此参数的效果和指定"-d recurse"参数相同。')]),s._v(" "),n("li",[n("strong",[s._v("-s 或 --no-messages")]),s._v(" : 不显示错误信息。")]),s._v(" "),n("li",[n("strong",[s._v("-v 或 --invert-match")]),s._v(" : 显示不包含匹配文本的所有行。")]),s._v(" "),n("li",[n("strong",[s._v("-V 或 --version")]),s._v(" : 显示版本信息。")]),s._v(" "),n("li",[n("strong",[s._v("-w 或 --word-regexp")]),s._v(" : 只显示全字符合的列。")]),s._v(" "),n("li",[n("strong",[s._v("-x --line-regexp")]),s._v(" : 只显示全列符合的列。")]),s._v(" "),n("li",[n("strong",[s._v("-y")]),s._v(' : 此参数的效果和指定"-i"参数相同。')])])]),s._v(" "),n("p",[s._v("实例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行\ngrep test *file \n\n# 查找前缀有 test 的文件包含 test 字符串的文件  \ngrep test test*\n\n# 以递归的方式查找 etc/acpi 下包含 update 的文件  \ngrep -r update /etc/acpi \n\n# 查找文件名中包含 test 的文件中不包含 test 的行\ngrep -v test *test*\n\n# 查询包含INFO的行,以及其前后7行\ngrep -A 7 -B 7 'INFO' demo.log\n\n# 输出文件demo.log中查找所有包行ERROR的行的数\ngrep -c 'ERROR' demo.log\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"sed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[s._v("#")]),s._v(" sed")]),s._v(" "),n("p",[s._v("参数:")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("-f script文件 或 --file=script文件 以选项中指定的script文件来处理输入的文本文件。")]),s._v(" "),n("li",[s._v("-h或--help 显示帮助。")]),s._v(" "),n("li",[s._v("-n或--quiet或--silent 仅显示script处理后的结果。")]),s._v(" "),n("li",[s._v("-V或--version 显示版本信息。")]),s._v(" "),n("li",[s._v("-i 直接修改源文件")])])]),s._v(" "),n("p",[s._v("动作说明")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("a ：新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)～")]),s._v(" "),n("li",[s._v("c ：取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行！")]),s._v(" "),n("li",[s._v("d ：删除，因为是删除啊，所以 d 后面通常不接任何咚咚；")]),s._v(" "),n("li",[s._v("i ：插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；")]),s._v(" "),n("li",[s._v("p ：打印，亦即将某个选择的数据印出。通常 p 会与参数 sed -n 一起运行～")]),s._v(" "),n("li",[s._v("s ：取代，可以直接进行取代的工作哩！通常这个 s 的动作可以搭配正规表示法！")])])]),s._v(" "),n("p",[s._v("实例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 替换 test.txt 中所有的 abc 为 def\nsed -i 's/abc/def/g' test.txt\n\n# 替换 test.txt 中第二个 abc 为 def\nsed -i 's/abc/def/2' test.txt\n\n# w 标记会将匹配后的结果保存到 test1.txt\nsed 's/test/trial/w test1.txt' test.txt\n\n# 删除所有行\nsed 'd' test.txt\n\n# 删除第 3 行\nsed '2d' test.txt\n\n# 删除第 1,3 行\nsed '1,3d' test.txt\n\n# 删除 1 到 3 行\nsed '/1/,/3/d' test.txt\n\n# 删除 test.txt 文件内容中第 3 行开始的所有的内容\nsed '3,$d' test.txt\n\n# 插入到第 3 行,原来的第 3 行会变成第 4 行\nsed '3i This is an inserted line.' test.txt\n\n# 插入到第 3 行后面,原来的第 4 行会变成第 5 行\nsed '3a This is an inserted line.' test.txt\n\n# 替换第三行\nsed '3c This is an inserted line.' test.txt\n\n# 转换所有匹配的字符, 1->7 , 2->8 , 3->9\nsed 'y/123/789/' test.txt\n\n# 把 test1.txt 文本的数据插入到 test.txt 第三行后面\nsed '3r test1.txt' test.txt\n\n# 把test1.txt 文本的数据插入到 test.txt 末尾\nsed '$r test1.txt' test.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("h2",{attrs:{id:"awk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[s._v("#")]),s._v(" awk")]),s._v(" "),n("p",[s._v("常用参数")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("-F fs or --field-separator fs\n指定输入文件折分隔符，fs是一个字符串或者是一个正则表达式，如-F:。")]),s._v(" "),n("li",[s._v("-v var=value or --asign var=value\n赋值一个用户定义变量。")]),s._v(" "),n("li",[s._v("-f scripfile or --file scriptfile\n从脚本文件中读取awk命令。")]),s._v(" "),n("li",[s._v("-W version or --version\n打印bug报告信息的版本。")])]),s._v(" "),n("hr")]),s._v(" "),n("p",[s._v("实例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 行匹配语句 awk '' 只能用单引号\nawk '{[pattern] action}' {filenames}\n\n# 每行按空格或 TAB 分割，输出文本中的 1、4 项\nawk '{print $1,$4}' log.txt\n\n# 使用\",\"分割 输出文本中的 1、2 项\nawk -F, '{print $1,$2}'   log.txt\n\n# 使用多个分隔符.先使用空格分割，然后对分割结果再使用\",\"分割\nawk -F '[ ,]'  '{print $1,$2,$5}'   log.txt\n\n# 设置变量,输出第 1 2 项\nawk -va=1 '{print $1,$1+a}' log.txt\n\n# 使用脚本\nawk -f {awk脚本} {文件名}\n\n# 过滤第一列大于 2 的行\nawk '$1>2' log.txt\n\n# 过滤第一列等于 2 的行\nawk '$1==2 {print $1,$3}' log.txt\n\n# 过滤第一列大于 2 并且第二列等于 Are 的行\nawk '$1>2 && $2==\"Are\" {print $1,$2,$3}' log.txt\n\n# 指定输出分割符\nawk '{print $1,$2,$5}' OFS=\" $ \"  log.txt\n\n# 输出第二列包含 \"th\"，并打印第二列与第四列\nawk '$2 ~ /th/ {print $2,$4}' log.txt\n\n# 输出包含 \"re\" 的行,跟 grep 效果一样\nawk '/re/ ' log.txt\n\n# 忽略大小写\nawk 'BEGIN{IGNORECASE=1} /this/' log.txt\n\n# 第二项不包含 th 的行\nawk '$2 !~ /th/ {print $2,$4}' log.txt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);