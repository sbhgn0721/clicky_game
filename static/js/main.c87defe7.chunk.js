(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpongeBob",image:"SpongeBob.png"},{id:2,name:"Mr. Krabs",image:"Mr._Krabs.png"},{id:3,name:"Squidward",image:"Squidward.png"},{id:4,name:"Dexter",image:"Dexter.png"},{id:5,name:"Courage",image:"Courage.png"},{id:6,name:"Doug Funnie",image:"Doug_Funnie.png"},{id:7,name:"Bugs Bunny",image:"Bugs_Bunny.png"},{id:8,name:"Johnny Bravo",image:"Johnny_Bravo.png"},{id:9,name:"Tommy Pickles",image:"Tommy_Pickles.png"},{id:10,name:"Rocko",image:"Rockos.png"},{id:11,name:"Captain Planet",image:"Captain_Planet.png"},{id:12,name:"Ickis",image:"ickis.png"}]},,,,,,,,function(e,t,n){e.exports=n(36)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./Bugs_Bunny.png":22,"./Captain_Planet.png":23,"./Courage.png":24,"./Dexter.png":25,"./Doug_Funnie.png":26,"./Johnny_Bravo.png":27,"./Mr._Krabs.png":28,"./Rockos.png":29,"./SpongeBob.png":30,"./Squidward.png":31,"./Tommy_Pickles.png":32,"./ickis.png":33,"./jumbotron-background.png":34};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=21},function(e,t,n){e.exports=n.p+"static/media/Bugs_Bunny.92686f4c.png"},function(e,t,n){e.exports=n.p+"static/media/Captain_Planet.c396feaf.png"},function(e,t,n){e.exports=n.p+"static/media/Courage.4bfe4f7f.png"},function(e,t,n){e.exports=n.p+"static/media/Dexter.9841fb6b.png"},function(e,t,n){e.exports=n.p+"static/media/Doug_Funnie.f845edcc.png"},function(e,t,n){e.exports=n.p+"static/media/Johnny_Bravo.d320b495.png"},function(e,t,n){e.exports=n.p+"static/media/Mr._Krabs.7bc09bfc.png"},function(e,t,n){e.exports=n.p+"static/media/Rockos.e8dc09c9.png"},function(e,t,n){e.exports=n.p+"static/media/SpongeBob.1ee2723f.png"},function(e,t,n){e.exports=n.p+"static/media/Squidward.691be0cf.png"},function(e,t,n){e.exports=n.p+"static/media/Tommy_Pickles.141b3dcd.png"},function(e,t,n){e.exports=n.p+"static/media/ickis.7d61ed40.png"},function(e,t,n){e.exports=n.p+"static/media/jumbotron-background.b9da2244.png"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),i=n.n(c),o=(n(15),n(4)),s=n(5),u=n(7),m=n(6),l=n(8);n(16),n(17);var g=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top "},r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-item",id:"game-name"},r.a.createElement("h2",null," Clicky Game")),r.a.createElement("li",{className:"nav-item",id:"result"},r.a.createElement("h2",null,e.guessedResult)),r.a.createElement("li",{className:"nav-item",id:"score"},r.a.createElement("h2",null,"Score: ",e.currentScore," | Top Score: ",e.topScore," "))))},d=(n(18),function(){return r.a.createElement("div",{className:"card",id:"footer-card"},r.a.createElement("div",{className:"card-body",id:"footer-body"}),r.a.createElement("div",{className:"card-footer",id:"footer"},r.a.createElement("p",null,"Clicky Game ",r.a.createElement("i",{className:"fab fa-react",id:"react-logo"}))))}),p=(n(19),function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("p",{id:"title"},"Clicky Game"),r.a.createElement("p",{id:"description"},"Click on an image to earn points, but don't click on any more than once!"))});n(20);var f=function(e){return r.a.createElement("div",{className:"card",onClick:function(){return e.imageClick(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:n(21)("./"+e.image),alt:e.image.replace(".jpg","")})))};n(35);var b=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},k=n(1);var v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={friends:k,guessedResult:"",currentScore:0,topScore:0,clickedImage:[]},n.imageClick=function(e){-1===n.state.clickedImage.indexOf(e)?(n.scoreIncrement(),n.setState({clickedImage:n.state.clickedImage.concat(e)})):n.gameReset()},n.scoreIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,guessedResult:"You guessed correctly!"}),e>=n.state.topScore&&n.setState({topScore:e}),12===e&&n.setState({guessedResult:"You Win!!!"},function(){alert("You win, game will be restart")||this.setState({currentScore:0,clickedImage:[]})}),n.shuffleImages()},n.gameReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,guessedResult:"You Lost!!!",clickedImage:[]}),n.shuffleImages()},n.shuffleImages=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(k);n.setState({friends:e})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{currentScore:this.state.currentScore,topScore:this.state.topScore,guessedResult:this.state.guessedResult}),r.a.createElement(p,null),r.a.createElement(b,null,this.state.friends.map(function(t){return r.a.createElement(f,{imageClick:e.imageClick,scoreIncrement:e.scoreIncrement,gameReset:e.gameReset,shuffleImages:e.shuffleImages,image:t.image,key:t.id,id:t.id})})),r.a.createElement(d,null))}}]),t}(r.a.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c87defe7.chunk.js.map