(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1088:function(_,v,t){"use strict";t.r(v);var s=t(3),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("blockquote",[t("p",[_._v("在面试的过程中，除了常规的算法题目，我们经常也会被问到一些趣味题型来考察思维，尤其以 FLAG（Facebook, LinkedIn, Amazon, Google）等公司为典型。而这类问题的背后，很多都有博弈论的影子。所以在本系列，我将为大家分享一整套需要掌握的"),t("strong",[_._v("博弈论")]),_._v("相关知识，希望大家可以喜欢。")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("PS：本系列将不一定都是算法问题，不是IT行业的小伙伴也可以进行学习，来提高自身分析问题的能力。")])]),_._v(" "),t("h2",{attrs:{id:"_01、海盗分金币问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01、海盗分金币问题"}},[_._v("#")]),_._v(" 01、海盗分金币问题")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("海盗分金币")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("在大海上，有5个海盗抢得100枚金币，他们决定每一个人按顺序依次提出自己的分配方案，如果提出的方案没有获得半数或半数以上的人的同意，则这个提出方案的人就被扔到海里喂鲨鱼。那么第一个提出方案的人要怎么做，才能使自己的利益最大化？")])])])]),_._v(" "),t("p",[_._v("海盗们有如下特点：")]),_._v(" "),t("p",[_._v("1.足智多谋，总是采取最优策略。")]),_._v(" "),t("p",[_._v("2.贪生怕死，尽量保全自己性命。")]),_._v(" "),t("p",[_._v("3.贪得无厌，希望自己得到越多宝石越好")]),_._v(" "),t("p",[_._v("4.心狠手辣，在自己利益最大的情况下希望越多人死越好。")]),_._v(" "),t("p",[_._v("5.疑心多虑，不信任彼此，尽量确保自身利益不寄希望与别人给自己更大利益。")]),_._v(" "),t("h2",{attrs:{id:"_02、题目分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02、题目分析"}},[_._v("#")]),_._v(" 02、题目分析")]),_._v(" "),t("p",[_._v("首先我们很容易会觉得，抽签到第一个提方案的海盗会很吃亏！因为只要死的人够多，那么平均每个人获取的金币就最多，而第一个提方案的人是最容易死的。但是事实是，在满足海盗特点的基础上，"),t("strong",[_._v("第一个提方案的海盗是最赚的")]),_._v("，我们一起来分析一下。")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("假如我们设想只有两个海盗。那么不管第一个说什么，只要第二个人不同意，第二个人就可以得到全部的金币！所以"),t("strong",[_._v("第一个海盗必死无疑")]),_._v("，这个大家都能理解。（当然，这样的前提是一号提出方案后不可以马上自己同意，不然如果自己提出给自己全部金币的方案，然后自己支持，这样就是二号必死无疑）")]),_._v(" "),t("p",[_._v("假如现在我们加入第三个海盗，这时候原来的一号成为了二号，二号成为了三号。这时候现在的二号心里会清楚，"),t("strong",[_._v("如果他投死了一号，那么自己必死无疑")]),_._v("！所以根据贪生怕死的原则，二号肯定会让一号存活。而此时一号心理也清楚，无论自己提出什么样的方案，二号都会让自己存活，而这时只要加上自己的一票，就有半数通过，所以一号提出方案：把金币都给我。")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("现在又继续加入了新的海盗！原来的1,2,3号，成为了现在的2,3,4号。这时候新的一号海盗洞悉了奥秘，知道了**如果自己死了，二号就可以获取全部的金币，**所以提出给三号和四号一人一个金币，一起投死2号。而与此同时，现在的3号和4号获取的要比三个人时多（三个人时自己获取不了任何金币），所以他们会同意这个方案！")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("现在加入我们的大Boss，最后一个海盗。根据分析，大Boss海盗1号推知出2号的方案后就可以提出(97,0,1,2,0)或者(97,0,1,0,2)的方案。这样的分配方案对现在的3号海盗相比现在的2号的分配方案还多了一枚金币，就会投赞成票，4号或者5号因为得到了2枚金币，相比2号的一枚多，也会支持1号，加上1号自己的赞成票，方案就会通过，即1号提出(97,0,1,2,0)或(97,0,1,0,2)的分配方案，大Boss成功获得了97枚金币。")]),_._v(" "),t("h2",{attrs:{id:"_03、思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03、思考"}},[_._v("#")]),_._v(" 03、思考")]),_._v(" "),t("p",[_._v("最终，"),t("strong",[_._v("大Boss一号海盗得到97枚金币，投死了老二和老五")]),_._v("，这竟然是我们分析出的最佳方案！这个答案明显是反直觉的，如果你是老大，你敢这样分金币，必死无疑。可是，推理过程却非常严谨，无懈可击，那么问题出在哪里呢？")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v('其实，在"海盗分赃"模型中，任何"分配者"想让自己的方案获得通过的关键是，**事先考虑清楚"对手"的分配方案是什么，**'),t("strong",[_._v("并用最小的代价获取最大收益")]),_._v("，"),t("strong",[_._v('拉拢"对手"分配方案中最不得意的人们')]),_._v("。1号看起来最有可能喂鲨鱼，但他牢牢地把握住先发优势，结果不但消除了死亡威胁，还收益最大。而5号，看起来最安全，没有死亡的威胁，甚至还能坐收渔人之利，却因不得不看别人脸色行事而只能分得一小杯羹。")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("不过，模型任意改变一个假设条件，最终结果都不一样。而现实世界远比模型复杂。"),t("strong",[_._v("因为假定所有人都理性，本身就是不理性的")]),_._v("。回到“海盗分金”的模型中，只要3号、4号或5号中有一个人偏离了绝对聪明的假设，海盗1号无论怎么分都可能会被扔到海里去了。所以，1号首先要考虑的就是他的海盗兄弟们的聪明和理性究竟靠得住靠不住，否则先分者必定倒霉。")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("如果某人和一号本身不对眼，就想丢他喂鲨鱼。果真如此，1号自以为得意的方案岂不成了自掘坟墓。再就是俗话所说的“人心隔肚皮”。由于信息不对称，谎言和虚假承诺就大有用武之地，而阴谋也会像杂草般疯长，并借机获益。如果2号对3、4、5号大放烟幕弹，宣称对于1号所提出任何分配方案，他一定会再多加上一个金币给他们。这样，结果又当如何？")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("通常，现实中人人都有自认的公平标准，因而时常会嘟嚷：“"),t("strong",[_._v("谁动了我的奶酪？")]),_._v("”可以料想，一旦1号所提方案和其所想的不符，就会有人大闹。当大家都闹起来的时候，1号能拿着97枚金币毫发无损、镇定自若地走出去吗？最大的可能就是，海盗们会要求修改规则，然后重新分配。当然，大家也可以讲清楚下次再得100枚金币时，先由2号海盗来分…然后是3号……颇有点像美国总统选举，轮流主政。说白了，其实是民主形式下的分赃制。")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("最可怕的是其他四人形成一个反1号的大联盟并制定出新规则：四人平分金币，将1号扔进大海。这就颇有点阿Q式的革命理想：高举平均主义的旗帜，将富人扔进死亡深渊。")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("最后，这里也提供一份代码实现，供有兴趣的同学参考（该代码我大概看了一下，但是因为时间的关系，没有跑单测进行验证，特此说明！）")]),_._v(" "),t("br"),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("以上代码输出：5人时分配方案：[97, 0, 1, 0, 2]\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("br"),_._v(" "),t("p",[_._v("看懂了吗？如果看懂了，这里提出一个问题：假如我们将"),t("strong",[_._v("人性")]),_._v("考虑在内，同时也进行"),t("strong",[_._v("理性")]),_._v("的分析，如果你是老大，又该如何提出这个方案呢？大家在留言区留下自己的回答吧！")])])}),[],!1,null,null,null);v.default=r.exports}}]);