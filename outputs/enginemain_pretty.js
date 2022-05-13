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
function __ZN5Dalye6Engine4loopEv(Larg0){
	var tmp0=0,tmp1=null,tmp2=null;
	tmp0=(Larg0.i0|0)+1|0;
	Larg0.i0=tmp0;
	tmp1={i0:0,i1:0,a2:nullArray};
	__ZSt9to_stringi(tmp1,tmp0);
	tmp2=tmp1.a2;
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(tmp2,0);
	document.title=tmp2;
	_gl.clearColor(0,0,0,1);
	tmp1=_gl;
	tmp1.clear((+((tmp1.COLOR_BUFFER_BIT)|0)));
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
	Larg0.a1=__ZN5Dalye11GLUtilities10initializeEPKc();
	__ZN5Dalye6Engine11loadShadersEv(Larg0);
	_gl.useProgram(Larg0.a2.a1);
	__ZN5Dalye6Engine4loopEv(Larg0);
}
function __ZN5Dalye6Engine6resizeEv(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1;
	if(tmp0!==null){
		tmp0.width=+innerWidth;
		Larg0.a1.height=+innerHeight;
	}
}
function __ZN5Dalye6EngineC1Ev(Larg0){
	Larg0.i0=0;
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
	tmp0=new Dalye.Engine(undefined);
	tmp0.i0=0;
	tmp1=Larg0.a0;
	tmp1[0]=tmp0;
	tmp0="Engine Initilized..";
	console.log(tmp0);
	tmp0=Larg0.a0;
	tmp0=tmp0[0];
	"canvas";
	tmp1="canvas";
	__ZN5Dalye11GLUtilities6canvasE=document.createElement(tmp1);
	tmp1=document.body;
	tmp1.appendChild(__ZN5Dalye11GLUtilities6canvasE);
	tmp0.a1=__ZN5Dalye11GLUtilities10initializeEPKc();
	__ZN5Dalye6Engine11loadShadersEv(tmp0);
	_gl.useProgram(tmp0.a2.a1);
	__ZN5Dalye6Engine4loopEv(tmp0);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_4JEEEvPT_DpT0_(Larg0){
	var tmp0=null,tmp1=null;
	tmp1=Larg0.a0;
	tmp1=tmp1[0];
	tmp0=tmp1.a1;
	if(tmp0!==null){
		tmp0.width=+innerWidth;
		tmp1.a1.height=+innerHeight;
	}
}
function __ZN10__cxxabiv117__class_type_infoD2Ev(Larg0){
}
function __ZN10__cxxabiv117__class_type_infoD0Ev(Larg0){
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev(Larg0){
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev(Larg0){
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb(Larg0,Larg1,Larg2,Marg2,Larg3){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=Larg0.a1;
	tmp1=Larg1.a1;
	if(tmp0===tmp1&&0===0)return 1|0;
	tmp0=Larg1.a0;
	tmp2=Larg1.o|0;
	tmp2=___dynamic_cast(tmp2+1|0,tmp0.a0)|0;
	if((tmp2|0)===-2147483648)return 0|0;
	if((tmp2|0)!==0)tmp0=Larg1.a[Larg1.o-tmp2];
	else{
		tmp0=Larg1;
	}
	if(tmp0!==null){
		tmp1=new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
		tmp1.a0=tmp0;
		tmp1.i1=0;
		tmp1.a2=Larg0;
		tmp1.i3=0;
		tmp1.a4=tmp0;
		tmp1.i5=-1;
		tmp1.i6=0;
		tmp1.i7=0;
		tmp1.i8=0;
		tmp1.i9=0;
		tmp1.i10=0;
		tmp1.i11=0;
		tmp1.i12=0;
		tmp1.i13=0;
		tmp1.i15=0;
		tmp1.i14=1;
		tmp0.a0.a8(tmp0,tmp1,Larg2[Marg2]|0,1);
		tmp2=tmp1.i8|0;
		if((tmp2|0)===1)Larg2[Marg2]=tmp1.i6|0;
		return ((tmp2|0)===1?1:0)|0;
	}
	return 0|0;
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,Lmergedinsert=0,tmp2=null,Lgeptoindexphi=0,Lgeptoindexphi3=0;
	tmp0=Larg1.a2;
	a:{
		if(Larg5){
			if(Larg0!==tmp0){
				tmp2=Larg0.a1;
				tmp0=tmp0.a1;
				Lmergedinsert=tmp2[0]|0;
				if((Lmergedinsert&255)!==0){
					Lgeptoindexphi3=0;
					Lgeptoindexphi=0;
					while(1){
						if((Lmergedinsert&255)===(tmp0[Lgeptoindexphi3]&255)){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							Lmergedinsert=tmp2[Lgeptoindexphi]|0;
							Lgeptoindexphi3=Lgeptoindexphi3+1|0;
							if((Lmergedinsert&255)!==0)continue;
							Lmergedinsert=0;
						}
						break;
					}
				}else{
					Lmergedinsert=0;
					Lgeptoindexphi3=0;
				}
				if((Lmergedinsert&255)!==(tmp0[Lgeptoindexphi3]&255))break a;
			}
		}else{
			tmp2=Larg0.a1;
			tmp0=tmp0.a1;
			if(tmp2!==tmp0||0!==0)break a;
		}
		Lmergedinsert=Larg1.i15&16711935|256;
		Larg1.i15=Lmergedinsert;
		if((Larg1.i1|0)===(Larg3|0)){
			Larg1.i15=Lmergedinsert&16711936|1;
			Lmergedinsert=Larg1.i6|0;
			if((Lmergedinsert|0)!==0){
				if((Lmergedinsert|0)===(Larg2|0)){
					if((Larg1.i8|0)===2)Larg1.i8=Larg4;
					if((Larg1.i14|0)!==1)break a;
					if((Larg1.i8|0)!==1)break a;
				}else Larg1.i11=(Larg1.i11|0)+1|0;
			}else{
				Larg1.i6=Larg2;
				Larg1.i8=Larg4;
				Larg1.i11=1;
				if(!((Larg1.i14|0)===1?((Larg4|0)===1?1:0)|0:0|0))break a;
			}
			Larg1.i15=65793;
		}
	}
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=0,Lgeptoindexphi3=0,Lgeptoindexphi13=0,Lgeptoindexphi=0;
	tmp0=Larg1.a2;
	a:{
		b:{
			if(Larg4){
				if(Larg0===tmp0)break b;
				tmp1=Larg0.a1;
				tmp0=tmp0.a1;
				tmp2=tmp1[0]|0;
				if((tmp2&255)===0){
					Lgeptoindexphi13=0;
					Lgeptoindexphi3=0;
				}else{
					Lgeptoindexphi13=tmp2;
					Lgeptoindexphi3=0;
					Lgeptoindexphi=0;
					while(1){
						if((Lgeptoindexphi13&255)===(tmp0[Lgeptoindexphi3]&255)){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							Lgeptoindexphi13=tmp1[Lgeptoindexphi]|0;
							Lgeptoindexphi3=Lgeptoindexphi3+1|0;
							if((Lgeptoindexphi13&255)!==0)continue;
							Lgeptoindexphi13=0;
						}
						break;
					}
				}
				if((Lgeptoindexphi13&255)===(tmp0[Lgeptoindexphi3]&255))break b;
				tmp0=Larg1.a0;
				if(Larg0!==tmp0){
					tmp0=tmp0.a1;
					if((tmp2&255)===0){
						tmp2=0;
						Lgeptoindexphi13=0;
					}else{
						Lgeptoindexphi13=0;
						Lgeptoindexphi3=0;
						while(1){
							if((tmp2&255)===(tmp0[Lgeptoindexphi13]&255)){
								Lgeptoindexphi3=Lgeptoindexphi3+1|0;
								tmp2=tmp1[Lgeptoindexphi3]|0;
								Lgeptoindexphi13=Lgeptoindexphi13+1|0;
								if((tmp2&255)!==0)continue;
								tmp2=0;
							}
							break;
						}
					}
					if((tmp2&255)!==(tmp0[Lgeptoindexphi13]&255))break a;
				}
			}else{
				tmp1=Larg0.a1;
				tmp0=tmp0.a1;
				if(tmp1===tmp0&&0===0)break b;
				tmp0=Larg1.a0;
				tmp0=tmp0.a1;
				if(tmp1!==tmp0||0!==0)break a;
			}
			if((Larg1.i6|0)!==(Larg2|0))if((Larg1.i7|0)!==(Larg2|0)){
				Larg1.i10=Larg3;
				Larg1.i7=Larg2;
				Larg1.i12=(Larg1.i12|0)+1|0;
				if((Larg1.i11|0)===1)if((Larg1.i8|0)===2)Larg1.i15=Larg1.i15&65535|65536;
				Larg1.i13=4;
				break a;
			}
			if((Larg3|0)!==1)break a;
			Larg1.i10=1;
			break a;
		}
		if((Larg1.i1|0)===(Larg2|0))if((Larg1.i9|0)!==1)Larg1.i9=Larg3;
	}
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp2=Larg1.a2;
	tmp0=Larg0.a1;
	tmp2=tmp2.a1;
	if(tmp0===tmp2&&0===0){
		tmp1=Larg1.i6|0;
		if((tmp1|0)!==0){
			if((tmp1|0)===(Larg2|0)){
				if((Larg1.i8|0)===2)Larg1.i8=Larg3;
			}else{
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i8=2;
				Larg1.i15=Larg1.i15&65535|65536;
			}
		}else{
			Larg1.i6=Larg2;
			Larg1.i8=Larg3;
			Larg1.i11=1;
		}
	}
}
function ___dynamic_cast(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp2=0;
	tmp0=new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
	tmp0.a0=__ZTIN10__cxxabiv117__class_type_infoE;
	tmp0.i1=Larg0;
	tmp0.a2=__ZTIN10__cxxabiv116__shim_type_infoE;
	tmp0.i3=1;
	tmp0.a4=Larg1;
	tmp0.i5=0;
	tmp0.i6=0;
	tmp0.i7=0;
	tmp0.i8=0;
	tmp0.i9=0;
	tmp0.i10=0;
	tmp0.i11=0;
	tmp0.i12=0;
	tmp0.i13=0;
	tmp0.i14=0;
	tmp0.i15=0;
	tmp1=Larg1.a1;
	a:if(tmp1===__ZTSN10__cxxabiv117__class_type_infoE&&0===0){
		tmp0.i14=1;
		Larg1.a0.a6(Larg1,tmp0,1,1,1,0);
		if((tmp0.i8|0)===1)return Larg0-1|0;
	}else{
		Larg1.a0.a7(Larg1,tmp0,1,1,0);
		tmp2=tmp0.i11|0;
		if((tmp2|0)!==0){
			if((tmp2|0)!==1)break a;
			if((tmp0.i8|0)!==1)if(!(((tmp0.i12|0)!==0?0|0:((tmp0.i9|0)===1?1:0)|0)?((tmp0.i10|0)===1?1:0)|0:0|0))break a;
			tmp2=tmp0.i6|0;
		}else{
			if(!(((tmp0.i12|0)===1?((tmp0.i9|0)===1?1:0)|0:0|0)?((tmp0.i10|0)===1?1:0)|0:0|0))break a;
			tmp2=tmp0.i7|0;
		}
		if((tmp2|0)!==-2147483648)return Larg0-tmp2|0;
	}
	return  -2147483648|0;
}
function __ZN10__cxxabiv120__si_class_type_infoD2Ev(Larg0){
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev(Larg0){
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0,Larg1,Larg2,Larg3,Larg4,Larg5){
	var tmp0=null,Lmergedinsert=0,tmp2=null,Lgeptoindexphi=0,Lgeptoindexphi3=0;
	tmp0=Larg1.a2;
	a:{
		b:{
			if(Larg5){
				if(Larg0!==tmp0){
					tmp2=Larg0.a1;
					tmp0=tmp0.a1;
					Lmergedinsert=tmp2[0]|0;
					if((Lmergedinsert&255)!==0){
						Lgeptoindexphi3=0;
						Lgeptoindexphi=0;
						while(1){
							if((Lmergedinsert&255)===(tmp0[Lgeptoindexphi3]&255)){
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								Lmergedinsert=tmp2[Lgeptoindexphi]|0;
								Lgeptoindexphi3=Lgeptoindexphi3+1|0;
								if((Lmergedinsert&255)!==0)continue;
								Lmergedinsert=0;
							}
							break;
						}
					}else{
						Lmergedinsert=0;
						Lgeptoindexphi3=0;
					}
					if((Lmergedinsert&255)!==(tmp0[Lgeptoindexphi3]&255))break b;
				}
			}else{
				tmp2=Larg0.a1;
				tmp0=tmp0.a1;
				if(tmp2!==tmp0||0!==0)break b;
			}
			Lmergedinsert=Larg1.i15&16711935|256;
			Larg1.i15=Lmergedinsert;
			if((Larg1.i1|0)!==(Larg3|0))break a;
			Larg1.i15=Lmergedinsert&16711936|1;
			Lmergedinsert=Larg1.i6|0;
			if((Lmergedinsert|0)!==0){
				if((Lmergedinsert|0)===(Larg2|0)){
					if((Larg1.i8|0)===2)Larg1.i8=Larg4;
					if((Larg1.i14|0)!==1)break a;
					if((Larg1.i8|0)!==1)break a;
				}else Larg1.i11=(Larg1.i11|0)+1|0;
			}else{
				Larg1.i6=Larg2;
				Larg1.i8=Larg4;
				Larg1.i11=1;
				if(!((Larg1.i14|0)===1?((Larg4|0)===1?1:0)|0:0|0))break a;
			}
			Larg1.i15=65793;
			break a;
		}
		tmp0=Larg0.a2;
		tmp0.a0.a6(tmp0,Larg1,Larg2,Larg3,Larg4,Larg5);
	}
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0,Larg1,Larg2,Larg3,Larg4){
	var tmp0=null,tmp1=null,tmp2=0,Lgeptoindexphi3=0,Lgeptoindexphi13=0,Lgeptoindexphi=0;
	tmp0=Larg1.a2;
	a:{
		b:{
			c:{
				if(Larg4){
					if(Larg0===tmp0)break b;
					tmp1=Larg0.a1;
					tmp0=tmp0.a1;
					tmp2=tmp1[0]|0;
					if((tmp2&255)===0){
						Lgeptoindexphi13=0;
						Lgeptoindexphi3=0;
					}else{
						Lgeptoindexphi13=tmp2;
						Lgeptoindexphi3=0;
						Lgeptoindexphi=0;
						while(1){
							if((Lgeptoindexphi13&255)===(tmp0[Lgeptoindexphi3]&255)){
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								Lgeptoindexphi13=tmp1[Lgeptoindexphi]|0;
								Lgeptoindexphi3=Lgeptoindexphi3+1|0;
								if((Lgeptoindexphi13&255)!==0)continue;
								Lgeptoindexphi13=0;
							}
							break;
						}
					}
					if((Lgeptoindexphi13&255)===(tmp0[Lgeptoindexphi3]&255))break b;
					tmp0=Larg1.a0;
					if(Larg0!==tmp0){
						tmp0=tmp0.a1;
						if((tmp2&255)===0){
							tmp2=0;
							Lgeptoindexphi13=0;
						}else{
							Lgeptoindexphi13=0;
							Lgeptoindexphi3=0;
							while(1){
								if((tmp2&255)===(tmp0[Lgeptoindexphi13]&255)){
									Lgeptoindexphi3=Lgeptoindexphi3+1|0;
									tmp2=tmp1[Lgeptoindexphi3]|0;
									Lgeptoindexphi13=Lgeptoindexphi13+1|0;
									if((tmp2&255)!==0)continue;
									tmp2=0;
								}
								break;
							}
						}
						if((tmp2&255)!==(tmp0[Lgeptoindexphi13]&255))break c;
					}
				}else{
					tmp1=Larg0.a1;
					tmp0=tmp0.a1;
					if(tmp1===tmp0&&0===0)break b;
					tmp0=Larg1.a0;
					tmp0=tmp0.a1;
					if(tmp1!==tmp0||0!==0)break c;
				}
				if((Larg1.i6|0)!==(Larg2|0))if((Larg1.i7|0)!==(Larg2|0)){
					Larg1.i10=Larg3;
					if((Larg1.i13|0)!==4){
						Larg1.i15=Larg1.i15&16711680;
						tmp0=Larg0.a2;
						tmp0.a0.a6(tmp0,Larg1,Larg2,Larg2,1,Larg4);
						tmp2=Larg1.i15|0;
						if((tmp2&65280&16777215)!==0){
							Larg1.i13=3;
							if((tmp2&255)!==0)break a;
						}else Larg1.i13=4;
					}
					Larg1.i7=Larg2;
					Larg1.i12=(Larg1.i12|0)+1|0;
					if((Larg1.i11|0)!==1)break a;
					if((Larg1.i8|0)!==2)break a;
					Larg1.i15=Larg1.i15&65535|65536;
					break a;
				}
				if((Larg3|0)!==1)break a;
				Larg1.i10=1;
				break a;
			}
			tmp0=Larg0.a2;
			tmp0.a0.a7(tmp0,Larg1,Larg2,Larg3,Larg4);
			break a;
		}
		if((Larg1.i1|0)===(Larg2|0))if((Larg1.i9|0)!==1)Larg1.i9=Larg3;
	}
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0,Larg1,Larg2,Larg3){
	var tmp0=null,tmp1=0,tmp2=null;
	tmp2=Larg1.a2;
	tmp0=Larg0.a1;
	tmp2=tmp2.a1;
	if(tmp0===tmp2&&0===0){
		tmp1=Larg1.i6|0;
		if((tmp1|0)!==0){
			if((tmp1|0)===(Larg2|0)){
				if((Larg1.i8|0)===2)Larg1.i8=Larg3;
			}else{
				Larg1.i11=(Larg1.i11|0)+1|0;
				Larg1.i8=2;
				Larg1.i15=Larg1.i15&65535|65536;
			}
		}else{
			Larg1.i6=Larg2;
			Larg1.i8=Larg3;
			Larg1.i11=1;
		}
	}else{
		tmp2=Larg0.a2;
		tmp2.a0.a8(tmp2,Larg1,Larg2,Larg3);
	}
}
function __ZNKSt11logic_error4whatEv(Larg0){
	var tmp0=null;
	tmp0=Larg0.a1.a0;
	return null;
}
function __ZNSt11logic_errorD2Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function __ZNSt11logic_errorD0Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function __ZNKSs20__throw_length_errorEv(){
	__ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv();
	;
}
function __ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv(){
	__ZSt20__throw_length_errorPKc();
	;
}
function __ZSt20__throw_length_errorPKc(){
	var tmp0=null,tmp1=null;
	tmp0=[{a0:null,a1:{a0:nullObj}}];
	tmp1=tmp0[0];
	__ZNSt12length_errorC2EPKc(tmp1);
	___cxa_throw(tmp0);
	;
}
function __ZNSt12length_errorC2EPKc(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=new DataView(new ArrayBuffer(((25)+ 7) & (~7)));
	tmp0.setInt32(0+__imul(0,12),12,true);
	tmp0.setInt32(4+__imul(0,12),12,true);
	tmp0.setInt32(8+__imul(0,12),0,true);
	tmp0.setInt8(12+__imul(0,12),98);
	tmp0.setInt8(1*1+12+__imul(0,12),97);
	tmp0.setInt8(2*1+12+__imul(0,12),115);
	tmp0.setInt8(3*1+12+__imul(0,12),105);
	tmp0.setInt8(4*1+12+__imul(0,12),99);
	tmp0.setInt8(5*1+12+__imul(0,12),95);
	tmp0.setInt8(6*1+12+__imul(0,12),115);
	tmp0.setInt8(7*1+12+__imul(0,12),116);
	tmp0.setInt8(8*1+12+__imul(0,12),114);
	tmp0.setInt8(9*1+12+__imul(0,12),105);
	tmp0.setInt8(10*1+12+__imul(0,12),110);
	tmp0.setInt8(11*1+12+__imul(0,12),103);
	tmp0.setInt8(12*1+12+__imul(0,12),0);
	Larg0.a1.a0=tmp0;
	Larg0.a0=__ZTVSt12length_error;
}
function __ZNSt12length_errorD2Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function ___cxa_throw(Larg0){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=[{d:Larg0,o:0}];
	tmp1=[__ZTISt12length_error];
	tmp2=[null];
	tmp2[0]=__ZNSt12length_errorD2Ev;
	__ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(__ZN10__cxxabiv19Exception8allocateIJRPvRPSt9type_infoRPFvS2_EEEEPS0_DpOT_(tmp0,0,tmp1,0,tmp2,0));
	;
}
function __ZN10__cxxabiv19Exception8allocateIJRPvRPSt9type_infoRPFvS2_EEEEPS0_DpOT_(Larg0,Marg0,Larg1,Marg1,Larg2,Marg2){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=null,tmp4=0,tmp5=null;
	tmp2=__ZN10__cxxabiv19Exception9allocatorE$p2|0;
	a:{
		b:{
			if((tmp2|0)>1){
				tmp3=__ZN10__cxxabiv19Exception9allocatorE$p1;
				tmp4=1;
				while(1){
					if((tmp3[tmp4]&255)!==0){
						tmp4=tmp4+1|0;
						if((tmp4|0)===(tmp2|0))break b;
						continue;
					}
					break;
				}
			}else{
				tmp4=1;
			}
			if((tmp4|0)!==(tmp2|0)){
				tmp2=tmp4;
				break a;
			}
		}
		tmp4=tmp2<<1;
		__ZN10__cxxabiv19Exception9allocatorE$p2=tmp4;
		tmp3=__ZN10__cxxabiv19Exception9allocatorE$p0;
		if(tmp3!==nullArray||0!==0)tmp3=resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp3,tmp3.length,tmp4/40|0);
		else tmp3=createArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp4/40|0);
		__ZN10__cxxabiv19Exception9allocatorE$p0=tmp3;
		tmp4=__ZN10__cxxabiv19Exception9allocatorE$p2|0;
		tmp3=__ZN10__cxxabiv19Exception9allocatorE$p1;
		if(tmp3!==nullArray||0!==0)tmp3=(function(){var __old__=tmp3;
			var __ret__=new Uint8Array(tmp4/1|0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
			return __ret__;})();
		else tmp3=new Uint8Array(tmp4/1|0);
		__ZN10__cxxabiv19Exception9allocatorE$p1=tmp3;
	}
	tmp3=__ZN10__cxxabiv19Exception9allocatorE$p0;
	tmp5=Larg0[Marg0];
	tmp0=Larg1[Marg1];
	tmp1=Larg2[Marg2];
	tmp3[tmp2].a1=tmp5.d[tmp5.o];
	tmp3[tmp2].a2=null;
	tmp3[tmp2].a3=tmp0;
	tmp3[tmp2].a4=tmp1;
	tmp3[tmp2].i5=1;
	tmp3[tmp2].i6=0;
	tmp3[tmp2].a8=null;
	tmp3[tmp2].a9=null;
	tmp5=__ZN10__cxxabiv19Exception9allocatorE$p1;
	tmp5[tmp2]=1;
	return tmp3[tmp2];
}
function __ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Larg0){
	var tmp0=null,tmp1=null;
	tmp1=Larg0.a3;
	tmp1=tmp1.a1;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(tmp1,0);
	tmp0=new CheerpException(tmp1);
	Larg0.a0=tmp0;
	throw tmp0;
	;
}
function __ZNSt12length_errorD0Ev(Larg0){
	var tmp0=null;
	Larg0.a0=__ZTVSt11logic_error;
	tmp0=Larg0.a1.a0;
	tmp0.setInt32(8+__imul(0,12),(tmp0.getInt32(8+__imul(0,12),true)|0)-1|0,true);
}
function __ZSt9to_stringi(Larg0,Larg1){
	var tmp0=null,tmp1=0,tmp2=null,Lgeptoindexphi3=0,tmp4=null,tmp4o=0,Lgeptoindexphi=0,tmp6=0;
	tmp0=new Uint8Array(11);
	if((Larg1|0)<0){
		tmp0[0]=45;
		Lgeptoindexphi3=-Larg1|0;
		tmp4o=1;
		tmp4=tmp0;
	}else{
		tmp4o=0;
		tmp4=tmp0;
		Lgeptoindexphi3=Larg1;
	}
	Lgeptoindexphi=(11);
	tmp1=Lgeptoindexphi-(tmp4o)|0;
	a:{
		if((tmp1|0)<=9){
			tmp6=Math.clz32(Lgeptoindexphi3|1);
			tmp6=__imul(32-tmp6|0,1233)>>>12;
			if(((tmp6+1|0)+((__ZNSt6__itoaL10__pow10_32E[tmp6]>>>0>Lgeptoindexphi3>>>0?1:0)<<31>>31)|0)>(tmp1|0)){
				tmp4o=11;
				tmp4=tmp0;
				break a;
			}
		}
		tmp4=__ZNSt6__itoa8__u32toaEjPc(Lgeptoindexphi3,tmp4,tmp4o);
		tmp4o=oSlot;
		Lgeptoindexphi=(tmp4o);
	}
	Lgeptoindexphi3=Lgeptoindexphi-(0)|0;
	if(Lgeptoindexphi3>>>0>2147483631)__ZNKSs20__throw_length_errorEv();
	;
	Lgeptoindexphi=Lgeptoindexphi3+16& -16;
	tmp2=new Uint8Array(Lgeptoindexphi/1|0);
	Larg0.a2=tmp2;
	Larg0.i0=Lgeptoindexphi| -2147483648;
	Larg0.i1=Lgeptoindexphi3;
	if(tmp0===tmp4&&0===tmp4o){
		Lgeptoindexphi=0;
	}else{
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		while(1){
			tmp2[Lgeptoindexphi]=tmp0[Lgeptoindexphi3]|0;
			Lgeptoindexphi3=Lgeptoindexphi3+1|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if(tmp0!==tmp4||(0+Lgeptoindexphi3|0)!==tmp4o)continue;
			break;
		}
	}
	tmp2[Lgeptoindexphi]=0;
}
function __ZNSt6__itoa8__u32toaEjPc(Larg0,Larg1,Marg1){
	var L$psink23=0,Lgeptoindexphi=0,L$psink=0,tmp3=0;
	if(Larg0>>>0<100000000){
		if(Larg0>>>0<10000){
			if(Larg0>>>0<100){
				if(Larg0>>>0<10){
					Larg1[Marg1]=Larg0+48|0;
					L$psink23=1;
				}else{
					Larg1[Marg1]=__ZNSt6__itoaL10cDigitsLutE[Larg0<<1]|0;
					Larg1[Marg1+1|0]=__ZNSt6__itoaL10cDigitsLutE[(Larg0<<1)+1|0]|0;
					L$psink23=2;
				}
			}else{
				Lgeptoindexphi=(Larg0&65535)/100|0;
				if(Larg0>>>0<1000){
					Larg1[Marg1]=Lgeptoindexphi+48|0;
					L$psink23=3;
					L$psink=1;
				}else{
					Larg1[Marg1]=__ZNSt6__itoaL10cDigitsLutE[Lgeptoindexphi<<1&65535]|0;
					Larg1[Marg1+1|0]=__ZNSt6__itoaL10cDigitsLutE[(Lgeptoindexphi<<1&65535)+1|0]|0;
					L$psink23=4;
					L$psink=2;
				}
				Larg1[Marg1+L$psink|0]=__ZNSt6__itoaL10cDigitsLutE[(__imul(Lgeptoindexphi,65436)|0)+Larg0<<1&65535]|0;
				Larg1[(Marg1+L$psink|0)+1|0]=__ZNSt6__itoaL10cDigitsLutE[((__imul(Lgeptoindexphi,65436)|0)+Larg0<<1&65535)+1|0]|0;
			}
			oSlot=Marg1+L$psink23|0;
			return Larg1;
		}
		L$psink23=(Larg0>>>0)/10000|0;
		if(Larg0>>>0<1000000){
			if(Larg0>>>0<100000){
				Larg1[Marg1]=L$psink23+48|0;
				Lgeptoindexphi=1;
			}else{
				Larg1[Marg1]=__ZNSt6__itoaL10cDigitsLutE[L$psink23<<1]|0;
				Larg1[Marg1+1|0]=__ZNSt6__itoaL10cDigitsLutE[(L$psink23<<1)+1|0]|0;
				Lgeptoindexphi=2;
			}
		}else{
			if(Larg0>>>0<10000000){
				Larg1[Marg1]=((L$psink23&65535)/100|0)+48|0;
				L$psink=L$psink23;
				Lgeptoindexphi=3;
				tmp3=1;
			}else{
				Larg1[Marg1]=__ZNSt6__itoaL10cDigitsLutE[(Larg0>>>0)/1000000<<1]|0;
				Larg1[Marg1+1|0]=__ZNSt6__itoaL10cDigitsLutE[((Larg0>>>0)/1000000<<1)+1|0]|0;
				L$psink=L$psink23;
				Lgeptoindexphi=4;
				tmp3=2;
			}
			Larg1[Marg1+tmp3|0]=__ZNSt6__itoaL10cDigitsLutE[(L$psink&65535)%100<<1&65535]|0;
			Larg1[(Marg1+tmp3|0)+1|0]=__ZNSt6__itoaL10cDigitsLutE[((L$psink&65535)%100<<1&65535)+1|0]|0;
		}
		L$psink=Larg0;
	}else{
		L$psink=(Larg0>>>0)/100000000|0;
		if(Larg0>>>0<1000000000){
			Larg1[Marg1]=L$psink+48|0;
			tmp3=1;
		}else{
			Larg1[Marg1]=__ZNSt6__itoaL10cDigitsLutE[L$psink<<1]|0;
			Larg1[Marg1+1|0]=__ZNSt6__itoaL10cDigitsLutE[(L$psink<<1)+1|0]|0;
			tmp3=2;
		}
		L$psink=(__imul(L$psink,-100000000)|0)+Larg0|0;
		L$psink23=(L$psink>>>0)/10000|0;
		Lgeptoindexphi=(L$psink23&65535)/100|0;
		Larg1[Marg1+tmp3|0]=__ZNSt6__itoaL10cDigitsLutE[Lgeptoindexphi<<1&65535]|0;
		Larg1[(Marg1+tmp3|0)+1|0]=__ZNSt6__itoaL10cDigitsLutE[(Lgeptoindexphi<<1&65535)+1|0]|0;
		Larg1[(Marg1+tmp3|0)+2|0]=__ZNSt6__itoaL10cDigitsLutE[(__imul(Lgeptoindexphi,65436)|0)+L$psink23<<1&65535]|0;
		Larg1[(Marg1+tmp3|0)+3|0]=__ZNSt6__itoaL10cDigitsLutE[((__imul(Lgeptoindexphi,65436)|0)+L$psink23<<1&65535)+1|0]|0;
		Lgeptoindexphi=tmp3+4|0;
	}
	L$psink23=(__imul(L$psink23,-10000)|0)+L$psink|0;
	L$psink=(L$psink23&65535)/100|0;
	Larg1[Marg1+Lgeptoindexphi|0]=__ZNSt6__itoaL10cDigitsLutE[L$psink<<1&65535]|0;
	Larg1[(Marg1+Lgeptoindexphi|0)+1|0]=__ZNSt6__itoaL10cDigitsLutE[(L$psink<<1&65535)+1|0]|0;
	Larg1[(Marg1+Lgeptoindexphi|0)+2|0]=__ZNSt6__itoaL10cDigitsLutE[(__imul(L$psink,65436)|0)+L$psink23<<1&65535]|0;
	Larg1[(Marg1+Lgeptoindexphi|0)+3|0]=__ZNSt6__itoaL10cDigitsLutE[((__imul(L$psink,65436)|0)+L$psink23<<1&65535)+1|0]|0;
	oSlot=Marg1+(Lgeptoindexphi+4|0)|0;
	return Larg1;
}
var _$pstr$p4=new Uint8Array([68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100,0]);
var _$pstr$p5=new Uint8Array([114,101,115,105,122,101,0]);
var _$pstr$p12=new Uint8Array([69,110,103,105,110,101,32,73,110,105,116,105,108,105,122,101,100,46,46,0]);
var _$pstr$p8=new Uint8Array([99,97,110,118,97,115,0]);
var __ZN5Dalye11GLUtilities6canvasE;
var _gl;
var _$pstr=new Uint8Array([101,108,101,109,0]);
var _$pstr$p9=new Uint8Array([67,97,110,110,111,116,32,102,105,110,100,32,97,32,99,97,110,118,97,115,32,69,108,101,109,101,110,116,46,33,0]);
var _$pstr$p10=new Uint8Array([119,101,98,103,108,0]);
var _$pstr$p11=new Uint8Array([67,97,110,110,111,116,85,110,97,98,108,101,32,116,111,32,105,110,105,116,105,97,108,105,122,101,32,87,101,98,71,76,0]);
var _$pstr$p3=new Uint8Array([98,97,115,105,99,0]);
var _$pstr$p6=new Uint8Array([71,105,118,101,110,32,115,104,97,100,101,114,32,101,114,114,111,114,32,58,0]);
var _$pstr$p7=new Uint8Array([83,104,97,100,101,114,32,108,105,110,107,105,110,103,32,101,114,114,111,114,32,58,0]);
var _$pstr$p1=new Uint8Array([10,97,116,116,114,105,98,117,116,101,32,118,101,99,51,32,97,95,112,111,115,105,116,105,111,110,59,10,118,111,105,100,32,109,97,105,110,40,41,123,10,32,32,32,32,103,108,95,80,111,115,105,116,105,111,110,32,61,32,118,101,99,52,40,97,95,112,111,115,105,116,105,111,110,44,32,49,46,48,41,59,10,125,10,0]);
var _$pstr$p2=new Uint8Array([10,112,114,101,99,105,115,105,111,110,32,109,101,100,105,117,109,112,32,102,108,111,97,116,59,10,118,111,105,100,32,109,97,105,110,40,41,123,10,32,32,32,32,103,108,95,70,114,97,103,67,111,108,111,114,32,61,32,118,101,99,52,40,49,46,48,41,59,10,125,10,0]);
var __ZNSt6__itoaL10__pow10_32E=new Int32Array([0,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);
var __ZTSN10__cxxabiv120__si_class_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTSN10__cxxabiv117__class_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTSN10__cxxabiv116__shim_type_infoE=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0]);
var __ZTVN10__cxxabiv117__class_type_infoE={a0:undefined,a1:__ZN10__cxxabiv117__class_type_infoD2Ev,a2:__ZN10__cxxabiv117__class_type_infoD0Ev,a3:__ZNK10__cxxabiv116__shim_type_info5noop1Ev,a4:__ZNK10__cxxabiv116__shim_type_info5noop2Ev,a5:__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb,a6:__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib,a7:__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib,a8:__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli};
var __ZTSSt9type_info=new Uint8Array([83,116,57,116,121,112,101,95,105,110,102,111,0]);
var __ZTISt9type_info={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt9type_info};
var __ZTIN10__cxxabiv116__shim_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv116__shim_type_infoE,a2:__ZTISt9type_info};
var __ZTIN10__cxxabiv117__class_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv117__class_type_infoE,a2:__ZTIN10__cxxabiv116__shim_type_infoE};
__ZTVN10__cxxabiv117__class_type_infoE.a0=__ZTIN10__cxxabiv117__class_type_infoE;
var __ZTIN10__cxxabiv120__si_class_type_infoE={a0:undefined,a1:__ZTSN10__cxxabiv120__si_class_type_infoE,a2:__ZTIN10__cxxabiv117__class_type_infoE};
var __ZTVN10__cxxabiv120__si_class_type_infoE={a0:__ZTIN10__cxxabiv120__si_class_type_infoE,a1:__ZN10__cxxabiv120__si_class_type_infoD2Ev,a2:__ZN10__cxxabiv120__si_class_type_infoD0Ev,a3:__ZNK10__cxxabiv116__shim_type_info5noop1Ev,a4:__ZNK10__cxxabiv116__shim_type_info5noop2Ev,a5:__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb,a6:__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib,a7:__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib,a8:__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli};
__ZTIN10__cxxabiv116__shim_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv117__class_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv120__si_class_type_infoE.a0=__ZTVN10__cxxabiv120__si_class_type_infoE;
var __ZTSSt12length_error=new Uint8Array([83,116,49,50,108,101,110,103,116,104,95,101,114,114,111,114,0]);
var __ZTSSt11logic_error=new Uint8Array([83,116,49,49,108,111,103,105,99,95,101,114,114,111,114,0]);
var __ZTSSt9exception=new Uint8Array([83,116,57,101,120,99,101,112,116,105,111,110,0]);
var __ZTISt9exception={a0:__ZTVN10__cxxabiv117__class_type_infoE,a1:__ZTSSt9exception};
var __ZTISt11logic_error={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt11logic_error,a2:__ZTISt9exception};
var __ZTISt12length_error={a0:__ZTVN10__cxxabiv120__si_class_type_infoE,a1:__ZTSSt12length_error,a2:__ZTISt11logic_error};
var __ZN10__cxxabiv19Exception9allocatorE$p2=16;
var _promotedMalloc$p4=new Uint8Array(16);
var __ZN10__cxxabiv19Exception9allocatorE$p1=_promotedMalloc$p4;
var _promotedMalloc$p3=createArray_struct$p_ZN10__cxxabiv19ExceptionE(16);
var __ZN10__cxxabiv19Exception9allocatorE$p0=_promotedMalloc$p3;
var __ZTVSt11logic_error={a0:__ZTISt11logic_error,a1:__ZNSt11logic_errorD2Ev,a2:__ZNSt11logic_errorD0Ev,a3:__ZNKSt11logic_error4whatEv};
var __ZTVSt12length_error={a0:__ZTISt12length_error,a1:__ZNSt12length_errorD2Ev,a2:__ZNSt12length_errorD0Ev,a3:__ZNKSt11logic_error4whatEv};
var __ZNSt6__itoaL10cDigitsLutE=new Uint8Array([48,48,48,49,48,50,48,51,48,52,48,53,48,54,48,55,48,56,48,57,49,48,49,49,49,50,49,51,49,52,49,53,49,54,49,55,49,56,49,57,50,48,50,49,50,50,50,51,50,52,50,53,50,54,50,55,50,56,50,57,51,48,51,49,51,50,51,51,51,52,51,53,51,54,51,55,51,56,51,57,52,48,52,49,52,50,52,51,52,52,52,53,52,54,52,55,52,56,52,57,53,48,53,49,53,50,53,51,53,52,53,53,53,54,53,55,53,56,53,57,54,48,54,49,54,50,54,51,54,52,54,53,54,54,54,55,54,56,54,57,55,48,55,49,55,50,55,51,55,52,55,53,55,54,55,55,55,56,55,57,56,48,56,49,56,50,56,51,56,52,56,53,56,54,56,55,56,56,56,57,57,48,57,49,57,50,57,51,57,52,57,53,57,54,57,55,57,56,57,57]);
function constructor_struct$p_ZN10__cxxabiv19ExceptionE(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.a7=null;
	this.a8=null;
	this.a9=null;
}
function constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE(){
	this.a0=null;
	this.i1=0;
	this.a2=null;
	this.i3=0;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
	this.i9=0;
	this.i10=0;
	this.i11=0;
	this.i12=0;
	this.i13=0;
	this.i14=0;
	this.i15=0;
}
function construct_literal12(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.a5=null;
	this.a6=null;
	this.a7=null;
	this.a8=null;
}
function createArray_struct$p_ZN10__cxxabiv19ExceptionE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(r,s,e){
	for(var i=s;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function cheerpCreateClosure(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}
function cheerpCreateClosureSplit(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}
var Dalye={
	Engine:null,
	Shader:null,
};
Dalye.Engine=function (){
	this.i0=0;
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
