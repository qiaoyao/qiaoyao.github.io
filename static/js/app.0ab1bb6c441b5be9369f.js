webpackJsonp([0],[,,,,,,,,,,,,,,,function(t,n,e){"use strict";var i=e(2),s=e(107),o=e(84),a=e.n(o),r=e(86),c=e.n(r),u=e(81),l=e.n(u),p=e(89),d=e.n(p),m=e(87),f=e.n(m),h=e(91),_=e.n(h),g=e(82),v=e.n(g),y=e(90),b=e.n(y),C=e(88),k=e.n(C),x=e(85),w=e.n(x),q=e(80),P=e.n(q);i.a.use(s.a),n.a=new s.a({routes:[{path:"*",redirect:"/home"},{path:"/home",component:a.a,children:[{path:"/",redirect:"ku"},{path:"ku",component:c.a},{path:"bang",component:l.a}]},{path:"/rank/:topid",name:"rank",component:f.a},{path:"/cd/:disstid",name:"cd",component:v.a},{path:"/search",component:d.a,children:[{path:"/",redirect:"hotkey"},{path:"slist/:key",name:"slist",component:k.a},{path:"hotkey",name:"hotkey",component:w.a}]},{path:"/singer",name:"singer",component:b.a},{path:"/album",name:"album",component:P.a},{path:"/song",name:"song",component:_.a}],mode:"history",saveScrollPosition:!0,scrollBehavior:function(t,n,e){return e||{x:0,y:0}}})},function(t,n,e){"use strict";var i=e(2),s=e(1);i.a.use(s.d),n.a=new s.d.Store({state:{isPlay:!1,playList:[{pic:"http://imgcache.qq.com/music/photo/album_300/55/300_albumpic_1925855_0.jpg",song:"漂洋过海来看你",singer:[{name:"王丽坤"},{name:"朱亚文"}],id:201308159,url:"http://ws.stream.qqmusic.qq.com/201308159.m4a?fromtag=46",isLike:!1}]},getters:{playDefault:function(t){return t.playList[0]}},mutations:{addToList:function(t,n){t.playList[0].id!==n.id&&(t.playList.unshift(n),t.isPlay=!0)},play:function(t){t.isPlay=!0},playORpause:function(t){t.isPlay=!t.isPlay}},actions:{addToList:function(t){(0,t.commit)("addToList",{id:"",song:"",singer:"",pic:"",url:"",isLike:!1})},play:function(t){(0,t.commit)("play")},playORpause:function(t){(0,t.commit)("playORpause")}}})},,function(t,n,e){e(74);var i=e(0)(e(22),e(103),null,null);t.exports=i.exports},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=e(14),e(64)),n.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,n=function(){if(!t.swiper&&i){delete t.options.notNextTick;var n=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(n=!0,t.defaultSwiperClasses[e]=t.options[e]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};n?t.$nextTick(s):s()}};this.options.notNextTick?n():this.$nextTick(n)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(8),s=e.n(i),o=e(1);n.default={name:"app",data:function(){return{showDetail:!1,current:null,duration:null,currentTime:0}},computed:s()({},e.i(o.a)(["isPlay","playList"]),e.i(o.b)(["playDefault"])),methods:s()({},e.i(o.c)(["addToList","play","playORpause"]),{timer:function(t){return(parseInt(t/60)<10?"0"+parseInt(t/60):parseInt(t/60))+":"+(parseInt(t%60)<10?"0"+parseInt(t%60):parseInt(t%60))},showPage:function(){var t=this;this.isPlay?(this.current=setInterval(function(){t.currentTime=document.getElementById("audio").currentTime,console.log(t.currentTime)},1e3),this.duration=document.getElementById("audio").duration):clearInterval(this.current),this.showDetail=!0}}),watch:{isPlay:function(t,n){t?document.getElementById("audio").play():document.getElementById("audio").pause()},playDefault:function(t,n){this.$nextTick(function(){document.getElementById("audio").play()})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"album",data:function(){return{album:{}}},watch:{$route:function(t,n){"album"==t.name&&this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$http.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",{params:{albummid:this.$route.query.id,g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},jsonp:"jsonpCallback"}).then(function(n){t.album=n.data.data})},albumpic:function(t){if(t)return"http://imgcache.qq.com/music/photo/album_300/"+t%100+"/300_albumpic_"+t+"_0.jpg"},singerpic:function(t){if(t)return"http://imgcache.qq.com/music/photo/mid_singer_300/"+t.charAt(t.length-2)+"/"+t.charAt(t.length-1)+"/"+t+".jpg"},goBack:function(){this.$router.go(-1)},plays:function(t,n,e,i){var s="http://ws.stream.qqmusic.qq.com/"+t+".m4a?fromtag=46";this.$store.commit("addToList",{id:t,song:n,singer:e,pic:i,url:s})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e(1);n.default={name:"bang",data:function(){return{toplist:[]}},watch:{$route:function(t,n){"bang"==t.name&&this.init()}},mounted:function(){this.init(),this.$route.path.indexOf("rank")},methods:{init:function(){var t=this;this.$http.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",{params:{format:"jsonp",g_tk:5381,uin:0,inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,_:(new Date).getTime()},jsonp:"jsonpCallback"}).then(function(n){t.toplist=n.data.data.topList})},albumpic:function(t){return"http://imgcache.qq.com/music/photo/album_300/"+t%100+"/300_albumpic_"+t+"_0.jpg"},myscroll:function(){console.log(window.scrollY)},goBack:function(){this.$router.go(-1)},plays:function(t,n,e,i){var s="http://ws.stream.qqmusic.qq.com/"+t+".m4a?fromtag=46";this.$store.commit("addToList",{id:t,song:n,singer:e,pic:i,url:s})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e(1);n.default={name:"cd",data:function(){return{cdinfo:{}}},watch:{$route:function(){this.init(),this.$route.path.indexOf("cd")>-1&&console.log("watch")}},mounted:function(){this.init(),this.$route.path.indexOf("cd")>-1&&console.log("mounted")},methods:{init:function(){var t=this;this.$http.jsonp("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",{params:{g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,new_format:1,pic:500,disstid:this.$route.params.disstid,type:1,json:1,utf8:1,onlysong:0,nosign:1,_:(new Date).getTime()},jsonpCallback:"jsonp5hy6lu2xqkp"}).then(function(n){var e=n.data;t.cdinfo=e.cdlist[0]})},albumpic:function(t){return"http://imgcache.qq.com/music/photo/album_300/"+t%100+"/300_albumpic_"+t+"_0.jpg"},goBack:function(){this.$router.go(-1)},plays:function(t,n,e,i){var s="http://ws.stream.qqmusic.qq.com/"+t+".m4a?fromtag=46";this.$store.commit("addToList",{id:t,song:n,singer:e,pic:i,url:s})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"head",data:function(){return{}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(83),s=e.n(i);n.default={name:"home",components:{heads:s.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"hotkey",data:function(){return{hotkey:[]}},mounted:function(){this.gethotkey()},methods:{gethotkey:function(){var t=this;this.$http.jsonp("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",{params:{g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},jsonp:"jsonpCallback"}).then(function(n){t.hotkey=n.data.data.hotkey})},showNum:function(t){return Math.floor(t/1e3)/10+"万"},top10:function(t){return t.slice(0,10)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(7);e.n(i);n.default={name:"ku",data:function(){return{toplist:[],hotdiss:[],focus:[],shoubomv:[],gangtai:[],japan:[],korea:[],neidi:[],oumei:[],reclist:[]}},computed:{swiperOption:function(){return{autoplay:3e3,initialSlide:1,loop:!0}}},mounted:function(){this.first()},methods:{first:function(){var t=this;this.$http.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg",{params:{format:"jsonp",tpl:"v12",page:"other",rnd:0,g_tk:(new Date).getTime(),loginUin:0,hostUin:0,inCharset:"utf8",outCharset:"utf8",notice:0,platform:"yqq",needNewCode:0},jsonp:"jsonpCallback"}).then(function(n){var e=n.data;t.toplist=e.data.toplist,t.hotdiss=e.data.hotdiss.list,t.focus=e.data.focus,t.shoubomv=e.data.shoubomv.all,t.gangtai=e.data.shoubomv.gangtai,t.japan=e.data.shoubomv.japan,t.korea=e.data.shoubomv.korea,t.neidi=e.data.shoubomv.neidi,t.oumei=e.data.shoubomv.oumei})},getrec:function(){this.$http.jsonp("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",{params:{g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},jsonp:"jsonpCallback"}).then(function(t){var n=t.data;console.log(n)})}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e(1);n.default={name:"rank",data:function(){return{topinfo:{},songlist:[]}},beforeRouteEnter:function(t,n,e){e(function(t){t.init()})},watch:{$route:function(){this.$route.path.indexOf("rank")}},mounted:function(){this.$route.path.indexOf("rank")},methods:{init:function(){var t=this;this.$http.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",{params:{g_tk:5381,uin:0,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:this.$route.params.topid,_:(new Date).getTime()},jsonp:"jsonpCallback"}).then(function(n){t.topinfo=n.data.topinfo,t.songlist=n.data.songlist})},albumpic:function(t){return"http://imgcache.qq.com/music/photo/album_300/"+t%100+"/300_albumpic_"+t+"_0.jpg"},myscroll:function(){console.log(window.scrollY)},goBack:function(){this.$router.go(-1)},plays:function(t,n,e,i){var s="http://ws.stream.qqmusic.qq.com/"+t+".m4a?fromtag=46";this.$store.commit("addToList",{id:t,song:n,singer:e,pic:i,url:s})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"slist",data:function(){return{singer:{},album:{},song:{}}},watch:{$route:function(t,n){"slist"==t.name&&this.search(this.$route.params.key)}},mounted:function(){this.search(this.$route.params.key)},methods:{search:function(t){var n=this;this.$http.jsonp("https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg",{params:{is_xml:0,format:"jsonp",key:t,g_tk:5381,loginUin:0,hostUin:0,inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},jsonp:"jsonpCallback"}).then(function(t){n.singer=t.data.data.singer,n.album=t.data.data.album,n.song=t.data.data.song})},showNum:function(t){return Math.floor(t/1e3)/10+"万"},top10:function(t){return t.slice(0,10)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"search",data:function(){return{key:"",hotkey:[]}},computed:{keyword:function(){return this.key?this.key:"薛之谦"}},methods:{search:function(t){this.$http.jsonp("https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg",{params:{is_xml:0,format:"jsonp",key:t,g_tk:5381,loginUin:0,hostUin:0,inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},jsonp:"jsonpCallback"}).then(function(t){console.log(t)})},goBack:function(){this.$router.go(-1)},goSList:function(){this.$router.push({name:"slist",params:{key:this.keyword}})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"singer",data:function(){return{singer:{}}},watch:{$route:function(t,n){"singer"==t.name&&this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$http.jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",{params:{order:"listen",begin:0,num:8,singermid:this.$route.query.id,g_tk:5381,uin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5page",needNewCode:1,from:"h5",_:(new Date).getTime()},jsonp:"jsonpCallback"}).then(function(n){t.singer=n.data.data})},albumpic:function(t){return"http://imgcache.qq.com/music/photo/album_300/"+t%100+"/300_albumpic_"+t+"_0.jpg"},singerpic:function(t){if(t)return"http://imgcache.qq.com/music/photo/mid_singer_300/"+t.charAt(t.length-2)+"/"+t.charAt(t.length-1)+"/"+t+".jpg"},goBack:function(){this.$router.go(-1)},plays:function(t,n,e,i){var s="http://ws.stream.qqmusic.qq.com/"+t+".m4a?fromtag=46";this.$store.commit("addToList",{id:t,song:n,singer:e,pic:i,url:s})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(8),s=e.n(i),o=e(1);n.default={name:"song",data:function(){return{}},computed:s()({},e.i(o.a)(["isPlay","playList"]),e.i(o.b)(["playDefault"])),methods:s()({},e.i(o.c)(["addToList","play","playORpause"]),{goBack:function(){this.$router.go(-1)}})}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),s=e(18),o=e.n(s),a=e(15),r=e(16),c=e(19),u=e(17),l=e.n(u),p=e(7),d=e.n(p);i.a.use(c.a),i.a.use(d.a),i.a.use(l.a),new i.a({el:"#app",router:a.a,store:r.a,render:function(t){return t(o.a)}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){var i=e(0)(e(20),e(95),null,null);t.exports=i.exports},function(t,n,e){var i=e(0)(e(21),e(93),null,null);t.exports=i.exports},function(t,n,e){e(68);var i=e(0)(e(23),e(97),null,null);t.exports=i.exports},function(t,n,e){e(72);var i=e(0)(e(24),e(101),null,null);t.exports=i.exports},function(t,n,e){e(69);var i=e(0)(e(25),e(98),null,null);t.exports=i.exports},function(t,n,e){e(65);var i=e(0)(e(26),e(92),null,null);t.exports=i.exports},function(t,n,e){e(67);var i=e(0)(e(27),e(96),null,null);t.exports=i.exports},function(t,n,e){e(66);var i=e(0)(e(28),e(94),null,null);t.exports=i.exports},function(t,n,e){e(71);var i=e(0)(e(29),e(100),null,null);t.exports=i.exports},function(t,n,e){e(70);var i=e(0)(e(30),e(99),null,null);t.exports=i.exports},function(t,n,e){e(76);var i=e(0)(e(31),e(105),null,null);t.exports=i.exports},function(t,n,e){e(73);var i=e(0)(e(32),e(102),null,null);t.exports=i.exports},function(t,n,e){e(75);var i=e(0)(e(33),e(104),null,null);t.exports=i.exports},function(t,n,e){e(77);var i=e(0)(e(34),e(106),null,null);t.exports=i.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"head"}},[e("header",[e("ul",[e("li",[e("router-link",{attrs:{to:"ku"}},[t._v("乐库")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"bang"}},[t._v("排行榜")])],1)]),t._v(" "),e("router-link",{attrs:{to:"/search"}},[e("span",{staticClass:"iconfont icon-searchlist"})])],1),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hotkey"},[t.hotkey?e("ul",[e("h6",[t._v("热门搜索")]),t._v(" "),t._l(t.top10(t.hotkey),function(n){return e("li",[e("router-link",{attrs:{to:"/search/slist/"+n.k}},[e("span",{staticClass:"key",domProps:{textContent:t._s(n.k)}}),t._v(" "),e("span",{staticClass:"num",domProps:{textContent:t._s(t.showNum(n.n))}})])],1)})],2):t._e()])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home"}},[e("heads")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.album?e("div",{attrs:{id:"album"}},[e("div",{staticClass:"head"},[e("span",{staticClass:"iconfont icon-back",on:{click:function(n){t.goBack()}}}),t._v(" "),e("h2",{domProps:{textContent:t._s(t.album.name)}})]),t._v(" "),e("div",{staticClass:"pic",style:{backgroundImage:"url("+t.singerpic(t.album.singermid)+")"}}),t._v(" "),t.album.list?e("ul",{staticClass:"songlist"},t._l(t.album.list,function(n,i){return e("li",{on:{click:function(e){t.plays(n.songid,n.songname,n.singer,t.albumpic(n.albumid))}}},[e("img",{attrs:{src:t.albumpic(t.album.id),alt:""}}),t._v(" "),e("div",[e("h6",{domProps:{textContent:t._s(n.songname)}}),t._v(" "),e("p",[t._l(n.singer,function(n){return e("span",{domProps:{textContent:t._s(n.name)}})}),t._v(" "),e("span",{domProps:{textContent:t._s("- "+n.albumname)}})],2)])])})):t._e()]):t._e()},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"cd"}},[t.cdinfo?e("div",[e("div",{staticClass:"head"},[e("span",{staticClass:"iconfont icon-back",on:{click:function(n){t.goBack()}}}),t._v(" "),e("span",{staticClass:"fr iconfont icon-share"})]),t._v(" "),e("div",{staticClass:"infobg"},[e("div",{staticClass:"box"},[e("img",{attrs:{src:t.cdinfo.logo,alt:""}}),t._v(" "),e("div",[e("h2",{domProps:{textContent:t._s(t.cdinfo.dissname)}}),t._v(" "),e("p",{domProps:{textContent:t._s(t.cdinfo.nickname)}})])])]),t._v(" "),t.cdinfo.songlist?e("ul",{staticClass:"songlist"},t._l(t.cdinfo.songlist,function(n,i){return e("li",{on:{click:function(e){t.plays(n.id,n.name,n.singer,t.albumpic(n.album.id))}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.albumpic(n.album.id),expression:"albumpic(item.album.id)"}],attrs:{alt:""}}),t._v(" "),e("div",[e("h6",{domProps:{textContent:t._s(n.name)}}),t._v(" "),e("p",[t._l(n.singer,function(n){return e("span",{domProps:{textContent:t._s(n.name+" - ")}})}),t._v(" "),e("span",{domProps:{textContent:t._s(n.album.name)}})],2)])])})):t._e()]):t._e()])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"rank"}},[t.topinfo?e("div",[e("div",{staticClass:"head"},[e("span",{staticClass:"iconfont icon-back",on:{click:function(n){t.goBack()}}}),t._v(" "),e("h2",{domProps:{textContent:t._s(t.topinfo.ListName)}})]),t._v(" "),e("div",{staticClass:"pic-h5"},[e("img",{attrs:{src:t.topinfo.pic_h5,alt:""}})]),t._v(" "),t.songlist?e("ul",{staticClass:"songlist"},t._l(t.songlist,function(n,i){return e("li",{on:{click:function(e){t.plays(n.data.songid,n.data.songname,n.data.singer,t.albumpic(n.data.albumid))}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.albumpic(n.data.albumid),expression:"albumpic(item.data.albumid)"}],attrs:{alt:""}}),t._v(" "),e("div",[e("h6",{domProps:{textContent:t._s(n.data.songname)}}),t._v(" "),e("p",[t._l(n.data.singer,function(n){return e("span",{domProps:{textContent:t._s(n.name)}})}),t._v(" "),e("span",{domProps:{textContent:t._s("- "+n.data.albumname)}})],2)])])})):t._e()]):t._e()])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"ku"}},[t.focus?e("swiper",{ref:"myswiper",attrs:{options:t.swiperOption}},t._l(t.focus,function(t){return e("swiper-slide",[e("img",{attrs:{src:t.pic,alt:""}})])})):t._e(),t._v(" "),t._m(0),t._v(" "),t.hotdiss?e("ul",{staticClass:"hotdiss"},t._l(t.hotdiss,function(n){return e("li",[e("router-link",{attrs:{to:"/cd/"+n.dissid}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.imgurl,expression:"item.imgurl"}],attrs:{alt:""}}),t._v(" "),e("p",{domProps:{textContent:t._s(n.dissname)}})])],1)})):t._e()],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"recHead"},[e("h3",[t._v("推荐歌单")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"bang"}},[t.toplist?e("ul",{staticClass:"toplist"},t._l(t.toplist,function(n){return e("li",[e("div",{staticClass:"head"},[e("h2",{domProps:{textContent:t._s(n.topTitle)}}),t._v(" "),e("router-link",{attrs:{tag:"span",to:"/rank/"+n.id}},[t._v("More")])],1),t._v(" "),e("div",{staticClass:"list"},[e("router-link",{attrs:{tag:"div",to:"/rank/"+n.id}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{alt:""}}),t._v(" "),e("dl",t._l(n.songList,function(n){return e("dd",[e("h6",{domProps:{textContent:t._s(n.songname)}}),t._v(" "),e("span",{domProps:{textContent:t._s(n.singername)}})])}))])],1)])})):t._e()])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"search"},[e("div",{staticClass:"head"},[e("span",{staticClass:"iconfont icon-back",on:{click:function(n){t.goBack()}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"search",placeholder:"请输入歌手/歌曲查找"},domProps:{value:t.key},on:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13))return null;t.goSList()},input:function(n){n.target.composing||(t.key=n.target.value)}}})]),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"slide"}},[e("keep-alive",[e("router-view")],1)],1),t._v(" "),e("div",{attrs:{id:"play"}},[e("div",{staticClass:"song",on:{click:function(n){t.showPage()}}},[e("img",{attrs:{src:t.playDefault.pic,alt:""}}),t._v(" "),e("div",[e("h5",{domProps:{textContent:t._s(t.playDefault.song)}}),t._v(" "),e("p",t._l(t.playDefault.singer,function(n){return e("span",{domProps:{textContent:t._s(n.name+" ")}})}))])]),t._v(" "),e("div",{staticClass:"opt"},[e("span",{class:["iconfont",{"icon-like":!t.playDefault.isLike,"icon-likefill":t.playDefault.isLike}],on:{click:function(n){t.playDefault.isLike=!t.playDefault.isLike}}}),t._v(" "),e("span",{class:["iconfont",{"icon-video":!t.isPlay,"icon-videofill":t.isPlay}],on:{click:t.playORpause}}),t._v(" "),e("span",{staticClass:"iconfont icon-pullright"})]),t._v(" "),e("audio",{attrs:{id:"audio",src:t.playDefault.url}})]),t._v(" "),t.showDetail?e("div",{class:["onplay",{active:t.showDetail}]},[e("img",{staticClass:"playbg",attrs:{src:t.playDefault.pic,alt:""}}),t._v(" "),e("div",{staticClass:"upbg"},[e("div",{staticClass:"head"},[e("b",{staticClass:"iconfont icon-close",on:{click:function(n){t.showDetail=!1}}}),t._v(" "),e("h5",{domProps:{textContent:t._s(t.playDefault.song)}})]),t._v(" "),e("div",{staticClass:"pic"},[e("img",{staticClass:"active",attrs:{src:t.playDefault.pic,alt:""}})]),t._v(" "),e("div",{staticClass:"progressBar"},[e("span",{domProps:{textContent:t._s(t.timer(t.currentTime))}}),t._v(" "),e("div",[e("p",[e("b",{style:{width:t.currentTime/t.duration*100+"%"}})])]),t._v(" "),e("span",{domProps:{textContent:t._s(t.timer(t.duration))}})])])]):t._e()],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.singer?e("div",{attrs:{id:"singer"}},[e("div",{staticClass:"head"},[e("span",{staticClass:"iconfont icon-back",on:{click:function(n){t.goBack()}}}),t._v(" "),e("h2",{domProps:{textContent:t._s(t.singer.singer_name)}})]),t._v(" "),e("div",{staticClass:"infobg"},[e("div",{staticClass:"box"},[e("img",{attrs:{src:t.singerpic(t.singer.singer_mid),alt:""}}),t._v(" "),e("div",[e("p",{domProps:{textContent:t._s(t.singer.SingerDesc)}})])])]),t._v(" "),t.singer.albumlist?e("div",{staticClass:"album"},[e("h2",[t._v("专辑推荐")]),t._v(" "),e("ul",t._l(t.singer.albumlist,function(n){return e("li",[e("router-link",{attrs:{to:{path:"/album",query:{id:n.albummid}}}},[e("img",{attrs:{src:n.pic,alt:""}}),t._v(" "),e("p",{domProps:{textContent:t._s(n.name)}})])],1)}))]):t._e(),t._v(" "),t.singer.list?e("ul",{staticClass:"songlist"},t._l(t.singer.list,function(n,i){return e("li",{on:{click:function(e){t.plays(n.musicData.songid,n.musicData.songname,n.musicData.singer,t.albumpic(n.musicData.albumid))}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.albumpic(n.musicData.albumid),expression:"albumpic(item.musicData.albumid)"}],attrs:{alt:""}}),t._v(" "),e("div",[e("h6",{domProps:{textContent:t._s(n.musicData.songname)}}),t._v(" "),e("p",[t._l(n.musicData.singer,function(n){return e("span",{domProps:{textContent:t._s(n.name+" - ")}})}),t._v(" "),e("span",{domProps:{textContent:t._s(n.musicData.albumname)}})],2)])])})):t._e()]):t._e()},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"slist"},[t.singer||t.album||t.song?t._e():e("div",{staticClass:"null"},[t._v("\r\n    没有数据\r\n  ")]),t._v(" "),t.singer?e("ul",[e("h2",{domProps:{textContent:t._s(t.singer.name)}}),t._v(" "),t._l(t.singer.itemlist,function(n){return e("li",[e("router-link",{attrs:{to:{path:"/singer",query:{id:n.mid}}}},[e("span",{domProps:{textContent:t._s(n.singer)}})])],1)})],2):t._e(),t._v(" "),t.album?e("ul",[e("h2",{domProps:{textContent:t._s(t.album.name)}}),t._v(" "),t._l(t.album.itemlist,function(n){return e("li",[e("router-link",{attrs:{to:{path:"/album",query:{id:n.mid}}}},[e("span",{domProps:{textContent:t._s(n.name)}}),t._v(" "),e("span",{domProps:{textContent:t._s("-"+n.singer)}})])],1)})],2):t._e(),t._v(" "),t.song?e("ul",[e("h2",{domProps:{textContent:t._s(t.song.name)}}),t._v(" "),t._l(t.song.itemlist,function(n){return e("li",[e("span",{domProps:{textContent:t._s(n.name)}}),t._v(" "),e("span",{domProps:{textContent:t._s("-"+n.singer)}})])})],2):t._e()])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"song"}},[e("div",{staticClass:"head"},[e("span",{staticClass:"fl iconfont icon-close",on:{click:function(n){t.goBack()}}}),t._v(" "),e("span",{staticClass:"fr iconfont icon-settings"})]),t._v(" "),t.playList?e("ul",t._l(t.playList,function(n){return e("li",[e("h2",{domProps:{textContent:t._s(n.song)}}),t._v(" "),e("p",t._l(n.singer,function(n){return e("span",{domProps:{textContent:t._s(n.name)}})}))])})):t._e()])},staticRenderFns:[]}},,,,function(t,n){}],[35]);
//# sourceMappingURL=app.0ab1bb6c441b5be9369f.js.map