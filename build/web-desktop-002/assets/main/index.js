System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,l,r,a,g,h,c,p,C,d,m,u,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,c=t.Label,p=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,T=t.Component}],execute:function(){var L,f,M,b,v,x,E,S,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(L=A("internal.DebugViewRuntimeControl"),f=y(r),M=y(r),b=y(r),L((E=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",E,n(e)),i(e,"singleModeToggle",S,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct TRT","Env TRT","TRT All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","TRT","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[p.WHITE,p.BLACK,p.RED,p.GREEN,p.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var T=h(this.EnableAllCompositeModeButton.getChildByName("Label"));T.setPosition(i+(u>0?450:150),n,0),T.setScale(.75,.75,.75),T.parent=r;var L=T.getComponent(c);L.string=u?"----------Composite Mode----------":"----------Single Mode----------",L.color=p.WHITE,L.overflow=0,this.labelComponentList[this.labelComponentList.length]=L}n-=20;for(var f=0,M=0;M<this.strSingle.length;M++,f++){M===this.strSingle.length>>1&&(i+=200,f=0);var b=M?h(this.singleModeToggle):this.singleModeToggle;b.setPosition(i,n-20*f,0),b.setScale(.5,.5,.5),b.parent=this.singleModeToggle.parent;var v=b.getComponentInChildren(C);v.string=this.strSingle[M],this.textComponentList[this.textComponentList.length]=v,this.textContentList[this.textContentList.length]=v.string,b.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[M]=b}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var x=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=x;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+90,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.changeTextColor,this),E.parent=l,(x=E.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=x;var S=h(this.EnableAllCompositeModeButton);S.setPosition(i+200,n,0),S.setScale(.5,.5,.5),S.on(m.EventType.CLICK,this.hideUI,this),S.parent=this.node.parent,(x=S.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=x,this.hideButtonLabel=x,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(T)).prototype,"compositeModeToggle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(x.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(x.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs","./GameView.ts","./index.mjs_cjs=&original=.js","./index.js"],(function(e){"use strict";var t,i,l,n,o,r,a,s,u,m,c,h,g,f,p,d,b,v,y,N,w,L,z,B,G;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,l=e.initializerDefineProperty,n=e.assertThisInitialized,o=e.asyncToGenerator,r=e.regeneratorRuntime},function(e){a=e.cclegacy,s=e._decorator,u=e.Node,m=e.Label,c=e.Button,h=e.Sprite,g=e.AudioClip,f=e.Slider,p=e.Prefab,d=e.AudioSource,b=e.director,v=e.Component,y=e.Color,N=e.instantiate,w=e.VerticalTextAlignment,L=e.Vec3},function(e){z=e.SudokuCreator},function(e){B=e.GameView},null,function(e){G=e.default}],execute:function(){var S,T,V,E,C,M,A,P,I,O,x,J,F,k,D,R,H,K,_,j,W,U,Z,q,Q,X,Y,$,ee,te,ie,le,ne,oe,re,ae,se,ue,me,ce,he,ge,fe,pe,de,be,ve,ye,Ne,we,Le,ze,Be,Ge,Se,Te,Ve,Ee,Ce,Me,Ae;e({loadScene:function(e){throw new Error("Function not implemented.")},runScene:function(e){throw new Error("Function not implemented.")}}),a._RF.push({},"71825sbmsRJJLmlOznizpuZ","GameController",void 0);var Pe=s.ccclass,Ie=s.property;e("GameController",(S=Pe("GameController"),T=Ie(B),V=Ie(u),E=Ie(u),C=Ie(m),M=Ie(u),A=Ie(u),P=Ie(c),I=Ie(c),O=Ie(c),x=Ie(c),J=Ie(c),F=Ie(m),k=Ie(h),D=Ie(g),R=Ie(g),H=Ie(g),K=Ie(g),_=Ie(h),j=Ie(c),W=Ie(u),U=Ie(f),Z=Ie(f),q=Ie(m),Q=Ie(m),X=Ie(u),Y=Ie(m),$=Ie(m),ee=Ie(p),te=Ie(p),S((ne=t((le=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,l(t,"gameView",ne,n(t)),l(t,"boardNode",oe,n(t)),l(t,"boardEffectNode",re,n(t)),l(t,"numberLabels",ae,n(t)),l(t,"gameOver",se,n(t)),l(t,"levelPanel",ue,n(t)),l(t,"rePlay",me,n(t)),l(t,"newGame",ce,n(t)),l(t,"easyLevel",he,n(t)),l(t,"mediumLevel",ge,n(t)),l(t,"hardLevel",fe,n(t)),l(t,"playerFault",pe,n(t)),l(t,"bgNodeValue",de,n(t)),l(t,"volumeStart",be,n(t)),l(t,"volumeSelectNode",ve,n(t)),l(t,"volumeLose",ye,n(t)),l(t,"volumeWinGame",Ne,n(t)),l(t,"bgMain",we,n(t)),l(t,"settingVolumeAll",Le,n(t)),l(t,"settingNode",ze,n(t)),l(t,"settingVolumeBg",Be,n(t)),l(t,"settingVolumeEffect",Ge,n(t)),l(t,"timerLabel",Se,n(t)),l(t,"levelLabel",Te,n(t)),l(t,"winGame",Ve,n(t)),l(t,"bestTime",Ee,n(t)),l(t,"bestTimeLevle",Ce,n(t)),l(t,"frameNode",Me,n(t)),l(t,"frameNodeNum",Ae,n(t)),t.selectedNode=null,t.puzzleGame=[],t.solutionGame=[],t.redNumber=0,t.difficultyLevel=void 0,t.timeElapsed=0,t.timeBestArr=[],t.timeBestArr1=[],t.timeBestArr2=[],t.volumeBg=[],t.volumeEffect=[],t.gameClient=void 0,t.matchId=void 0,t.currentPos=null,t}i(t,e);var a=t.prototype;return a.start=function(){var e=o(r().mark((function e(){var t,i,l,n,o,a=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.gameClient){e.next=4;break}return this.gameClient=new G("642d35b6dc7fdb5a28069ce7","1258a0fa-9b29-4162-8c27-73fa014545f7"),e.next=4,this.gameClient.initAsync().then((function(){console.log(a.gameClient.match)})).catch((function(e){return console.log(e)}));case 4:return e.next=6,this.gameClient.match.startMatch().then((function(e){a.matchId=e.matchId})).catch((function(e){return console.log(e)}));case 6:(t=localStorage.getItem("bestTime"))&&(this.timeBestArr=JSON.parse(t),this.bestTime.string="Thời gian nhanh nhất: "+Math.min.apply(Math,this.timeBestArr)),(i=localStorage.getItem("bestTime1"))&&(this.timeBestArr1=JSON.parse(i),this.bestTime.string="Thời gian nhanh nhất: "+Math.min.apply(Math,this.timeBestArr1)),(l=localStorage.getItem("bestTime2"))&&(this.timeBestArr2=JSON.parse(l),this.bestTime.string="Thời gian nhanh nhất: "+Math.min.apply(Math,this.timeBestArr2)),(n=localStorage.getItem("volumeBg"))&&(this.volumeBg=JSON.parse(n),this.bgMain.getComponent(d).volume=this.volumeBg[this.volumeBg.length-1],this.settingVolumeBg.progress=this.volumeBg[this.volumeBg.length-1]),console.log(this.settingVolumeBg.progress),(o=localStorage.getItem("volumeEffect"))&&(this.volumeEffect=JSON.parse(o),this.settingVolumeEffect.progress=this.volumeEffect[this.volumeEffect.length-1]);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),a.onLoad=function(){this.levelPanel.active=!0,console.log(this.puzzleGame),console.log(this.solutionGame)},a.startGamePlayer=function(){this.gameView.StartGame.active=!1,this.volumeStart.play()},a.updateTimer=function(){this.timeElapsed++,this.timerLabel.string="Thời gian : "+this.timeElapsed+" giây"},a.volumeGameSetting=function(){this.bgMain.getComponent(d).volume=this.settingVolumeBg.progress;var e=this.settingVolumeBg.progress;this.volumeBg.push(e),localStorage.setItem("volumeBg",JSON.stringify(this.volumeBg))},a.displayVolumeSetting=function(){this.settingNode.active=!0,b.pause()},a.volumeGameEffect=function(){this.volumeLose.getVolume(),this.volumeLose.setVolume(this.settingVolumeEffect.progress),this.volumeWinGame.getVolume(),this.volumeWinGame.setVolume(this.settingVolumeEffect.progress),this.volumeSelectNode.getVolume(),this.volumeSelectNode.setVolume(this.settingVolumeEffect.progress),this.volumeStart.getVolume(),this.volumeStart.setVolume(this.settingVolumeEffect.progress);var e=this.settingVolumeEffect.progress;this.volumeEffect.push(e),localStorage.setItem("volumeEffect",JSON.stringify(this.volumeEffect))},a.rePlayGame=function(){b.loadScene("MainGame")},a.continueGame=function(){b.resume(),this.settingNode.active=!1},a.displayLevelPanel=function(){this.levelPanel.active=!0},a.update=function(){.1==this.difficultyLevel?(this.bestTimeLevle.string="Độ Khó: DỄ",this.bestTime.string="Thời gian nhanh nhất : "+Math.min.apply(Math,this.timeBestArr)):.2==this.difficultyLevel?(this.bestTimeLevle.string="Độ Khó: TRUNG BÌNH",this.bestTime.string="Thời gian nhanh nhất: "+Math.min.apply(Math,this.timeBestArr1)):.3==this.difficultyLevel&&(this.bestTimeLevle.string="Độ Khó: KHÓ",this.bestTime.string="Thời gian nhanh nhất: "+Math.min.apply(Math,this.timeBestArr2))},a.easyLevelGame=function(){this.difficultyLevel=.1,this.createPuzzleBoard(),this.levelPanel.active=!1,this.bgNodeValue.node.active=!0,this.schedule(this.updateTimer,1),this.levelLabel.string="Độ khó : DỄ",this.newGame.node.active=!0},a.mediumLevelGame=function(){this.difficultyLevel=.3,this.createPuzzleBoard(),this.levelPanel.active=!1,this.bgNodeValue.node.active=!0,this.schedule(this.updateTimer,1),this.levelLabel.string="Độ khó : TRUNG BÌNH",this.newGame.node.active=!0},a.hardLevelGame=function(){this.difficultyLevel=.5,this.createPuzzleBoard(),this.levelPanel.active=!1,this.bgNodeValue.node.active=!0,this.schedule(this.updateTimer,1),this.levelLabel.string="Độ khó : KHÓ",this.newGame.node.active=!0},a.createPuzzleBoard=function(){for(var e=this,t=new z({childMatrixWidth:3}).createSudoku(this.difficultyLevel),i=0;i<t.puzzle.length;i++)this.puzzleGame.push(t.puzzle[i]+1);for(var l=0;l<t.solution.length;l++)this.solutionGame.push(t.solution[l]+1);for(var n=0,o=[],r=function(t){o.push([]);for(var i=function(i){o[t].push({filled:!1});var l=e.puzzleGame[9*t+i],r=new u("ValueGame"+(9*t+i));r.setPosition(55*t,55*i),e.boardNode.addChild(r);var a=r.addComponent(m);a.string=0===l?"    ":l.toString(),a.color=y.BLACK,0===l&&n++;var s={};r.on(u.EventType.TOUCH_END,(function(){if(0===l&&(e.selectedNode=r,!s[r.name])){s[r.name]=!0;var n=N(e.frameNodeNum);n.setPosition(r.position),r.parent.addChild(n);for(var o=Math.floor(r.position.x/55),a=function(){if(u!==o){var t=e.boardNode.getChildByName("ValueGame"+(9*u+i)),l=N(e.frameNode);l.setPosition(t.position),t.parent.addChild(l),setTimeout((function(){l.destroy()}),1e3)}},u=0;u<9;u++)a();for(var m=Math.floor(r.position.y/55),c=function(){if(h!==m){var i=e.boardNode.getChildByName("ValueGame"+(9*t+h)),l=N(e.frameNode);l.setPosition(i.position),i.parent.addChild(l),setTimeout((function(){l.destroy()}),1e3)}},h=0;h<9;h++)c();for(var g=3*Math.floor(o/3),f=3*Math.floor(m/3),p=g;p<g+3;p++)for(var d=function(){if(p!==o&&b!==m){var t=e.boardNode.getChildByName("ValueGame"+(9*p+b)),i=N(e.frameNode);i.setPosition(t.position),t.parent.addChild(i),setTimeout((function(){i.destroy()}),1e3)}},b=f;b<f+3;b++)d()}}));var c=new u("NumberValueLabel"),h=c.addComponent(m);h.string="  "+(t+1)+"  ",h.color=y.BLACK,h.verticalAlign=w.CENTER,c.parent=e.node,c.position=new L(t%3*70+210,-60*Math.floor(t/3),0),e.numberLabels.push(h),c.on(u.EventType.TOUCH_END,(function(){if(e.selectedNode){var t=parseInt(h.string);if(!isNaN(t)){e.volumeSelectNode.play();var i=Math.floor(e.selectedNode.position.x/55),l=Math.floor(e.selectedNode.position.y/55),r=9*i+l,a=t===e.solutionGame[r];console.log(a);var s=e.selectedNode.getComponent(m);o[i][l].filled||(a?(s.color=y.BLUE,n--,o[i][l].filled=!0,console.log(n),0===n&&(console.log("winner"),e.volumeWinGame.play(),e.bgMain.getComponent(d).pause(),.1==e.difficultyLevel&&(e.timeBestArr.push(e.timeElapsed),localStorage.setItem("bestTime",JSON.stringify(e.timeBestArr))),.2==e.difficultyLevel&&(e.timeBestArr1.push(e.timeElapsed),localStorage.setItem("bestTime1",JSON.stringify(e.timeBestArr1))),.3==e.difficultyLevel&&(e.timeBestArr2.push(e.timeElapsed),localStorage.setItem("bestTime2",JSON.stringify(e.timeBestArr2))),e.winGame.active=!0,e.gameClient.match.completeMatch(e.matchId,{score:e.timeElapsed}).then((function(e){})).catch((function(e){return console.log(e)})))):(s.color=y.RED,e.redNumber++,e.playerFault.string="Lỗi: "+e.redNumber+"/3",e.playerFault.node.active=!0,4==e.redNumber&&(console.log("thua rồi nhé !!!"),e.gameOver.active=!0,e.playerFault.string="Lỗi 3/3",e.volumeLose.play(),e.bgMain.getComponent(d).pause(),e.gameClient.match.completeMatch(e.matchId,{score:e.timeElapsed}).then((function(e){})).catch((function(e){return console.log(e)}))),5==e.redNumber&&(e.redNumber--,e.playerFault.string="Lỗi 3/3"))),s.string=t.toString()}}}))},l=0;l<9;l++)i(l)},a=0;a<9;a++)r(a)},t}(v)).prototype,"gameView",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),oe=t(le.prototype,"boardNode",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),re=t(le.prototype,"boardEffectNode",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ae=t(le.prototype,"numberLabels",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),se=t(le.prototype,"gameOver",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ue=t(le.prototype,"levelPanel",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),me=t(le.prototype,"rePlay",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ce=t(le.prototype,"newGame",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),he=t(le.prototype,"easyLevel",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ge=t(le.prototype,"mediumLevel",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),fe=t(le.prototype,"hardLevel",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pe=t(le.prototype,"playerFault",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),de=t(le.prototype,"bgNodeValue",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),be=t(le.prototype,"volumeStart",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ve=t(le.prototype,"volumeSelectNode",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ye=t(le.prototype,"volumeLose",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ne=t(le.prototype,"volumeWinGame",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),we=t(le.prototype,"bgMain",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Le=t(le.prototype,"settingVolumeAll",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ze=t(le.prototype,"settingNode",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Be=t(le.prototype,"settingVolumeBg",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ge=t(le.prototype,"settingVolumeEffect",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Se=t(le.prototype,"timerLabel",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Te=t(le.prototype,"levelLabel",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ve=t(le.prototype,"winGame",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ee=t(le.prototype,"bestTime",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ce=t(le.prototype,"bestTimeLevle",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Me=t(le.prototype,"frameNode",[ee],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ae=t(le.prototype,"frameNodeNum",[te],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=le))||ie));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameView.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,a,i,n,s,o,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.createClass,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){s=e.cclegacy,o=e._decorator,c=e.Node,l=e.Component}],execute:function(){var u,p,m,f,G;s._RF.push({},"4b0c4GCCFJBRrlINHLza3Pw","GameView",void 0);var y=o.ccclass,h=o.property;e("GameView",(u=y("GameView"),p=h(c),u((G=t((f=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,i(t,"startGame",G,n(t)),t}return r(t,e),a(t,[{key:"StartGame",get:function(){return this.startGame}},{key:"GameStart",set:function(e){this.startGame=e}}]),t}(l)).prototype,"startGame",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=f))||m));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameController.ts","./GameView.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});