"use strict";(self.webpackChunkroadmap_symfony=self.webpackChunkroadmap_symfony||[]).push([[9678],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,u(u({ref:r},l),{},{components:t})):n.createElement(f,u({ref:r},l))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=d;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:s,u[1]=i;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},220:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=t(7462),s=t(3366),o=(t(7294),t(3905)),u=["components"],i={sidebar_position:2},a="Un serveur web",c={unversionedId:"bases-d-internet/un-serveur-web",id:"bases-d-internet/un-serveur-web",isDocsHomePage:!1,title:"Un serveur web",description:"Un serveur est un dispositif informatique qui distribue des services. C'est un ordinateur (oui oui, comme celui que vous avez chez vous !) qui poss\xe8de une carte r\xe9seau et un processeur tr\xe8s puissants. En r\xe8gle g\xe9n\xe9ral, son syst\xe8me d'exploitation est tr\xe8s souvent une distribution Linux, comme Debian connu pour sa stabilit\xe9, mais il peut aussi \xeatre sous Windows ou \xe9galement tourner sur du mat\xe9riel Apple et dans ce cas, son syst\xe8me d'exploitation sera OSX Server.",source:"@site/docs/02-bases-d-internet/02-un-serveur-web.md",sourceDirName:"02-bases-d-internet",slug:"/bases-d-internet/un-serveur-web",permalink:"/Roadmap-Dev-Symfony/docs/bases-d-internet/un-serveur-web",editUrl:"https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/docs/02-bases-d-internet/02-un-serveur-web.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Les r\xe9seaux d'internet",permalink:"/Roadmap-Dev-Symfony/docs/bases-d-internet/les-reseaux-d-internet"},next:{title:"Variables, op\xe9rateurs et flux d'entr\xe9e/sortie",permalink:"/Roadmap-Dev-Symfony/docs/bases-algorithme/variables-operateurs-flux-entree-et-sortie"}},l=[],p={toc:l};function d(e){var r=e.components,t=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"un-serveur-web"},"Un serveur web"),(0,o.kt)("p",null,"Un serveur est un dispositif informatique qui distribue des services. C'est un ordinateur (oui oui, comme celui que vous avez chez vous !) qui poss\xe8de une carte r\xe9seau et un processeur tr\xe8s puissants. En r\xe8gle g\xe9n\xe9ral, son syst\xe8me d'exploitation est tr\xe8s souvent une distribution Linux, comme Debian connu pour sa stabilit\xe9, mais il peut aussi \xeatre sous Windows ou \xe9galement tourner sur du mat\xe9riel Apple et dans ce cas, son syst\xe8me d'exploitation sera OSX Server."),(0,o.kt)("p",null,"Il dispose de logiciels comme Apache ou NGINX qui lui permettent de renvoyer une r\xe9ponse HTTP dans le cas o\xf9 quelqu'un le consulte depuis son navigateur. Mais il doit \xeatre \xe9galement capable de stocker des donn\xe9es au travers de bases de donn\xe9es. Enfin, si on veut le s\xe9curiser contre les m\xe9chants hackeurs, il faudra lui donner une \"armure\" virtuelle, et l\xe0 encore certains logiciels existent afin de s'en pr\xe9munir."),(0,o.kt)("p",null,"Bref, vous l'avez compris. Un serveur est capable de faire beaucoup de choses et c'est un noeud essentiel dans un r\xe9seau informatique. C'est lui qui s'occupe de distribuer les services auquels les autres ordinateurs / utilisateurs ont acc\xe8s."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/fr/docs/Learn/Common_questions/What_is_a_web_server"},"Texte - Qu'est-ce qu'un serveur web ?"))))}d.isMDXComponent=!0}}]);