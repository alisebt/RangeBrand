(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{vsvo:function(t,o,e){"use strict";e.r(o);e("TeQF"),e("yXV3"),e("oVuX"),e("rB9j"),e("UxlC"),e("EnZy");var r=e("nBRN"),n=e("cQwu"),s={components:{ColorBanner:r.a},computed:{colors:function(){try{return this.$route.query.colors.split("-").filter((function(t,o,e){return Object(n.a)(t)&&e.indexOf(t)===o}))}catch(t){return[]}}},beforeMount:function(){this.colors.length||this.$router.replace({path:"/colors/"})},methods:{updateQuery:function(t){t.join("-")!==this.$route.query.colors&&this.$router.push({path:"/palette",query:{colors:t.join("-")}})}}},u=e("KHd+"),c=Object(u.a)(s,(function(){var t=this.$createElement,o=this._self._c||t;return o("Layout",[o("div",{staticClass:"h-screen -mt-20 pt-16"},[o("color-banner",{attrs:{colors:this.colors},on:{update:this.updateQuery}})],1)])}),[],!1,null,null,null);o.default=c.exports}}]);