"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function __ZN5Dalye6Engine11loadShadersEv(Larg0){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null,Lgeptoindexphi=0,L$pidx=0,tmp6=null,tmp7=-0.,tmp8=null,tmp9=null,tmp10=null;
	tmp3=new Uint8Array(96);
	L$pidx=0;
	Lgeptoindexphi=0;
	while(1){
		tmp3[L$pidx]=_$pstr$p1[Lgeptoindexphi]|0;
		L$pidx=L$pidx+1|0;
		if((L$pidx|0)!==84){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			continue;
		}
		break;
	}
	tmp3[84]=0;
	tmp6=new Uint8Array(80);
	L$pidx=0;
	Lgeptoindexphi=0;
	while(1){
		tmp6[L$pidx]=_$pstr$p2[Lgeptoindexphi]|0;
		L$pidx=L$pidx+1|0;
		if((L$pidx|0)===71){
			tmp6[71]=0;
			tmp0=new Dalye.Shader(undefined);
			tmp1="basic";
			tmp3=_cheerpCreate_ZN6client6StringC2EPKc(tmp3,0);
			tmp6=_cheerpCreate_ZN6client6StringC2EPKc(tmp6,0);
			tmp0.a0=tmp1;
			tmp7=+_gl.VERTEX_SHADER;
			tmp8=_gl.createShader((+(~~tmp7|0)));
			_gl.shaderSource(tmp8,tmp3);
			_gl.compileShader(tmp8);
			tmp9=_gl.getShaderInfoLog(tmp8);
			if(((tmp9.length)|0)>0){
				tmp10="Given shader error :";
				console.error(tmp10,tmp9);
				throw new Error('Error compiling shader');;
			}
			tmp7=+_gl.FRAGMENT_SHADER;
			tmp2=_gl.createShader((+(~~tmp7|0)));
			_gl.shaderSource(tmp2,tmp6);
			_gl.compileShader(tmp2);
			tmp10=_gl.getShaderInfoLog(tmp2);
			if(((tmp10.length)|0)>0){
				tmp9="Given shader error :";
				console.error(tmp9,tmp10);
				throw new Error('Error compiling shader');;
			}
			tmp10=_gl.createProgram();
			_gl.attachShader(tmp10,tmp8);
			_gl.attachShader(tmp10,tmp2);
			_gl.linkProgram(tmp10);
			tmp9=_gl.getProgramInfoLog(tmp10);
			if(((tmp9.length)|0)>0){
				tmp8="Shader linking error :";
				console.error(tmp8,tmp9);
				throw new Error('Error linking shader');;
			}
			tmp0.a1=tmp10;
			Larg0.a2=tmp0;
			return;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZN5Dalye6Engine12createBufferEv(Larg0){
	var tmp0=null,Lgeptoindexphi=0,tmp2=null,tmp3=-0.,tmp4=null;
	Larg0.a1=_gl.createBuffer();
	tmp0=new Float32Array(9);
	Lgeptoindexphi=0;
	while(1){
		tmp0[Lgeptoindexphi]=__fround(0);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if(tmp0!==tmp0||9!==(0+Lgeptoindexphi|0))continue;
		break;
	}
	tmp0[4]=__fround(.5);
	tmp0[6]=__fround(.5);
	tmp0[7]=__fround(.5);
	tmp2=_gl;
	tmp3=+tmp2.ARRAY_BUFFER;
	tmp2.bindBuffer(tmp3,Larg0.a1);
	tmp2=_gl;
	tmp2.vertexAttribPointer(0,3,+tmp2.FLOAT,!!0,0,0);
	_gl.enableVertexAttribArray(0);
	tmp2=_gl;
	tmp3=+tmp2.ARRAY_BUFFER;
	Lgeptoindexphi=0;
	tmp4=tmp0;
	tmp4=tmp4;
	if((Lgeptoindexphi|0)!==0)tmp4=tmp4.subarray((+(Lgeptoindexphi>>>0)));
	tmp2.bufferData(tmp3,tmp4,+_gl.STATIC_DRAW);
	tmp2=_gl;
	tmp2.bindBuffer(+tmp2.ARRAY_BUFFER,null);
	_gl.disableVertexAttribArray(0);
}
function __ZN5Dalye6Engine4loopEv(Larg0){
	var tmp0=-0.,tmp1=null;
	tmp1=_gl;
	tmp1.clear((+((tmp1.COLOR_BUFFER_BIT)|0)));
	tmp1=_gl;
	tmp1.vertexAttribPointer(0,3,+tmp1.FLOAT,!!0,0,0);
	_gl.enableVertexAttribArray(0);
	tmp1=_gl;
	tmp0=+tmp1.ARRAY_BUFFER;
	tmp1.bindBuffer(tmp0,Larg0.a1);
	tmp1=_gl;
	tmp1.drawArrays(+tmp1.TRIANGLES,0,3);
	tmp1=[{a0:null}];
	tmp1[0].a0=Larg0;
	tmp1=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN5Dalye6Engine4loopEvE3$_2JEEEvPT_DpT0_,tmp1[0]);
	+requestAnimationFrame(tmp1);
}
function __ZN5Dalye6Engine5startEv(Larg0){
	var tmp0=null;
	"canvas";
	tmp0="canvas";
	__ZN5Dalye11GLUtilities6canvasE=document.createElement(tmp0);
	tmp0=document.body;
	tmp0.appendChild(__ZN5Dalye11GLUtilities6canvasE);
	Larg0.a0=__ZN5Dalye11GLUtilities10initializeEPKc();
	_gl.clearColor(0,0,0,1);
	__ZN5Dalye6Engine11loadShadersEv(Larg0);
	_gl.useProgram(Larg0.a2.a1);
	__ZN5Dalye6Engine12createBufferEv(Larg0);
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp0.width=+innerWidth;
		Larg0.a0.height=+innerHeight;
	}
	_gl.viewport(0,0,+innerWidth,+innerHeight);
	__ZN5Dalye6Engine4loopEv(Larg0);
}
function __ZN5Dalye6Engine6resizeEv(Larg0){
	var tmp0=null;
	tmp0=Larg0.a0;
	if(tmp0!==null){
		tmp0.width=+innerWidth;
		Larg0.a0.height=+innerHeight;
	}
	_gl.viewport(0,0,+innerWidth,+innerHeight);
}
function __ZN5Dalye6EngineC1Ev(Larg0){
}
function __ZN5Dalye6Shader3useEv(Larg0){
	_gl.useProgram(Larg0.a1);
}
function __ZN5Dalye6ShaderC1ERKN6client6StringES4_S4_(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=-0.,tmp2=null,tmp3=null,tmp4=null;
	Larg0.a0=Larg1;
	tmp1=+_gl.VERTEX_SHADER;
	tmp2=_gl.createShader((+(~~tmp1|0)));
	_gl.shaderSource(tmp2,Larg2);
	_gl.compileShader(tmp2);
	tmp3=_gl.getShaderInfoLog(tmp2);
	if(((tmp3.length)|0)>0){
		tmp4="Given shader error :";
		console.error(tmp4,tmp3);
		throw new Error('Error compiling shader');;
	}
	tmp1=+_gl.FRAGMENT_SHADER;
	tmp0=_gl.createShader((+(~~tmp1|0)));
	_gl.shaderSource(tmp0,Larg3);
	_gl.compileShader(tmp0);
	tmp4=_gl.getShaderInfoLog(tmp0);
	if(((tmp4.length)|0)>0){
		tmp3="Given shader error :";
		console.error(tmp3,tmp4);
		throw new Error('Error compiling shader');;
	}
	tmp4=_gl.createProgram();
	_gl.attachShader(tmp4,tmp2);
	_gl.attachShader(tmp4,tmp0);
	_gl.linkProgram(tmp4);
	tmp3=_gl.getProgramInfoLog(tmp4);
	if(((tmp3.length)|0)>0){
		tmp2="Shader linking error :";
		console.error(tmp2,tmp3);
		throw new Error('Error linking shader');;
	}
	Larg0.a1=tmp4;
}
function __ZNK5Dalye6Shader7getNameEv(Larg0){
	return Larg0.a0;
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var tmp0=null,Lgeptoindexphi=0,tmp2=null;
	tmp0=String();
	if((Larg0[Marg0]&255)===0)return String(tmp0);
	Lgeptoindexphi=0;
	while(1){
		tmp2=String.fromCharCode(Larg0[Marg0+Lgeptoindexphi|0]<<24>>24);
		tmp0=tmp0.concat(tmp2);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if((Larg0[Marg0+Lgeptoindexphi|0]&255)!==0)continue;
		break;
	}
	return String(tmp0);
}
function __ZN5Dalye11GLUtilities10initializeEPKc(){
	var tmp0=null,tmp1=null;
	tmp1="elem";
	__ZN5Dalye11GLUtilities6canvasE=document.getElementById(tmp1);
	if(__ZN5Dalye11GLUtilities6canvasE===null){
		tmp1="Cannot find a canvas Element.!";
		console.error(tmp1);
	}
	tmp1=__ZN5Dalye11GLUtilities6canvasE;
	tmp0="webgl";
	_gl=tmp1.getContext(tmp0);
	if(_gl===null){
		tmp1="CannotUnable to initialize WebGL";
		console.error(tmp1);
	}
	return __ZN5Dalye11GLUtilities6canvasE;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN5Dalye6Engine4loopEvE3$_2JEEEvPT_DpT0_(Larg0){
	__ZN5Dalye6Engine4loopEv(Larg0.a0);
}
function __Z7webMainv(){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=[null];
	tmp1="DOMContentLoaded";
	tmp2=[{a0:nullArray}];
	tmp2[0].a0=tmp0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_3JEEEvPT_DpT0_,tmp2[0]);
	document.addEventListener(tmp1,tmp2);
	tmp1="resize";
	tmp2=[{a0:nullArray}];
	tmp2[0].a0=tmp0;
	tmp2=cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_4JEEEvPT_DpT0_,tmp2[0]);
	document.addEventListener(tmp1,tmp2);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_3JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null;
	tmp1=new Dalye.Engine(undefined);
	tmp0=Larg0.a0;
	tmp0[0]=tmp1;
	tmp1="Engine Initilized..";
	console.log(tmp1);
	tmp1=Larg0.a0;
	__ZN5Dalye6Engine5startEv(tmp1[0]);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_4JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null;
	tmp1=Larg0.a0;
	tmp1=tmp1[0];
	tmp0=tmp1.a0;
	if(tmp0!==null){
		tmp0.width=+innerWidth;
		tmp1.a0.height=+innerHeight;
	}
	_gl.viewport(0,0,+innerWidth,+innerHeight);
}
var _$pstr$p4=new Uint8Array([68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100,0]);
var _$pstr$p5=new Uint8Array([114,101,115,105,122,101,0]);
var _gl;
var _$pstr$p12=new Uint8Array([69,110,103,105,110,101,32,73,110,105,116,105,108,105,122,101,100,46,46,0]);
var _$pstr$p3=new Uint8Array([98,97,115,105,99,0]);
var _$pstr$p6=new Uint8Array([71,105,118,101,110,32,115,104,97,100,101,114,32,101,114,114,111,114,32,58,0]);
var _$pstr$p7=new Uint8Array([83,104,97,100,101,114,32,108,105,110,107,105,110,103,32,101,114,114,111,114,32,58,0]);
var _$pstr$p1=new Uint8Array([10,97,116,116,114,105,98,117,116,101,32,118,101,99,51,32,97,95,112,111,115,105,116,105,111,110,59,10,118,111,105,100,32,109,97,105,110,40,41,123,10,32,32,32,32,103,108,95,80,111,115,105,116,105,111,110,32,61,32,118,101,99,52,40,97,95,112,111,115,105,116,105,111,110,44,32,49,46,48,41,59,10,125,10,0]);
var _$pstr$p2=new Uint8Array([10,112,114,101,99,105,115,105,111,110,32,109,101,100,105,117,109,112,32,102,108,111,97,116,59,10,118,111,105,100,32,109,97,105,110,40,41,123,10,32,32,32,32,103,108,95,70,114,97,103,67,111,108,111,114,32,61,32,118,101,99,52,40,49,46,48,41,59,10,125,10,0]);
var _$pstr$p8=new Uint8Array([99,97,110,118,97,115,0]);
var __ZN5Dalye11GLUtilities6canvasE;
var _$pstr=new Uint8Array([101,108,101,109,0]);
var _$pstr$p9=new Uint8Array([67,97,110,110,111,116,32,102,105,110,100,32,97,32,99,97,110,118,97,115,32,69,108,101,109,101,110,116,46,33,0]);
var _$pstr$p10=new Uint8Array([119,101,98,103,108,0]);
var _$pstr$p11=new Uint8Array([67,97,110,110,111,116,85,110,97,98,108,101,32,116,111,32,105,110,105,116,105,97,108,105,122,101,32,87,101,98,71,76,0]);
function cheerpCreateClosure(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}
function cheerpCreateClosureSplit(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}
var Dalye={
	Engine:null,
	Shader:null,
};
Dalye.Engine=function (){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN5Dalye6EngineC1Ev(this);
};
Dalye.Engine.prototype.start=function (){
	return __ZN5Dalye6Engine5startEv(this);
};
Dalye.Engine.prototype.loop=function (){
	return __ZN5Dalye6Engine4loopEv(this);
};
Dalye.Engine.prototype.resize=function (){
	return __ZN5Dalye6Engine6resizeEv(this);
};
Dalye.Engine.prototype.loadShaders=function (){
	return __ZN5Dalye6Engine11loadShadersEv(this);
};
Dalye.Engine.prototype.createBuffer=function (){
	return __ZN5Dalye6Engine12createBufferEv(this);
};
Dalye.Shader=function (a0,a1,a2){
	this.a0=null;
	this.a1=null;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN5Dalye6ShaderC1ERKN6client6StringES4_S4_(this,a0,a1,a2);
};
Dalye.Shader.prototype.use=function (){
	return __ZN5Dalye6Shader3useEv(this);
};
Dalye.Shader.prototype.getName=function (){
	return __ZNK5Dalye6Shader7getNameEv(this);
};
Dalye.Engine.promise=
Dalye.Shader.promise=
Promise.resolve();
__Z7webMainv();
