System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index.mjs","./GameView.ts"],(function(e){"use strict";var t,i,l,o,n,r,a,u,s,m,c,p,b,g,d,f,v,h,y,z;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,l=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,r=e._decorator,a=e.Node,u=e.Label,s=e.Button,m=e.Sprite,c=e.AudioClip,p=e.Slider,b=e.AudioSource,g=e.director,d=e.Color,f=e.VerticalTextAlignment,v=e.Vec3,h=e.Component},function(e){y=e.SudokuCreator},function(e){z=e.GameView}],execute:function(){var w,L,N,G,V,S,E,P,T,B,C,A,M,F,O,D,k,R,W,_,x,H,I,J,U,K,j,Z,q,Q,X,Y,$,ee,te,ie,le,oe,ne,re,ae,ue,se,me,ce,pe,be,ge,de,fe,ve;e({loadScene:function(e){throw new Error("Function not implemented.")},runScene:function(e){throw new Error("Function not implemented.")}}),n._RF.push({},"71825sbmsRJJLmlOznizpuZ","GameController",void 0);var he=r.ccclass,ye=r.property;e("GameController",(w=he("GameController"),L=ye(z),N=ye(a),G=ye(u),V=ye(a),S=ye(a),E=ye(s),P=ye(s),T=ye(s),B=ye(s),C=ye(u),A=ye(m),M=ye(c),F=ye(c),O=ye(c),D=ye(c),k=ye(m),R=ye(s),W=ye(a),_=ye(p),x=ye(p),H=ye(u),I=ye(u),J=ye(a),U=ye(u),w((Z=t((j=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,l(t,"gameView",Z,o(t)),l(t,"boardNode",q,o(t)),l(t,"numberLabels",Q,o(t)),l(t,"gameOver",X,o(t)),l(t,"levelPanel",Y,o(t)),l(t,"rePlay",$,o(t)),l(t,"easyLevel",ee,o(t)),l(t,"mediumLevel",te,o(t)),l(t,"hardLevel",ie,o(t)),l(t,"playerFault",le,o(t)),l(t,"bgNodeValue",oe,o(t)),l(t,"volumeStart",ne,o(t)),l(t,"volumeSelectNode",re,o(t)),l(t,"volumeLose",ae,o(t)),l(t,"volumeWinGame",ue,o(t)),l(t,"bgMain",se,o(t)),l(t,"settingVolumeAll",me,o(t)),l(t,"settingNode",ce,o(t)),l(t,"settingVolumeBg",pe,o(t)),l(t,"settingVolumeEffect",be,o(t)),l(t,"timerLabel",ge,o(t)),l(t,"levelLabel",de,o(t)),l(t,"winGame",fe,o(t)),l(t,"bestTime",ve,o(t)),t.selectedNode=null,t.puzzleGame=[],t.solutionGame=[],t.redNumber=0,t.difficultyLevel=void 0,t.timeElapsed=0,t.timeBestArr=[],t}i(t,e);var n=t.prototype;return n.start=function(){var e=localStorage.getItem("bestTime");e&&(this.timeBestArr=JSON.parse(e),this.bestTime.string="bestTime: "+Math.min.apply(Math,this.timeBestArr))},n.onLoad=function(){this.levelPanel.active=!0,console.log(this.puzzleGame),console.log(this.solutionGame)},n.startGamePlayer=function(){this.gameView.StartGame.active=!1,this.volumeStart.play()},n.updateTimer=function(){this.timeElapsed++,this.timerLabel.string="Thời gian : "+this.timeElapsed+" giây"},n.volumeGameSetting=function(){this.bgMain.getComponent(b).volume=this.settingVolumeBg.progress},n.displayVolumeSetting=function(){this.settingNode.active=!0,g.pause()},n.volumeGameEffect=function(){this.volumeLose.getVolume(),this.volumeLose.setVolume(this.settingVolumeEffect.progress),this.volumeWinGame.getVolume(),this.volumeWinGame.setVolume(this.settingVolumeEffect.progress),this.volumeSelectNode.getVolume(),this.volumeSelectNode.setVolume(this.settingVolumeEffect.progress)},n.rePlayGame=function(){g.loadScene("MainGame")},n.continueGame=function(){g.resume(),this.settingNode.active=!1},n.displayLevelPanel=function(){this.levelPanel.active=!0},n.easyLevelGame=function(){this.difficultyLevel=.1,this.createPuzzleBoard(),this.levelPanel.active=!1,this.bgNodeValue.node.active=!0,this.schedule(this.updateTimer,1),this.levelLabel.string="Độ khó : DỄ"},n.mediumLevelGame=function(){this.difficultyLevel=.2,this.createPuzzleBoard(),this.levelPanel.active=!1,this.bgNodeValue.node.active=!0,this.schedule(this.updateTimer,1),this.levelLabel.string="Độ khó : TRUNG BÌNH"},n.hardLevelGame=function(){this.difficultyLevel=.3,this.createPuzzleBoard(),this.levelPanel.active=!1,this.bgNodeValue.node.active=!0,this.schedule(this.updateTimer,1),this.levelLabel.string="Độ khó : KHÓ"},n.createPuzzleBoard=function(){for(var e=this,t=new y({childMatrixWidth:3}).createSudoku(this.difficultyLevel),i=0;i<t.puzzle.length;i++)this.puzzleGame.push(t.puzzle[i]+1);for(var l=0;l<t.solution.length;l++)this.solutionGame.push(t.solution[l]+1);for(var o=0,n=function(){for(var t=function(){var t=e.puzzleGame[9*r+i],l=new a("ValueGame");l.setPosition(55*r,55*i),e.boardNode.addChild(l);var n=l.addComponent(u);n.string=0===t?"    ":t.toString(),n.color=d.BLACK,0===t&&o++,l.on(a.EventType.TOUCH_END,(function(){0===t&&(e.selectedNode=l,n.string="-",console.log(o))}))},i=0;i<9;i++)t();var l=new a("NumberValueLabel"),n=l.addComponent(u);n.string="  "+(r+1)+"  ",n.color=d.BLACK,n.verticalAlign=f.CENTER,l.parent=e.node,l.position=new v(r%3*100+180,-60*Math.floor(r/3),0),e.numberLabels.push(n),l.on(a.EventType.TOUCH_END,(function(){if(e.selectedNode){var t=parseInt(n.string);if(!isNaN(t)){e.volumeSelectNode.play();var i=9*Math.floor(e.selectedNode.position.x/55)+Math.floor(e.selectedNode.position.y/55),l=t===e.solutionGame[i];console.log(l);var r=e.selectedNode.getComponent(u);l?(r.color=d.BLUE,o-=1,console.log(o),0===o&&(console.log("winner"),e.timeBestArr.push(e.timeElapsed),localStorage.setItem("bestTime",JSON.stringify(e.timeBestArr)),e.winGame.active=!0,e.volumeWinGame.play())):(r.color=d.RED,e.redNumber++,e.playerFault.string="Lỗi: "+e.redNumber+"/3",e.playerFault.node.active=!0,4===e.redNumber&&(console.log("thua rồi nhé !!!"),e.gameOver.active=!0,e.playerFault.string="Lỗi 3/3",e.volumeLose.play())),r.string=t.toString()}}}))},r=0;r<9;r++)n()},t}(h)).prototype,"gameView",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=t(j.prototype,"boardNode",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=t(j.prototype,"numberLabels",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),X=t(j.prototype,"gameOver",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=t(j.prototype,"levelPanel",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=t(j.prototype,"rePlay",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ee=t(j.prototype,"easyLevel",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),te=t(j.prototype,"mediumLevel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=t(j.prototype,"hardLevel",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),le=t(j.prototype,"playerFault",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),oe=t(j.prototype,"bgNodeValue",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ne=t(j.prototype,"volumeStart",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),re=t(j.prototype,"volumeSelectNode",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ae=t(j.prototype,"volumeLose",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ue=t(j.prototype,"volumeWinGame",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),se=t(j.prototype,"bgMain",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),me=t(j.prototype,"settingVolumeAll",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ce=t(j.prototype,"settingNode",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pe=t(j.prototype,"settingVolumeBg",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),be=t(j.prototype,"settingVolumeEffect",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ge=t(j.prototype,"timerLabel",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),de=t(j.prototype,"levelLabel",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),fe=t(j.prototype,"winGame",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ve=t(j.prototype,"bestTime",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=j))||K));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameView.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,a,i,n,s,o,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,a=e.createClass,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){s=e.cclegacy,o=e._decorator,c=e.Node,l=e.Component}],execute:function(){var u,p,m,f,G;s._RF.push({},"4b0c4GCCFJBRrlINHLza3Pw","GameView",void 0);var y=o.ccclass,h=o.property;e("GameView",(u=y("GameView"),p=h(c),u((G=t((f=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,i(t,"startGame",G,n(t)),t}return r(t,e),a(t,[{key:"StartGame",get:function(){return this.startGame}},{key:"GameStart",set:function(e){this.startGame=e}}]),t}(l)).prototype,"startGame",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=f))||m));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameController.ts","./GameView.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));
