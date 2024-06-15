(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(25),c=n.n(i),s=(n(55),n(56),n(57),n(13)),o=n(5),l="BANNER_REQUEST",d="BANNER_SUCCESS",u="BANNER_FAILURE   ",b=n(26),j=n.n(b),m=function(e){return function(e){return e({type:l}),j()({method:"get",url:"https://api.themoviedb.org/3/discover/tv?api_key=dd229825107a92713d83a649e77aece1&with-networks=213"}).then((function(t){var n=Math.floor(Math.random()*t.data.results.length-1);e(function(e){return{type:d,payload:e}}(t.data.results[n]))})).catch((function(t){e(function(e){return{type:u,payload:e}}(t))}))}},h=n(3),p=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.banner.bannerImage})),n=t.backdrop_path,a=t.name,i=t.title,c=t.original_name,o=t.overview;r.a.useEffect((function(){e(m())}),[e]);var l,d;return Object(h.jsxs)("div",{className:"bg-cover bg-center text-white object-contain",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(n,'")')},children:[Object(h.jsxs)("div",{className:"pt-52 pl-6",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"text-6xl font-extrabold",children:a||i||c})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"w-36 p-2 mt-3 bg-gray-900 font-bold hover:text-black hover:bg-white transition duration-150 ease-in",children:"Play"}),Object(h.jsx)("button",{className:"w-36 ml-4 p-2 bg-gray-900 font-bold hover:text-black hover:bg-white transition duration-150 ease-in",children:"My List"})]}),Object(h.jsx)("div",{className:"mt-3 pr-5 md:w-1/4 font-bold",children:(l=o,d=150,(null===l||void 0===l?void 0:l.length)>d?l.substr(0,d-1)+"...":l)})]}),Object(h.jsx)("div",{className:"pt-10"}),Object(h.jsx)("div",{className:"bg-gradient-to-t from-gray-900"})]})},g=n(19),f=n.p+"static/media/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w-removebg-preview.f3682436.png",x=n(34),O=(x.a.initializeApp({apiKey:"AIzaSyBVg_khG8lssMdQxOeb5_8PfWMpBhGuXqs",authDomain:"netflix-clone-1c921.firebaseapp.com",projectId:"netflix-clone-1c921",storageBucket:"netflix-clone-1c921.appspot.com",messagingSenderId:"919395472654",appId:"1:919395472654:web:f1a3c741cf2b4b1d66335f",measurementId:"G-BVN36LKSWJ"}).firestore(),x.a.auth()),v="LOGIN_REQUEST",w="LOGIN_SUCCESS",y="LOGIN_FAILURE",_="LOGOUT",E=function(e){return function(t){t({type:v}),O.signInWithEmailAndPassword(e.email,e.password).then((function(e){console.log(e.user.email),t(function(e){return{type:w,payload:e}}(e.user)),alert("Login Successful")})).catch((function(e){t(function(e){return{type:y,payload:e}}(e.message)),alert(e.message)}))}};function S(e){try{var t=localStorage.getItem(e);return t=JSON.parse(t)}catch(n){return}}function N(e,t){localStorage.setItem(e,JSON.stringify(t))}function L(e){localStorage.removeItem(e)}var I=function(){var e=r.a.useState(!1),t=Object(g.a)(e,2),n=t[0],a=t[1],i=Object(s.b)(),c=S("email"),o=function(){window.scrollY>100?a(!0):a(!1)};return r.a.useEffect((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[]),Object(h.jsxs)("div",{className:"flex justify-between items-center h-16 w-full fixed top-0 transition duration-500 ease-in-out ".concat(n&&"bg-black"),children:[Object(h.jsx)("img",{src:f,alt:"netflix logo",className:"w-36"}),Object(h.jsxs)("div",{className:"mb-10",children:[Object(h.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"profile",className:"w-18 h-12 mr-3 absolute right-0 cursor-pointer",onClick:function(){i({type:_})}}),Object(h.jsxs)("p",{className:"text-white absolute top-16 right-2 font-bold ",children:["Welcome ",c]})]})]})},U=n(27),k="GET_MOVIES_REQUEST",R="GET_MOVIES_SUCCESS",C="GET_MOVIES_FAILURE",T=function(e){return function(t){return t({type:k}),j()({method:"get",url:"https://api.themoviedb.org/3".concat(e.fetchUrl)}).then((function(n){t(function(e,t){return{type:R,payload:Object(U.a)({},t,e)}}(n.data.results,e.title))})).catch((function(e){t(function(e){return{type:C,payload:e}}(e))}))}},A=n(30),G=n.n(A),M=n(45),B=n.n(M),P=n(46),F=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(s.b)(),c=r.a.useState(""),o=Object(g.a)(c,2),l=o[0],d=o[1];r.a.useEffect((function(){i(T({fetchUrl:n,title:t}))}),[n,i,t]);var u=Object(s.c)((function(e){return e.movies.moviesList}));console.log(u);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"text-white text-3xl p-2 font-extrabold",children:Object(h.jsx)("p",{children:t})}),Object(h.jsx)("div",{className:G.a.row_posters,children:u&&u[t]&&u[t].map((function(e){return Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(a?e.poster_path:e.backdrop_path),alt:e.original_name,className:"mr-6 transition duration-500 transform  hover:scale-110 rounded-md shadow-lg cursor-pointer object-contain",onClick:function(){return function(e){l?d(""):B()(e.title||"").then((function(e){var t=new URLSearchParams(new URL(e).search);d(t.get("v"))})).catch((function(e){alert("Temporarily unavailable")}))}(e)}},e.id)}))}),l&&Object(h.jsx)(P.a,{videoId:l,opts:{height:"390",width:"100%",playerVar:{autoplay:1}}})]})},V=function(){return Object(s.c)((function(e){return e.auth.isAuth}))?Object(h.jsxs)("div",{className:"bg-black",children:[Object(h.jsx)(p,{}),Object(h.jsx)(F,{title:"NETFLIX ORIGINALS",fetchUrl:"/discover/tv?api_key=dd229825107a92713d83a649e77aece1&with_networks=213",isLargeRow:!0}),Object(h.jsx)(F,{title:"Trending Now",fetchUrl:"/trending/all/week?api_key=dd229825107a92713d83a649e77aece1&language=en-US"}),Object(h.jsx)(F,{title:"Top Rated",fetchUrl:"/movie/top_rated?api_key=dd229825107a92713d83a649e77aece1&language=en-US"}),Object(h.jsx)(F,{title:"Action Movies",fetchUrl:"/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=28"}),Object(h.jsx)(F,{title:"Comedy Movies",fetchUrl:"/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=35"}),Object(h.jsx)(F,{title:"Horror Movies",fetchUrl:"/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=27"}),Object(h.jsx)(F,{title:"Romance Movies",fetchUrl:"/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=10749"}),Object(h.jsx)(F,{title:"Documentaries",fetchUrl:"/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=99"}),Object(h.jsx)(I,{})]}):Object(h.jsx)(o.a,{to:"/starting"})},W=n(33),D=n.n(W),J=n.p+"static/media/Netflix-Logo-removebg-preview.491ab625.png",Q=function(){var e=r.a.useState(""),t=Object(g.a)(e,2),n=t[0],a=t[1],i=r.a.useState(""),c=Object(g.a)(i,2),o=c[0],l=c[1],d=Object(s.b)();return Object(h.jsxs)("div",{className:"absolute top-0 bottom-0 right-0 left-0 m-auto w-80 md:w-96 h-96 bg-transparent",children:[Object(h.jsx)("h1",{className:"text-white text-4xl pl-10 md:pl-16 pt-12",children:"Sign In"}),Object(h.jsx)("input",{type:"text","ng-model":"email",required:"",placeholder:"Email Address",className:"mt-6 ml-8 md:ml-16 h-12 p-1 w-9/12 md:w-8/12 rounded-md focus:outline-none",value:n,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("input",{type:"Password","ng-model":"pwd",required:"",placeholder:"Password",className:"mt-4 ml-8 md:ml-16 h-12 p-1 w-9/12 md:w-8/12 rounded-md focus:outline-none",value:o,onChange:function(e){return l(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"button",value:"Sign In",className:"mt-6 ml-8 md:ml-16 h-12 p-1 rounded-md w-9/12 md:w-8/12 bg-red-700 text-white cursor-pointer",onClick:function(e){e.preventDefault(),d(E({email:n,password:o}))}}),Object(h.jsxs)("p",{className:"text-gray-500 md:pl-16 pl-8 text-sm mt-5",children:["New to Netflix? ",Object(h.jsx)("span",{className:"text-white cursor-pointer hover:underline",onClick:function(){var e;d((e={email:n,password:o},function(t){t({type:"REGISTER_REQUEST"}),O.createUserWithEmailAndPassword(e.email,e.password).then((function(e){t({type:"RESGITER_SUCCESS",payload:"Register Successful"}),alert("Register Successful")})).catch((function(e){t(function(e){return{type:"REGISTER_FAILURE",payload:e}}(e.message)),alert(e.message)}))}))},children:"Sign up now"})]})]})},X=function(){var e=r.a.useState(!1),t=Object(g.a)(e,2),n=t[0],a=t[1];if(Object(s.c)((function(e){return e.auth.isAuth})))return Object(h.jsx)(o.a,{to:"/"});return Object(h.jsxs)("div",{className:D.a.starting__screen,style:{backgroundImage:'url("https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/8ed3a98a-e2c2-488d-9583-93634199485d/IN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg")'},children:[Object(h.jsxs)("div",{className:"flex justify-between items-center w-full fixed top-0",children:[Object(h.jsx)("img",{src:J,alt:"netflix logo",className:"w-48"}),Object(h.jsx)("div",{className:"text-white w-24 bg-red-700 flex justify-center items-center text-xl font-light rounded-md p-2 mr-4 cursor-pointer",onClick:function(){a(!0)},children:Object(h.jsx)("p",{children:"Sign In"})})]}),n?Object(h.jsx)(Q,{}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"absolute  md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 h-3/6 top-0 left-0 bottom-0 right-0 m-auto",children:[Object(h.jsx)("p",{className:"text-center text-4xl md:text-6xl text-white font-bold",children:"Unlimited movies, TV"}),Object(h.jsx)("p",{className:"text-center text-4xl md:text-6xl text-white font-bold",children:"shows and more."}),Object(h.jsx)("p",{className:"text-center text-white text-lg md:text-3xl mt-2",children:"Watch anywhere. Cancel anytime."}),Object(h.jsx)("p",{className:"text-center text-white text-lg mt-6",children:"Ready to watch? Enter your email to create or restart your membership."}),Object(h.jsxs)("div",{className:" w-11/12 md:w-8/12 h-16 m-auto mt-8 flex",children:[Object(h.jsx)("input",{type:"text",placeholder:"Email address",className:"h-full w-8/12 md:w-9/12 p-2 focus: outline-none"}),Object(h.jsx)("div",{className:"w-5/12 md:w-4/12 p-1 h-full bg-red-700 text-white flex justify-center items-center md:text-xl cursor-pointer",onClick:function(){return a(!0)},children:Object(h.jsx)("p",{children:"Get Started"})})]})]})}),Object(h.jsx)("div",{className:D.a.startingScreen__gradient})]})};var q=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:"/",exact:!0,children:Object(h.jsx)(V,{})}),Object(h.jsx)(o.b,{path:"/starting",children:Object(h.jsx)(X,{})})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},z=n(22),Y=n(8),H={bannerImage:{},isLoading:!1,isError:!1},Z=n(49),$={moviesList:{},isLoading:!1,isError:!1},ee={isAuth:!!S("token"),isLoading:!1,isError:!1,email:""},te=Object(z.b)({banner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case l:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0,isError:!1});case d:return Object(Y.a)(Object(Y.a)({},e),{},{bannerImage:a,isLoading:!1,isError:!1});case u:return Object(Y.a)(Object(Y.a)({},e),{},{isError:!1});default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case k:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0,isError:!1});case R:return Object(Y.a)(Object(Y.a)({},e),{},{moviesList:Object(Y.a)(Object(Y.a)({},e.moviesList),a),isLoading:!1,isError:!1});case C:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,isError:!0});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case w:return N("token",a.uid),N("email",a.email),Object(Y.a)(Object(Y.a)({},e),{},{isAuth:!0,isLoading:!1,isError:!1});case v:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!0,isError:!1});case y:return Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,isAuth:!1,isError:!0});case _:return L("token"),L("email"),Object(Y.a)(Object(Y.a)({},e),{},{isLoading:!1,isAuth:!1,isError:!1});default:return e}}}),ne=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c)(Object(z.a)(Z.a)),ae=Object(z.d)(te,ne),re=n(50);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(s.a,{store:ae,children:Object(h.jsx)(re.a,{children:Object(h.jsx)(q,{})})})}),document.getElementById("root")),K()},30:function(e,t,n){e.exports={row_posters:"Row_row_posters__2MjR5"}},33:function(e,t,n){e.exports={starting__screen:"_3LlXLIblV0iOZTfvlT4sBf",startingScreen__gradient:"_7U7GyYCPW0lpKwvvrcIUg"}},55:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.e214bd3e.chunk.js.map