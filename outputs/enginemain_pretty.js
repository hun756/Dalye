"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul = Math.imul;
var __fround = Math.fround;
var oSlot = 0; var nullArray = [null]; var nullObj = { d: nullArray, o: 0 };
var __stackPtr = 1048576 | 0;
function __ZN5Dalye6Engine4loopEv(Larg0) {
	var tmp0 = null, LsavedStack = null, LsavedStacko = 0, tmp2 = null, tmp3 = 0, tmp4 = null;
	try {
		LsavedStack = __stackPtr;
		tmp2 = -8 + LsavedStack | 0;
		__stackPtr = tmp2;
		tmp3 = (Larg0.i0 | 0) + 1 | 0;
		Larg0.i0 = tmp3;
		tmp0 = { i0: 0, i1: 0, a2: nullArray };
		__ZSt9to_stringi(tmp0, tmp3);
		tmp4 = tmp0.a2;
		tmp4 = _cheerpCreate_ZN6client6StringC2EPKc(tmp4, 0);
		try {
			document.title = tmp4;
			_gl.clearColor(0, 0, 0, 1);
			tmp2 = _gl;
			tmp2.clear((+((tmp2.COLOR_BUFFER_BIT) | 0)));
			tmp2 = [{ a0: null }];
			tmp2[0].a0 = Larg0;
			tmp2 = cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZN5Dalye6Engine4loopEvE3$_0JEEEvPT_DpT0_, tmp2[0]);
			+requestAnimationFrame(tmp2);
			__stackPtr = LsavedStack;
			return;
		} catch ($except) {
			tmp3 = $except;
		}
	} catch ($except) {
		tmp3 = $except;
	}
	tmp3 = ___gxx_personality_v0(tmp3, 0, 0);
	LsavedStacko = HEAP32[tmp3 >> 2];
	LsavedStack = HEAP8;
	HEAP32[(tmp2 >> 0) >> 2] = (LsavedStacko | 0);
	HEAP32[4 + (tmp2 >> 0) >> 2] = HEAP32[4 + tmp3 >> 2] | 0;
	___cxa_resume(tmp2 >> 0 | 0);
	;
}
function __ZN5Dalye6Engine5startEv(Larg0) {
	Larg0.a1 = __ZN5Dalye11GLUtilities10initializeEv();
	__ZN5Dalye6Engine4loopEv(Larg0);
}
function __ZN5Dalye6Engine6resizeEv(Larg0) {
	Larg0.a1.width = +innerWidth;
	Larg0.a1.height = +innerHeight;
}
function __ZN5Dalye6EngineC1Ev(Larg0) {
	Larg0.i0 = 0;
}
function __ZN5Dalye11GLUtilities10initializeEv() {
	var tmp0 = 0, LsavedStack = null, LsavedStacko = 0, tmp2 = null;
	try {
		LsavedStack = __stackPtr;
		tmp2 = -8 + LsavedStack | 0;
		__stackPtr = tmp2;
		"canvas";
	} catch ($except) {
		tmp0 = $except;
		tmp0 = ___gxx_personality_v0(tmp0, 0, 0);
		LsavedStacko = HEAP32[tmp0 >> 2];
		LsavedStack = HEAP8;
		HEAP32[(tmp2 >> 0) >> 2] = (LsavedStacko | 0);
		HEAP32[4 + (tmp2 >> 0) >> 2] = HEAP32[4 + tmp0 >> 2] | 0;
		___cxa_resume(tmp2 >> 0 | 0);
		;
	}
	tmp2 = "canvas";
	__ZN5Dalye11GLUtilities6canvasE = document.createElement(tmp2);
	tmp2 = document.body;
	tmp2.appendChild(__ZN5Dalye11GLUtilities6canvasE);
	tmp2 = __ZN5Dalye11GLUtilities10initializeEPKc();
	__stackPtr = LsavedStack;
	return tmp2;
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0, Marg0) {
	var tmp0 = null, Lgeptoindexphi = 0, tmp2 = null;
	tmp0 = String();
	if ((Larg0[Marg0] & 255) === 0) return String(tmp0);
	Lgeptoindexphi = 0;
	while (1) {
		tmp2 = String.fromCharCode(Larg0[Marg0 + Lgeptoindexphi | 0] << 24 >> 24);
		tmp0 = tmp0.concat(tmp2);
		Lgeptoindexphi = Lgeptoindexphi + 1 | 0;
		if ((Larg0[Marg0 + Lgeptoindexphi | 0] & 255) !== 0) continue;
		break;
	}
	return String(tmp0);
}
function __ZN5Dalye11GLUtilities10initializeEPKc() {
	var tmp0 = null, LsavedStack = null, LsavedStacko = 0, tmp2 = null, tmp3 = null, tmp4 = 0;
	a: {
		try {
			LsavedStack = __stackPtr;
			tmp2 = -8 + LsavedStack | 0;
			__stackPtr = tmp2;
			tmp3 = "elem";
		} catch ($except) {
			tmp4 = $except;
			tmp4 = ___gxx_personality_v0(tmp4, 0, 0);
			LsavedStacko = HEAP32[tmp4 >> 2];
			LsavedStack = HEAP8;
			HEAP32[(tmp2 >> 0) >> 2] = (LsavedStacko | 0);
			HEAP32[4 + (tmp2 >> 0) >> 2] = HEAP32[4 + tmp4 >> 2] | 0;
			break a;
		}
		__ZN5Dalye11GLUtilities6canvasE = document.getElementById(tmp3);
		tmp3 = __ZN5Dalye11GLUtilities6canvasE;
		if (tmp3 !== null) {
			tmp0 = "webgl";
			_gl = tmp3.getContext(tmp0);
			if (_gl !== null) {
				tmp2 = __ZN5Dalye11GLUtilities6canvasE;
				__stackPtr = LsavedStack;
				return tmp2;
			}
			try {
				LsavedStack = [{ a0: null, a1: { i0: 0, i1: 0, a2: nullArray } }];
				tmp3 = LsavedStack[0];
				__ZN20GLUtilitiesExceptionC2EPKc(tmp3, _$pstr$p6, 0);
			} catch ($except) {
				tmp4 = $except;
				tmp4 = ___gxx_personality_v0(tmp4, 0, 0);
				LsavedStacko = HEAP32[tmp4 >> 2];
				LsavedStack = HEAP8;
				HEAP32[(tmp2 >> 0) >> 2] = (LsavedStacko | 0);
				HEAP32[4 + (tmp2 >> 0) >> 2] = HEAP32[4 + tmp4 >> 2] | 0;
				break a;
			}
			___cxa_throw(LsavedStack, __ZTI20GLUtilitiesException, __ZN20GLUtilitiesExceptionD2Ev);
			;
		}
		try {
			LsavedStack = [{ a0: null, a1: { i0: 0, i1: 0, a2: nullArray } }];
			tmp3 = LsavedStack[0];
			__ZN20GLUtilitiesExceptionC2EPKc(tmp3, _$pstr$p4, 0);
		} catch ($except) {
			tmp4 = $except;
			tmp4 = ___gxx_personality_v0(tmp4, 0, 0);
			LsavedStacko = HEAP32[tmp4 >> 2];
			LsavedStack = HEAP8;
			HEAP32[(tmp2 >> 0) >> 2] = (LsavedStacko | 0);
			HEAP32[4 + (tmp2 >> 0) >> 2] = HEAP32[4 + tmp4 >> 2] | 0;
			break a;
		}
		___cxa_throw(LsavedStack, __ZTI20GLUtilitiesException, __ZN20GLUtilitiesExceptionD2Ev);
		;
	}
	___cxa_resume(tmp2 >> 0 | 0);
	;
}
function __ZN20GLUtilitiesExceptionC2EPKc(Larg0, Larg1, Marg1) {
	var tmp0 = null, LsavedStack = null, LsavedStacko = 0, tmp2 = null, Lgeptoindexphi = 0, Lgeptoindexphi5 = 0, Lgeptoindexphi8 = 0;
	LsavedStack = __stackPtr;
	tmp2 = -8 + LsavedStack | 0;
	__stackPtr = tmp2;
	Larg0.a0 = __ZTV20GLUtilitiesException;
	if ((Larg1[Marg1] & 255) !== 0) {
		Lgeptoindexphi = 0;
		while (1) {
			Lgeptoindexphi = Lgeptoindexphi + 1 | 0;
			if ((Larg1[Marg1 + Lgeptoindexphi | 0] & 255) !== 0) continue;
			break;
		}
	} else {
		Lgeptoindexphi = 0;
	}
	Lgeptoindexphi = (Marg1 + Lgeptoindexphi | 0) - (Marg1) | 0;
	if (Lgeptoindexphi >>> 0 > 2147483631) {
		try {
			__ZNKSs20__throw_length_errorEv();
		} catch ($except) {
			Lgeptoindexphi = $except;
			Lgeptoindexphi = ___gxx_personality_v0(Lgeptoindexphi, 0, 0);
			LsavedStacko = HEAP32[Lgeptoindexphi >> 2];
			LsavedStack = HEAP8;
			HEAP32[(tmp2 >> 0) >> 2] = (LsavedStacko | 0);
			HEAP32[4 + (tmp2 >> 0) >> 2] = HEAP32[4 + Lgeptoindexphi >> 2] | 0;
			___cxa_resume(tmp2 >> 0 | 0);
			;
		}
		;
	}
	Lgeptoindexphi5 = Lgeptoindexphi + 16 & -16;
	tmp2 = new Uint8Array(Lgeptoindexphi5 / 1 | 0);
	tmp0 = Larg0.a1;
	tmp0.a2 = tmp2;
	tmp0.i0 = Lgeptoindexphi5 | -2147483648;
	tmp0.i1 = Lgeptoindexphi;
	if ((Lgeptoindexphi | 0) !== 0) {
		Lgeptoindexphi8 = 0;
		Lgeptoindexphi5 = 0;
		while (1) {
			tmp2[Lgeptoindexphi8] = Larg1[Marg1 + Lgeptoindexphi5 | 0] | 0;
			Lgeptoindexphi8 = Lgeptoindexphi8 + 1 | 0;
			if (tmp2 !== tmp2 || (0 + Lgeptoindexphi | 0) !== (0 + Lgeptoindexphi8 | 0)) {
				Lgeptoindexphi5 = Lgeptoindexphi5 + 1 | 0;
				continue;
			}
			break;
		}
	}
	tmp2[Lgeptoindexphi] = 0;
	__stackPtr = LsavedStack;
}
function __ZN20GLUtilitiesExceptionD2Ev(Larg0) {
	Larg0.a0 = __ZTV20GLUtilitiesException;
}
function __ZN20GLUtilitiesExceptionD0Ev(Larg0) {
	Larg0.a0 = __ZTV20GLUtilitiesException;
}
function __ZNK20GLUtilitiesException4whatEv(Larg0) {
	var tmp0 = null;
	tmp0 = Larg0.a1.a2;
	return tmp0[0];
}
function __ZNKSs20__throw_length_errorEv() {
	__ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv();
	;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZN5Dalye6Engine4loopEvE3$_0JEEEvPT_DpT0_(Larg0) {
	__ZN5Dalye6Engine4loopEv(Larg0.a0);
}
function __Z7webMainv() {
	var tmp0 = null, tmp1 = null, tmp2 = null;
	tmp0 = [null];
	tmp1 = "DOMContentLoaded";
	tmp2 = [{ a0: nullArray }];
	tmp2[0].a0 = tmp0;
	tmp2 = cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_1JEEEvPT_DpT0_, tmp2[0]);
	document.addEventListener(tmp1, tmp2);
	tmp1 = "resize";
	tmp2 = [{ a0: nullArray }];
	tmp2[0].a0 = tmp0;
	tmp2 = cheerpCreateClosure(__ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_2JEEEvPT_DpT0_, tmp2[0]);
	document.addEventListener(tmp1, tmp2);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_1JEEEvPT_DpT0_(Larg0) {
	var tmp0 = null, tmp1 = null;
	tmp1 = new Dalye.Engine(undefined);
	tmp1.i0 = 0;
	tmp0 = Larg0.a0;
	tmp0[0] = tmp1;
	tmp1 = "Engine Initilized..";
	console.log(tmp1);
	tmp1 = Larg0.a0;
	tmp1 = tmp1[0];
	tmp1.a1 = __ZN5Dalye11GLUtilities10initializeEv();
	__ZN5Dalye6Engine4loopEv(tmp1);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ7webMainvE3$_2JEEEvPT_DpT0_(Larg0) {
	var tmp0 = null;
	tmp0 = Larg0.a0;
	tmp0 = tmp0[0];
	tmp0.a1.width = +innerWidth;
	tmp0.a1.height = +innerHeight;
}
function __ZN10__cxxabiv117__class_type_infoD2Ev(Larg0) {
}
function __ZN10__cxxabiv117__class_type_infoD0Ev(Larg0) {
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev(Larg0) {
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev(Larg0) {
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb(Larg0, Larg1, Larg2, Marg2, Larg3) {
	var tmp0 = null, tmp1 = null, tmp2 = 0;
	tmp0 = Larg0.a1;
	tmp1 = Larg1.a1;
	if (tmp0 === tmp1 && 0 === 0) return 1 | 0;
	tmp0 = Larg1.a0;
	tmp2 = Larg1.o | 0;
	tmp2 = ___dynamic_cast(tmp2 + 1 | 0, tmp0.a0) | 0;
	if ((tmp2 | 0) === -2147483648) return 0 | 0;
	if ((tmp2 | 0) !== 0) tmp0 = Larg1.a[Larg1.o - tmp2];
	else {
		tmp0 = Larg1;
	}
	if (tmp0 !== null) {
		tmp1 = new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
		tmp1.a0 = tmp0;
		tmp1.i1 = 0;
		tmp1.a2 = Larg0;
		tmp1.i3 = 0;
		tmp1.a4 = tmp0;
		tmp1.i5 = -1;
		tmp1.i6 = 0;
		tmp1.i7 = 0;
		tmp1.i8 = 0;
		tmp1.i9 = 0;
		tmp1.i10 = 0;
		tmp1.i11 = 0;
		tmp1.i12 = 0;
		tmp1.i13 = 0;
		tmp1.i15 = 0;
		tmp1.i14 = 1;
		tmp0.a0.a8(tmp0, tmp1, Larg2[Marg2] | 0, 1);
		tmp2 = tmp1.i8 | 0;
		if ((tmp2 | 0) === 1) Larg2[Marg2] = tmp1.i6 | 0;
		return ((tmp2 | 0) === 1 ? 1 : 0) | 0;
	}
	return 0 | 0;
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0, Larg1, Larg2, Larg3, Larg4, Larg5) {
	var tmp0 = null, Lmergedinsert = 0, tmp2 = null, Lgeptoindexphi = 0, Lgeptoindexphi3 = 0;
	tmp0 = Larg1.a2;
	a: {
		if (Larg5) {
			if (Larg0 !== tmp0) {
				tmp2 = Larg0.a1;
				tmp0 = tmp0.a1;
				Lmergedinsert = tmp2[0] | 0;
				if ((Lmergedinsert & 255) !== 0) {
					Lgeptoindexphi3 = 0;
					Lgeptoindexphi = 0;
					while (1) {
						if ((Lmergedinsert & 255) === (tmp0[Lgeptoindexphi3] & 255)) {
							Lgeptoindexphi = Lgeptoindexphi + 1 | 0;
							Lmergedinsert = tmp2[Lgeptoindexphi] | 0;
							Lgeptoindexphi3 = Lgeptoindexphi3 + 1 | 0;
							if ((Lmergedinsert & 255) !== 0) continue;
							Lmergedinsert = 0;
						}
						break;
					}
				} else {
					Lmergedinsert = 0;
					Lgeptoindexphi3 = 0;
				}
				if ((Lmergedinsert & 255) !== (tmp0[Lgeptoindexphi3] & 255)) break a;
			}
		} else {
			tmp2 = Larg0.a1;
			tmp0 = tmp0.a1;
			if (tmp2 !== tmp0 || 0 !== 0) break a;
		}
		Lmergedinsert = Larg1.i15 & 16711935 | 256;
		Larg1.i15 = Lmergedinsert;
		if ((Larg1.i1 | 0) === (Larg3 | 0)) {
			Larg1.i15 = Lmergedinsert & 16711936 | 1;
			Lmergedinsert = Larg1.i6 | 0;
			if ((Lmergedinsert | 0) !== 0) {
				if ((Lmergedinsert | 0) === (Larg2 | 0)) {
					if ((Larg1.i8 | 0) === 2) Larg1.i8 = Larg4;
					if ((Larg1.i14 | 0) !== 1) break a;
					if ((Larg1.i8 | 0) !== 1) break a;
				} else Larg1.i11 = (Larg1.i11 | 0) + 1 | 0;
			} else {
				Larg1.i6 = Larg2;
				Larg1.i8 = Larg4;
				Larg1.i11 = 1;
				if (!((Larg1.i14 | 0) === 1 ? ((Larg4 | 0) === 1 ? 1 : 0) | 0 : 0 | 0)) break a;
			}
			Larg1.i15 = 65793;
		}
	}
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0, Larg1, Larg2, Larg3, Larg4) {
	var tmp0 = null, tmp1 = null, tmp2 = 0, Lgeptoindexphi3 = 0, Lgeptoindexphi13 = 0, Lgeptoindexphi = 0;
	tmp0 = Larg1.a2;
	a: {
		b: {
			if (Larg4) {
				if (Larg0 === tmp0) break b;
				tmp1 = Larg0.a1;
				tmp0 = tmp0.a1;
				tmp2 = tmp1[0] | 0;
				if ((tmp2 & 255) === 0) {
					Lgeptoindexphi13 = 0;
					Lgeptoindexphi3 = 0;
				} else {
					Lgeptoindexphi13 = tmp2;
					Lgeptoindexphi3 = 0;
					Lgeptoindexphi = 0;
					while (1) {
						if ((Lgeptoindexphi13 & 255) === (tmp0[Lgeptoindexphi3] & 255)) {
							Lgeptoindexphi = Lgeptoindexphi + 1 | 0;
							Lgeptoindexphi13 = tmp1[Lgeptoindexphi] | 0;
							Lgeptoindexphi3 = Lgeptoindexphi3 + 1 | 0;
							if ((Lgeptoindexphi13 & 255) !== 0) continue;
							Lgeptoindexphi13 = 0;
						}
						break;
					}
				}
				if ((Lgeptoindexphi13 & 255) === (tmp0[Lgeptoindexphi3] & 255)) break b;
				tmp0 = Larg1.a0;
				if (Larg0 !== tmp0) {
					tmp0 = tmp0.a1;
					if ((tmp2 & 255) === 0) {
						tmp2 = 0;
						Lgeptoindexphi13 = 0;
					} else {
						Lgeptoindexphi13 = 0;
						Lgeptoindexphi3 = 0;
						while (1) {
							if ((tmp2 & 255) === (tmp0[Lgeptoindexphi13] & 255)) {
								Lgeptoindexphi3 = Lgeptoindexphi3 + 1 | 0;
								tmp2 = tmp1[Lgeptoindexphi3] | 0;
								Lgeptoindexphi13 = Lgeptoindexphi13 + 1 | 0;
								if ((tmp2 & 255) !== 0) continue;
								tmp2 = 0;
							}
							break;
						}
					}
					if ((tmp2 & 255) !== (tmp0[Lgeptoindexphi13] & 255)) break a;
				}
			} else {
				tmp1 = Larg0.a1;
				tmp0 = tmp0.a1;
				if (tmp1 === tmp0 && 0 === 0) break b;
				tmp0 = Larg1.a0;
				tmp0 = tmp0.a1;
				if (tmp1 !== tmp0 || 0 !== 0) break a;
			}
			if ((Larg1.i6 | 0) !== (Larg2 | 0)) if ((Larg1.i7 | 0) !== (Larg2 | 0)) {
				Larg1.i10 = Larg3;
				Larg1.i7 = Larg2;
				Larg1.i12 = (Larg1.i12 | 0) + 1 | 0;
				if ((Larg1.i11 | 0) === 1) if ((Larg1.i8 | 0) === 2) Larg1.i15 = Larg1.i15 & 65535 | 65536;
				Larg1.i13 = 4;
				break a;
			}
			if ((Larg3 | 0) !== 1) break a;
			Larg1.i10 = 1;
			break a;
		}
		if ((Larg1.i1 | 0) === (Larg2 | 0)) if ((Larg1.i9 | 0) !== 1) Larg1.i9 = Larg3;
	}
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0, Larg1, Larg2, Larg3) {
	var tmp0 = null, tmp1 = 0, tmp2 = null;
	tmp2 = Larg1.a2;
	tmp0 = Larg0.a1;
	tmp2 = tmp2.a1;
	if (tmp0 === tmp2 && 0 === 0) {
		tmp1 = Larg1.i6 | 0;
		if ((tmp1 | 0) !== 0) {
			if ((tmp1 | 0) === (Larg2 | 0)) {
				if ((Larg1.i8 | 0) === 2) Larg1.i8 = Larg3;
			} else {
				Larg1.i11 = (Larg1.i11 | 0) + 1 | 0;
				Larg1.i8 = 2;
				Larg1.i15 = Larg1.i15 & 65535 | 65536;
			}
		} else {
			Larg1.i6 = Larg2;
			Larg1.i8 = Larg3;
			Larg1.i11 = 1;
		}
	}
}
function ___dynamic_cast(Larg0, Larg1) {
	var tmp0 = null, tmp1 = null, tmp2 = 0;
	tmp0 = new constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE();
	tmp0.a0 = __ZTIN10__cxxabiv117__class_type_infoE;
	tmp0.i1 = Larg0;
	tmp0.a2 = __ZTIN10__cxxabiv116__shim_type_infoE;
	tmp0.i3 = 1;
	tmp0.a4 = Larg1;
	tmp0.i5 = 0;
	tmp0.i6 = 0;
	tmp0.i7 = 0;
	tmp0.i8 = 0;
	tmp0.i9 = 0;
	tmp0.i10 = 0;
	tmp0.i11 = 0;
	tmp0.i12 = 0;
	tmp0.i13 = 0;
	tmp0.i14 = 0;
	tmp0.i15 = 0;
	tmp1 = Larg1.a1;
	a: if (tmp1 === __ZTSN10__cxxabiv117__class_type_infoE && 0 === 0) {
		tmp0.i14 = 1;
		Larg1.a0.a6(Larg1, tmp0, 1, 1, 1, 0);
		if ((tmp0.i8 | 0) === 1) return Larg0 - 1 | 0;
	} else {
		Larg1.a0.a7(Larg1, tmp0, 1, 1, 0);
		tmp2 = tmp0.i11 | 0;
		if ((tmp2 | 0) !== 0) {
			if ((tmp2 | 0) !== 1) break a;
			if ((tmp0.i8 | 0) !== 1) if (!(((tmp0.i12 | 0) !== 0 ? 0 | 0 : ((tmp0.i9 | 0) === 1 ? 1 : 0) | 0) ? ((tmp0.i10 | 0) === 1 ? 1 : 0) | 0 : 0 | 0)) break a;
			tmp2 = tmp0.i6 | 0;
		} else {
			if (!(((tmp0.i12 | 0) === 1 ? ((tmp0.i9 | 0) === 1 ? 1 : 0) | 0 : 0 | 0) ? ((tmp0.i10 | 0) === 1 ? 1 : 0) | 0 : 0 | 0)) break a;
			tmp2 = tmp0.i7 | 0;
		}
		if ((tmp2 | 0) !== -2147483648) return Larg0 - tmp2 | 0;
	}
	return -2147483648 | 0;
}
function __ZN10__cxxabiv120__si_class_type_infoD2Ev(Larg0) {
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev(Larg0) {
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib(Larg0, Larg1, Larg2, Larg3, Larg4, Larg5) {
	var tmp0 = null, Lmergedinsert = 0, tmp2 = null, Lgeptoindexphi = 0, Lgeptoindexphi3 = 0;
	tmp0 = Larg1.a2;
	a: {
		b: {
			if (Larg5) {
				if (Larg0 !== tmp0) {
					tmp2 = Larg0.a1;
					tmp0 = tmp0.a1;
					Lmergedinsert = tmp2[0] | 0;
					if ((Lmergedinsert & 255) !== 0) {
						Lgeptoindexphi3 = 0;
						Lgeptoindexphi = 0;
						while (1) {
							if ((Lmergedinsert & 255) === (tmp0[Lgeptoindexphi3] & 255)) {
								Lgeptoindexphi = Lgeptoindexphi + 1 | 0;
								Lmergedinsert = tmp2[Lgeptoindexphi] | 0;
								Lgeptoindexphi3 = Lgeptoindexphi3 + 1 | 0;
								if ((Lmergedinsert & 255) !== 0) continue;
								Lmergedinsert = 0;
							}
							break;
						}
					} else {
						Lmergedinsert = 0;
						Lgeptoindexphi3 = 0;
					}
					if ((Lmergedinsert & 255) !== (tmp0[Lgeptoindexphi3] & 255)) break b;
				}
			} else {
				tmp2 = Larg0.a1;
				tmp0 = tmp0.a1;
				if (tmp2 !== tmp0 || 0 !== 0) break b;
			}
			Lmergedinsert = Larg1.i15 & 16711935 | 256;
			Larg1.i15 = Lmergedinsert;
			if ((Larg1.i1 | 0) !== (Larg3 | 0)) break a;
			Larg1.i15 = Lmergedinsert & 16711936 | 1;
			Lmergedinsert = Larg1.i6 | 0;
			if ((Lmergedinsert | 0) !== 0) {
				if ((Lmergedinsert | 0) === (Larg2 | 0)) {
					if ((Larg1.i8 | 0) === 2) Larg1.i8 = Larg4;
					if ((Larg1.i14 | 0) !== 1) break a;
					if ((Larg1.i8 | 0) !== 1) break a;
				} else Larg1.i11 = (Larg1.i11 | 0) + 1 | 0;
			} else {
				Larg1.i6 = Larg2;
				Larg1.i8 = Larg4;
				Larg1.i11 = 1;
				if (!((Larg1.i14 | 0) === 1 ? ((Larg4 | 0) === 1 ? 1 : 0) | 0 : 0 | 0)) break a;
			}
			Larg1.i15 = 65793;
			break a;
		}
		tmp0 = Larg0.a2;
		tmp0.a0.a6(tmp0, Larg1, Larg2, Larg3, Larg4, Larg5);
	}
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib(Larg0, Larg1, Larg2, Larg3, Larg4) {
	var tmp0 = null, tmp1 = null, tmp2 = 0, Lgeptoindexphi3 = 0, Lgeptoindexphi13 = 0, Lgeptoindexphi = 0;
	tmp0 = Larg1.a2;
	a: {
		b: {
			c: {
				if (Larg4) {
					if (Larg0 === tmp0) break b;
					tmp1 = Larg0.a1;
					tmp0 = tmp0.a1;
					tmp2 = tmp1[0] | 0;
					if ((tmp2 & 255) === 0) {
						Lgeptoindexphi13 = 0;
						Lgeptoindexphi3 = 0;
					} else {
						Lgeptoindexphi13 = tmp2;
						Lgeptoindexphi3 = 0;
						Lgeptoindexphi = 0;
						while (1) {
							if ((Lgeptoindexphi13 & 255) === (tmp0[Lgeptoindexphi3] & 255)) {
								Lgeptoindexphi = Lgeptoindexphi + 1 | 0;
								Lgeptoindexphi13 = tmp1[Lgeptoindexphi] | 0;
								Lgeptoindexphi3 = Lgeptoindexphi3 + 1 | 0;
								if ((Lgeptoindexphi13 & 255) !== 0) continue;
								Lgeptoindexphi13 = 0;
							}
							break;
						}
					}
					if ((Lgeptoindexphi13 & 255) === (tmp0[Lgeptoindexphi3] & 255)) break b;
					tmp0 = Larg1.a0;
					if (Larg0 !== tmp0) {
						tmp0 = tmp0.a1;
						if ((tmp2 & 255) === 0) {
							tmp2 = 0;
							Lgeptoindexphi13 = 0;
						} else {
							Lgeptoindexphi13 = 0;
							Lgeptoindexphi3 = 0;
							while (1) {
								if ((tmp2 & 255) === (tmp0[Lgeptoindexphi13] & 255)) {
									Lgeptoindexphi3 = Lgeptoindexphi3 + 1 | 0;
									tmp2 = tmp1[Lgeptoindexphi3] | 0;
									Lgeptoindexphi13 = Lgeptoindexphi13 + 1 | 0;
									if ((tmp2 & 255) !== 0) continue;
									tmp2 = 0;
								}
								break;
							}
						}
						if ((tmp2 & 255) !== (tmp0[Lgeptoindexphi13] & 255)) break c;
					}
				} else {
					tmp1 = Larg0.a1;
					tmp0 = tmp0.a1;
					if (tmp1 === tmp0 && 0 === 0) break b;
					tmp0 = Larg1.a0;
					tmp0 = tmp0.a1;
					if (tmp1 !== tmp0 || 0 !== 0) break c;
				}
				if ((Larg1.i6 | 0) !== (Larg2 | 0)) if ((Larg1.i7 | 0) !== (Larg2 | 0)) {
					Larg1.i10 = Larg3;
					if ((Larg1.i13 | 0) !== 4) {
						Larg1.i15 = Larg1.i15 & 16711680;
						tmp0 = Larg0.a2;
						tmp0.a0.a6(tmp0, Larg1, Larg2, Larg2, 1, Larg4);
						tmp2 = Larg1.i15 | 0;
						if ((tmp2 & 65280 & 16777215) !== 0) {
							Larg1.i13 = 3;
							if ((tmp2 & 255) !== 0) break a;
						} else Larg1.i13 = 4;
					}
					Larg1.i7 = Larg2;
					Larg1.i12 = (Larg1.i12 | 0) + 1 | 0;
					if ((Larg1.i11 | 0) !== 1) break a;
					if ((Larg1.i8 | 0) !== 2) break a;
					Larg1.i15 = Larg1.i15 & 65535 | 65536;
					break a;
				}
				if ((Larg3 | 0) !== 1) break a;
				Larg1.i10 = 1;
				break a;
			}
			tmp0 = Larg0.a2;
			tmp0.a0.a7(tmp0, Larg1, Larg2, Larg3, Larg4);
			break a;
		}
		if ((Larg1.i1 | 0) === (Larg2 | 0)) if ((Larg1.i9 | 0) !== 1) Larg1.i9 = Larg3;
	}
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli(Larg0, Larg1, Larg2, Larg3) {
	var tmp0 = null, tmp1 = 0, tmp2 = null;
	tmp2 = Larg1.a2;
	tmp0 = Larg0.a1;
	tmp2 = tmp2.a1;
	if (tmp0 === tmp2 && 0 === 0) {
		tmp1 = Larg1.i6 | 0;
		if ((tmp1 | 0) !== 0) {
			if ((tmp1 | 0) === (Larg2 | 0)) {
				if ((Larg1.i8 | 0) === 2) Larg1.i8 = Larg3;
			} else {
				Larg1.i11 = (Larg1.i11 | 0) + 1 | 0;
				Larg1.i8 = 2;
				Larg1.i15 = Larg1.i15 & 65535 | 65536;
			}
		} else {
			Larg1.i6 = Larg2;
			Larg1.i8 = Larg3;
			Larg1.i11 = 1;
		}
	} else {
		tmp2 = Larg0.a2;
		tmp2.a0.a8(tmp2, Larg1, Larg2, Larg3);
	}
}
function ___gxx_personality_v0(Larg0, Larg1, Larg2) {
	var LsavedStack = null, tmp1 = null, tmp2 = null, tmp2o = 0, tmp3 = 0, tmp4 = 0, L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = null, tmp6 = null, tmp6o = 0, tmp7 = null, tmp7o = 0, tmp8 = 0;
	LsavedStack = __stackPtr;
	tmp2 = -8 + LsavedStack | 0;
	__stackPtr = tmp2;
	if (!(HEAP8[1048592] | 0)) {
		HEAP32[1048588 >> 2] = 0;
		tmp3 = 0;
		HEAP32[1048584 >> 2] = (tmp3 | 0);
		HEAP8[1048592] = 1;
	}
	if (!(__ZZ20__gxx_personality_v0E5reent | 0)) if (!(__ZL8aborting | 0)) {
		__ZZ20__gxx_personality_v0E5reent = 1;
		tmp3 = Larg2 + Larg1 | 0;
		a: {
			b: if (((Larg0 instanceof CheerpException | 0) & 1) === 0) {
				if ((Larg2 | 0) > 0) {
					tmp4 = Larg1;
					while (1) {
						if (___cxa_cheerp_clause_table[tmp4].a0 === __ZTIN6cheerp11JSExceptionE) {
							tmp2 = [null];
							tmp2[0] = Larg0;
							tmp4 = __ZN10__cxxabiv19Exception9allocatorE$p2 | 0;
							c: {
								d: {
									if ((tmp4 | 0) > 1) {
										L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = __ZN10__cxxabiv19Exception9allocatorE$p1;
										tmp8 = 1;
										while (1) {
											if ((L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp8] & 255) !== 0) {
												tmp8 = tmp8 + 1 | 0;
												if ((tmp8 | 0) === (tmp4 | 0)) break d;
												continue;
											}
											break;
										}
									} else {
										tmp8 = 1;
									}
									if ((tmp8 | 0) !== (tmp4 | 0)) {
										tmp4 = tmp8;
										break c;
									}
								}
								tmp8 = tmp4 << 1;
								__ZN10__cxxabiv19Exception9allocatorE$p2 = tmp8;
								L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = __ZN10__cxxabiv19Exception9allocatorE$p0;
								if (L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed !== nullArray || 0 !== 0) L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed, L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed.length, tmp8 / 40 | 0);
								else L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = createArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp8 / 40 | 0);
								__ZN10__cxxabiv19Exception9allocatorE$p0 = L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed;
								tmp8 = __ZN10__cxxabiv19Exception9allocatorE$p2 | 0;
								L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = __ZN10__cxxabiv19Exception9allocatorE$p1;
								if (L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed !== nullArray || 0 !== 0) L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = (function () {
									var __old__ = L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed;
									var __ret__ = new Uint8Array(tmp8 / 1 | 0);
									__ret__.set(__old__.subarray(0, Math.min(__ret__.length, __old__.length)));
									return __ret__;
								})();
								else L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = new Uint8Array(tmp8 / 1 | 0);
								__ZN10__cxxabiv19Exception9allocatorE$p1 = L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed;
							}
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = __ZN10__cxxabiv19Exception9allocatorE$p0;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a1 = tmp2;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a1o = 0;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a2 = nullArray;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a2o = 0;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a3 = __ZTIN6cheerp11JSExceptionE;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a4 = null;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].i5 = 1;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].i6 = 0;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a8 = null;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a9 = null;
							tmp2 = __ZN10__cxxabiv19Exception9allocatorE$p1;
							tmp2[tmp4] = 1;
							L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed[tmp4].a0 = Larg0;
							__ZN10__cxxabiv1L17current_exceptionE = { d: L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed, o: 0 + tmp4 | 0 };
							break b;
						}
						tmp4 = tmp4 + 1 | 0;
						if ((tmp4 | 0) < (tmp3 | 0)) continue;
						break;
					}
				}
				tmp3 = tmp2 >> 0;
				HEAP32[4 + tmp3 >> 2] = 0;
				tmp4 = 0;
				HEAP32[tmp3 >> 2] = (tmp4 | 0);
				tmp2o = HEAP32[tmp3 >> 2];
				tmp2 = HEAP8;
				tmp4 = tmp2o;
				HEAP32[1048584 >> 2] = (tmp4 | 0);
				HEAP32[1048588 >> 2] = 0;
				break a;
			}
			tmp2 = __ZN10__cxxabiv1L17current_exceptionE;
			HEAP32[1048588 >> 2] = 0;
			tmp4 = tmp2.o;
			HEAP32[1048584 >> 2] = (tmp4 | 0);
			if ((Larg2 | 0) > 0) {
				tmp1 = { a0: [0], i1: 0, i2: 0 };
				tmp4 = Larg1;
				while (1) {
					L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed = ___cxa_cheerp_clause_table[tmp4];
					tmp6 = L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed.a0;
					if (tmp6 !== null) {
						try {
							tmp7 = tmp2.d[tmp2.o].a3;
							tmp1.a0[0] = 0;
							tmp1.i1 = 0;
							tmp1.i2 = 0;
							tmp8 = tmp6.a0.a5(tmp6, tmp7, tmp1.a0, 0, tmp1.i2) | 0;
						} catch ($except) {
							tmp3 = $except;
							tmp3 = ___gxx_personality_v0(tmp3, 0, 1);
							tmp2o = HEAP32[tmp3 >> 2];
							tmp2 = HEAP8;
							___clang_call_terminate(tmp2, tmp2o);
							;
						}
						tmp1.i1 = tmp8 ? 1 : 0;
						if (tmp8) {
							tmp6o = tmp2.d[tmp2.o].a1o;
							tmp6 = tmp2.d[tmp2.o].a1;
							tmp2.d[tmp2.o].a2 = tmp6;
							tmp2.d[tmp2.o].a2o = tmp6o;
							if ((tmp1.i2 & 255) !== 0) {
								tmp6 = tmp6[tmp6o];
								tmp2.d[tmp2.o].a2 = tmp6.d;
								tmp2.d[tmp2.o].a2o = tmp6.o;
							}
							tmp3 = tmp1.a0[0] | 0;
							if ((tmp3 | 0) !== 0) {
								tmp6o = tmp2.d[tmp2.o].a2o;
								tmp6 = tmp2.d[tmp2.o].a2;
								if (tmp6 !== nullArray || tmp6o !== 0) {
									tmp7o = tmp6[tmp6o].o - (-tmp3 | 0);
									tmp7 = tmp6[tmp6o].a;
									tmp2.d[tmp2.o].a2 = tmp7;
									tmp2.d[tmp2.o].a2o = tmp7o;
								}
							}
							HEAP32[1048588 >> 2] = L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed.i1 | 0;
						} else {
							tmp4 = tmp4 + 1 | 0;
							if ((tmp4 | 0) < (tmp3 | 0)) continue;
						}
					} else HEAP32[1048588 >> 2] = L__cxa_cheerp_clause_table$poptgep1$poptgep$poptgepsqueezed.i1 | 0;
					break;
				}
			}
			__ZZ20__gxx_personality_v0E5reent = 0;
		}
		__stackPtr = LsavedStack;
		return 1048584 | 0;
	}
	__ZL8aborting = 1;
	throw 'Program called std::terminate()';
	;
}
function ___clang_call_terminate(Larg0, Marg0) {
	___cxa_begin_catch(Larg0, Marg0);
	__ZL8aborting = 1;
	throw 'Program called std::terminate()';
	;
}
function ___cxa_begin_catch(Larg0, Marg0) {
	var tmp0 = 0, tmp1 = null, tmp2 = null, tmp3 = 0;
	tmp0 = Marg0;
	tmp1 = __ZN10__cxxabiv19Exception9allocatorE$p0;
	tmp3 = tmp1[tmp0].i6 | 0;
	tmp3 = (((tmp3 | 0) >= 0) ? tmp3 : 0 - (tmp3 | 0) | 0);
	tmp1[tmp0].i6 = tmp3 + 1 | 0;
	tmp2 = __ZN10__cxxabiv1L17thrown_exceptionsE;
	if (tmp1 !== tmp2.d || (0 + tmp0 | 0) !== tmp2.o) {
		tmp1[tmp0].a8 = tmp2.d[tmp2.o];
		__ZN10__cxxabiv1L17thrown_exceptionsE = { d: tmp1, o: 0 + tmp0 | 0 };
	}
}
function __ZNKSt11logic_error4whatEv(Larg0) {
	var tmp0 = null;
	tmp0 = Larg0.a1.a0;
	return null;
}
function __ZNSt11logic_errorD2Ev(Larg0) {
	var tmp0 = null;
	Larg0.a0 = __ZTVSt11logic_error;
	tmp0 = Larg0.a1.a0;
	tmp0.setInt32(8 + __imul(0, 12), (tmp0.getInt32(8 + __imul(0, 12), true) | 0) - 1 | 0, true);
}
function __ZNSt11logic_errorD0Ev(Larg0) {
	var tmp0 = null;
	Larg0.a0 = __ZTVSt11logic_error;
	tmp0 = Larg0.a1.a0;
	tmp0.setInt32(8 + __imul(0, 12), (tmp0.getInt32(8 + __imul(0, 12), true) | 0) - 1 | 0, true);
}
function __ZSt9to_stringi(Larg0, Larg1) {
	var tmp0 = null, tmp1 = 0, tmp2 = null, Lgeptoindexphi3 = 0, tmp4 = null, tmp4o = 0, Lgeptoindexphi = 0, tmp6 = 0;
	tmp0 = new Uint8Array(11);
	if ((Larg1 | 0) < 0) {
		tmp0[0] = 45;
		Lgeptoindexphi3 = -Larg1 | 0;
		tmp4o = 1;
		tmp4 = tmp0;
	} else {
		tmp4o = 0;
		tmp4 = tmp0;
		Lgeptoindexphi3 = Larg1;
	}
	Lgeptoindexphi = (11);
	tmp1 = Lgeptoindexphi - (tmp4o) | 0;
	a: {
		if ((tmp1 | 0) <= 9) {
			tmp6 = Math.clz32(Lgeptoindexphi3 | 1);
			tmp6 = __imul(32 - tmp6 | 0, 1233) >>> 12;
			if (((tmp6 + 1 | 0) + ((__ZNSt6__itoaL10__pow10_32E[tmp6] >>> 0 > Lgeptoindexphi3 >>> 0 ? 1 : 0) << 31 >> 31) | 0) > (tmp1 | 0)) {
				tmp4o = 11;
				tmp4 = tmp0;
				break a;
			}
		}
		tmp4 = __ZNSt6__itoa8__u32toaEjPc(Lgeptoindexphi3, tmp4, tmp4o);
		tmp4o = oSlot;
		Lgeptoindexphi = (tmp4o);
	}
	Lgeptoindexphi3 = Lgeptoindexphi - (0) | 0;
	if (Lgeptoindexphi3 >>> 0 > 2147483631) __ZNKSs20__throw_length_errorEv();
	;
	Lgeptoindexphi = Lgeptoindexphi3 + 16 & -16;
	tmp2 = new Uint8Array(Lgeptoindexphi / 1 | 0);
	Larg0.a2 = tmp2;
	Larg0.i0 = Lgeptoindexphi | -2147483648;
	Larg0.i1 = Lgeptoindexphi3;
	if (tmp0 === tmp4 && 0 === tmp4o) {
		Lgeptoindexphi = 0;
	} else {
		Lgeptoindexphi3 = 0;
		Lgeptoindexphi = 0;
		while (1) {
			tmp2[Lgeptoindexphi] = tmp0[Lgeptoindexphi3] | 0;
			Lgeptoindexphi3 = Lgeptoindexphi3 + 1 | 0;
			Lgeptoindexphi = Lgeptoindexphi + 1 | 0;
			if (tmp0 !== tmp4 || (0 + Lgeptoindexphi3 | 0) !== tmp4o) continue;
			break;
		}
	}
	tmp2[Lgeptoindexphi] = 0;
}
function ___cxa_throw(Larg0, Larg1, Larg2) {
	var tmp0 = null, tmp1 = null, tmp2 = null, tmp2o = 0;
	tmp2 = [{ d: Larg0, o: 0 }];
	tmp0 = [Larg1];
	tmp1 = [Larg2];
	tmp2 = __ZN10__cxxabiv19Exception8allocateIJRPvRPSt9type_infoRPFvS2_EEEEPS0_DpOT_(tmp2, 0, tmp0, 0, tmp1, 0);
	tmp2o = oSlot;
	__ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(tmp2, tmp2o);
	;
}
function __ZN10__cxxabiv19Exception8allocateIJRPvRPSt9type_infoRPFvS2_EEEEPS0_DpOT_(Larg0, Marg0, Larg1, Marg1, Larg2, Marg2) {
	var tmp0 = null, tmp1 = null, tmp2 = 0, tmp3 = null, tmp4 = 0, tmp5 = null;
	tmp2 = __ZN10__cxxabiv19Exception9allocatorE$p2 | 0;
	a: {
		b: {
			if ((tmp2 | 0) > 1) {
				tmp3 = __ZN10__cxxabiv19Exception9allocatorE$p1;
				tmp4 = 1;
				while (1) {
					if ((tmp3[tmp4] & 255) !== 0) {
						tmp4 = tmp4 + 1 | 0;
						if ((tmp4 | 0) === (tmp2 | 0)) break b;
						continue;
					}
					break;
				}
			} else {
				tmp4 = 1;
			}
			if ((tmp4 | 0) !== (tmp2 | 0)) {
				tmp2 = tmp4;
				break a;
			}
		}
		tmp4 = tmp2 << 1;
		__ZN10__cxxabiv19Exception9allocatorE$p2 = tmp4;
		tmp3 = __ZN10__cxxabiv19Exception9allocatorE$p0;
		if (tmp3 !== nullArray || 0 !== 0) tmp3 = resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp3, tmp3.length, tmp4 / 40 | 0);
		else tmp3 = createArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp4 / 40 | 0);
		__ZN10__cxxabiv19Exception9allocatorE$p0 = tmp3;
		tmp4 = __ZN10__cxxabiv19Exception9allocatorE$p2 | 0;
		tmp3 = __ZN10__cxxabiv19Exception9allocatorE$p1;
		if (tmp3 !== nullArray || 0 !== 0) tmp3 = (function () {
			var __old__ = tmp3;
			var __ret__ = new Uint8Array(tmp4 / 1 | 0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length, __old__.length)));
			return __ret__;
		})();
		else tmp3 = new Uint8Array(tmp4 / 1 | 0);
		__ZN10__cxxabiv19Exception9allocatorE$p1 = tmp3;
	}
	tmp3 = __ZN10__cxxabiv19Exception9allocatorE$p0;
	tmp5 = Larg0[Marg0];
	tmp0 = Larg1[Marg1];
	tmp1 = Larg2[Marg2];
	tmp3[tmp2].a1 = tmp5.d;
	tmp3[tmp2].a1o = tmp5.o;
	tmp3[tmp2].a2 = nullArray;
	tmp3[tmp2].a2o = 0;
	tmp3[tmp2].a3 = tmp0;
	tmp3[tmp2].a4 = tmp1;
	tmp3[tmp2].i5 = 1;
	tmp3[tmp2].i6 = 0;
	tmp3[tmp2].a8 = null;
	tmp3[tmp2].a9 = null;
	tmp5 = __ZN10__cxxabiv19Exception9allocatorE$p1;
	tmp5[tmp2] = 1;
	oSlot = 0 + tmp2 | 0;
	return tmp3;
}
function __ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Larg0, Marg0) {
	Larg0 = { d: Larg0, o: Marg0 };
	var tmp0 = 0, LsavedStack = null, tmp2 = null, tmp2o = 0;
	try {
		LsavedStack = __stackPtr;
		LsavedStack = -8 + LsavedStack | 0;
		__stackPtr = LsavedStack;
		__ZN10__cxxabiv1L17current_exceptionE = Larg0;
		tmp2 = Larg0.d[Larg0.o].a3;
		tmp2 = tmp2.a1;
		tmp2 = _cheerpCreate_ZN6client6StringC2EPKc(tmp2, 0);
	} catch ($except) {
		tmp0 = $except;
		tmp0 = ___gxx_personality_v0(tmp0, 1, 0);
		tmp2o = HEAP32[tmp0 >> 2];
		tmp2 = HEAP8;
		HEAP32[(LsavedStack >> 0) >> 2] = (tmp2o | 0);
		HEAP32[4 + (LsavedStack >> 0) >> 2] = HEAP32[4 + tmp0 >> 2] | 0;
		___cxa_resume(LsavedStack >> 0 | 0);
		;
	}
	LsavedStack = new CheerpException(tmp2);
	Larg0.d[Larg0.o].a0 = LsavedStack;
	throw LsavedStack;
	;
}
function __ZNSt6__itoa8__u32toaEjPc(Larg0, Larg1, Marg1) {
	var L$psink23 = 0, Lgeptoindexphi = 0, L$psink = 0, tmp3 = 0;
	if (Larg0 >>> 0 < 100000000) {
		if (Larg0 >>> 0 < 10000) {
			if (Larg0 >>> 0 < 100) {
				if (Larg0 >>> 0 < 10) {
					Larg1[Marg1] = Larg0 + 48 | 0;
					L$psink23 = 1;
				} else {
					Larg1[Marg1] = __ZNSt6__itoaL10cDigitsLutE[Larg0 << 1] | 0;
					Larg1[Marg1 + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[(Larg0 << 1) + 1 | 0] | 0;
					L$psink23 = 2;
				}
			} else {
				Lgeptoindexphi = (Larg0 & 65535) / 100 | 0;
				if (Larg0 >>> 0 < 1000) {
					Larg1[Marg1] = Lgeptoindexphi + 48 | 0;
					L$psink23 = 3;
					L$psink = 1;
				} else {
					Larg1[Marg1] = __ZNSt6__itoaL10cDigitsLutE[Lgeptoindexphi << 1 & 65535] | 0;
					Larg1[Marg1 + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[(Lgeptoindexphi << 1 & 65535) + 1 | 0] | 0;
					L$psink23 = 4;
					L$psink = 2;
				}
				Larg1[Marg1 + L$psink | 0] = __ZNSt6__itoaL10cDigitsLutE[(__imul(Lgeptoindexphi, 65436) | 0) + Larg0 << 1 & 65535] | 0;
				Larg1[(Marg1 + L$psink | 0) + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[((__imul(Lgeptoindexphi, 65436) | 0) + Larg0 << 1 & 65535) + 1 | 0] | 0;
			}
			oSlot = Marg1 + L$psink23 | 0;
			return Larg1;
		}
		L$psink23 = (Larg0 >>> 0) / 10000 | 0;
		if (Larg0 >>> 0 < 1000000) {
			if (Larg0 >>> 0 < 100000) {
				Larg1[Marg1] = L$psink23 + 48 | 0;
				Lgeptoindexphi = 1;
			} else {
				Larg1[Marg1] = __ZNSt6__itoaL10cDigitsLutE[L$psink23 << 1] | 0;
				Larg1[Marg1 + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[(L$psink23 << 1) + 1 | 0] | 0;
				Lgeptoindexphi = 2;
			}
		} else {
			if (Larg0 >>> 0 < 10000000) {
				Larg1[Marg1] = ((L$psink23 & 65535) / 100 | 0) + 48 | 0;
				L$psink = L$psink23;
				Lgeptoindexphi = 3;
				tmp3 = 1;
			} else {
				Larg1[Marg1] = __ZNSt6__itoaL10cDigitsLutE[(Larg0 >>> 0) / 1000000 << 1] | 0;
				Larg1[Marg1 + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[((Larg0 >>> 0) / 1000000 << 1) + 1 | 0] | 0;
				L$psink = L$psink23;
				Lgeptoindexphi = 4;
				tmp3 = 2;
			}
			Larg1[Marg1 + tmp3 | 0] = __ZNSt6__itoaL10cDigitsLutE[(L$psink & 65535) % 100 << 1 & 65535] | 0;
			Larg1[(Marg1 + tmp3 | 0) + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[((L$psink & 65535) % 100 << 1 & 65535) + 1 | 0] | 0;
		}
		L$psink = Larg0;
	} else {
		L$psink = (Larg0 >>> 0) / 100000000 | 0;
		if (Larg0 >>> 0 < 1000000000) {
			Larg1[Marg1] = L$psink + 48 | 0;
			tmp3 = 1;
		} else {
			Larg1[Marg1] = __ZNSt6__itoaL10cDigitsLutE[L$psink << 1] | 0;
			Larg1[Marg1 + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[(L$psink << 1) + 1 | 0] | 0;
			tmp3 = 2;
		}
		L$psink = (__imul(L$psink, -100000000) | 0) + Larg0 | 0;
		L$psink23 = (L$psink >>> 0) / 10000 | 0;
		Lgeptoindexphi = (L$psink23 & 65535) / 100 | 0;
		Larg1[Marg1 + tmp3 | 0] = __ZNSt6__itoaL10cDigitsLutE[Lgeptoindexphi << 1 & 65535] | 0;
		Larg1[(Marg1 + tmp3 | 0) + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[(Lgeptoindexphi << 1 & 65535) + 1 | 0] | 0;
		Larg1[(Marg1 + tmp3 | 0) + 2 | 0] = __ZNSt6__itoaL10cDigitsLutE[(__imul(Lgeptoindexphi, 65436) | 0) + L$psink23 << 1 & 65535] | 0;
		Larg1[(Marg1 + tmp3 | 0) + 3 | 0] = __ZNSt6__itoaL10cDigitsLutE[((__imul(Lgeptoindexphi, 65436) | 0) + L$psink23 << 1 & 65535) + 1 | 0] | 0;
		Lgeptoindexphi = tmp3 + 4 | 0;
	}
	L$psink23 = (__imul(L$psink23, -10000) | 0) + L$psink | 0;
	L$psink = (L$psink23 & 65535) / 100 | 0;
	Larg1[Marg1 + Lgeptoindexphi | 0] = __ZNSt6__itoaL10cDigitsLutE[L$psink << 1 & 65535] | 0;
	Larg1[(Marg1 + Lgeptoindexphi | 0) + 1 | 0] = __ZNSt6__itoaL10cDigitsLutE[(L$psink << 1 & 65535) + 1 | 0] | 0;
	Larg1[(Marg1 + Lgeptoindexphi | 0) + 2 | 0] = __ZNSt6__itoaL10cDigitsLutE[(__imul(L$psink, 65436) | 0) + L$psink23 << 1 & 65535] | 0;
	Larg1[(Marg1 + Lgeptoindexphi | 0) + 3 | 0] = __ZNSt6__itoaL10cDigitsLutE[((__imul(L$psink, 65436) | 0) + L$psink23 << 1 & 65535) + 1 | 0] | 0;
	oSlot = Marg1 + (Lgeptoindexphi + 4 | 0) | 0;
	return Larg1;
}
function __ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv() {
	__ZSt20__throw_length_errorPKc();
	;
}
function __ZSt20__throw_length_errorPKc() {
	var tmp0 = null, tmp1 = null, tmp2 = null;
	tmp0 = [{ a0: null, a1: { a0: nullObj } }];
	tmp1 = tmp0[0];
	tmp1.a0 = __ZTVSt11logic_error;
	tmp2 = new DataView(new ArrayBuffer(((25) + 7) & (~7)));
	tmp2.setInt32(0 + __imul(0, 12), 12, true);
	tmp2.setInt32(4 + __imul(0, 12), 12, true);
	tmp2.setInt32(8 + __imul(0, 12), 0, true);
	tmp2.setInt8(12 + __imul(0, 12), 98);
	tmp2.setInt8(1 * 1 + 12 + __imul(0, 12), 97);
	tmp2.setInt8(2 * 1 + 12 + __imul(0, 12), 115);
	tmp2.setInt8(3 * 1 + 12 + __imul(0, 12), 105);
	tmp2.setInt8(4 * 1 + 12 + __imul(0, 12), 99);
	tmp2.setInt8(5 * 1 + 12 + __imul(0, 12), 95);
	tmp2.setInt8(6 * 1 + 12 + __imul(0, 12), 115);
	tmp2.setInt8(7 * 1 + 12 + __imul(0, 12), 116);
	tmp2.setInt8(8 * 1 + 12 + __imul(0, 12), 114);
	tmp2.setInt8(9 * 1 + 12 + __imul(0, 12), 105);
	tmp2.setInt8(10 * 1 + 12 + __imul(0, 12), 110);
	tmp2.setInt8(11 * 1 + 12 + __imul(0, 12), 103);
	tmp2.setInt8(12 * 1 + 12 + __imul(0, 12), 0);
	tmp1.a1.a0 = tmp2;
	tmp1.a0 = __ZTVSt12length_error;
	___cxa_throw(tmp0, __ZTISt12length_error, __ZNSt12length_errorD2Ev);
	;
}
function __ZNSt12length_errorD2Ev(Larg0) {
	var tmp0 = null;
	Larg0.a0 = __ZTVSt11logic_error;
	tmp0 = Larg0.a1.a0;
	tmp0.setInt32(8 + __imul(0, 12), (tmp0.getInt32(8 + __imul(0, 12), true) | 0) - 1 | 0, true);
}
function __ZNSt12length_errorD0Ev(Larg0) {
	var tmp0 = null;
	Larg0.a0 = __ZTVSt11logic_error;
	tmp0 = Larg0.a1.a0;
	tmp0.setInt32(8 + __imul(0, 12), (tmp0.getInt32(8 + __imul(0, 12), true) | 0) - 1 | 0, true);
}
function ___cxa_resume(Larg0) {
	var tmp0 = 0, tmp1 = null, tmp1o = 0;
	tmp1o = HEAP32[Larg0 >> 2];
	tmp1 = HEAP8;
	tmp0 = tmp1o;
	tmp1 = __ZN10__cxxabiv19Exception9allocatorE$p0;
	tmp1 = tmp1[tmp0].a0;
	throw tmp1;
	;
}
var _$pstr$p1 = new Uint8Array([68, 79, 77, 67, 111, 110, 116, 101, 110, 116, 76, 111, 97, 100, 101, 100, 0]);
var _$pstr$p2 = new Uint8Array([114, 101, 115, 105, 122, 101, 0]);
var _$pstr$p7 = new Uint8Array([69, 110, 103, 105, 110, 101, 32, 73, 110, 105, 116, 105, 108, 105, 122, 101, 100, 46, 46, 0]);
var _$pstr$p3 = new Uint8Array([99, 97, 110, 118, 97, 115, 0]);
var __ZN5Dalye11GLUtilities6canvasE;
var _promotedMalloc$p3 = createArray_struct$p_ZN10__cxxabiv19ExceptionE(16);
var __ZN10__cxxabiv19Exception9allocatorE$p0 = _promotedMalloc$p3;
var _$pstr = new Uint8Array([101, 108, 101, 109, 0]);
var _$pstr$p4 = new Uint8Array([67, 97, 110, 110, 111, 116, 32, 102, 105, 110, 100, 32, 97, 32, 99, 97, 110, 118, 97, 115, 32, 69, 108, 101, 109, 101, 110, 116, 46, 33, 0]);
var __ZTSN10__cxxabiv120__si_class_type_infoE = new Uint8Array([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 48, 95, 95, 115, 105, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0]);
var __ZTSN10__cxxabiv117__class_type_infoE = new Uint8Array([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0]);
var __ZTSN10__cxxabiv116__shim_type_infoE = new Uint8Array([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 54, 95, 95, 115, 104, 105, 109, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0]);
var __ZTVN10__cxxabiv117__class_type_infoE = { a0: undefined, a1: __ZN10__cxxabiv117__class_type_infoD2Ev, a2: __ZN10__cxxabiv117__class_type_infoD0Ev, a3: __ZNK10__cxxabiv116__shim_type_info5noop1Ev, a4: __ZNK10__cxxabiv116__shim_type_info5noop2Ev, a5: __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb, a6: __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib, a7: __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib, a8: __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli };
var __ZTSSt9type_info = new Uint8Array([83, 116, 57, 116, 121, 112, 101, 95, 105, 110, 102, 111, 0]);
var __ZTISt9type_info = { a0: __ZTVN10__cxxabiv117__class_type_infoE, a1: __ZTSSt9type_info };
var __ZTIN10__cxxabiv116__shim_type_infoE = { a0: undefined, a1: __ZTSN10__cxxabiv116__shim_type_infoE, a2: __ZTISt9type_info };
var __ZTIN10__cxxabiv117__class_type_infoE = { a0: undefined, a1: __ZTSN10__cxxabiv117__class_type_infoE, a2: __ZTIN10__cxxabiv116__shim_type_infoE };
__ZTVN10__cxxabiv117__class_type_infoE.a0 = __ZTIN10__cxxabiv117__class_type_infoE;
var __ZTIN10__cxxabiv120__si_class_type_infoE = { a0: undefined, a1: __ZTSN10__cxxabiv120__si_class_type_infoE, a2: __ZTIN10__cxxabiv117__class_type_infoE };
var __ZTVN10__cxxabiv120__si_class_type_infoE = { a0: __ZTIN10__cxxabiv120__si_class_type_infoE, a1: __ZN10__cxxabiv120__si_class_type_infoD2Ev, a2: __ZN10__cxxabiv120__si_class_type_infoD0Ev, a3: __ZNK10__cxxabiv116__shim_type_info5noop1Ev, a4: __ZNK10__cxxabiv116__shim_type_info5noop2Ev, a5: __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERlRb, a6: __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEllib, a7: __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoElib, a8: __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEli };
__ZTIN10__cxxabiv116__shim_type_infoE.a0 = __ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv117__class_type_infoE.a0 = __ZTVN10__cxxabiv120__si_class_type_infoE;
__ZTIN10__cxxabiv120__si_class_type_infoE.a0 = __ZTVN10__cxxabiv120__si_class_type_infoE;
var __ZTS20GLUtilitiesException = new Uint8Array([50, 48, 71, 76, 85, 116, 105, 108, 105, 116, 105, 101, 115, 69, 120, 99, 101, 112, 116, 105, 111, 110, 0]);
var __ZTSSt9exception = new Uint8Array([83, 116, 57, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0]);
var __ZTISt9exception = { a0: __ZTVN10__cxxabiv117__class_type_infoE, a1: __ZTSSt9exception };
var __ZTI20GLUtilitiesException = { a0: __ZTVN10__cxxabiv120__si_class_type_infoE, a1: __ZTS20GLUtilitiesException, a2: __ZTISt9exception };
var _$pstr$p5 = new Uint8Array([119, 101, 98, 103, 108, 0]);
var _gl;
var _$pstr$p6 = new Uint8Array([85, 110, 97, 98, 108, 101, 32, 116, 111, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 32, 87, 101, 98, 71, 76, 0]);
var __ZN10__cxxabiv1L17current_exceptionE = nullObj;
var __ZN10__cxxabiv19Exception9allocatorE$p2 = 16;
var _promotedMalloc$p4 = new Uint8Array(16);
var __ZN10__cxxabiv19Exception9allocatorE$p1 = _promotedMalloc$p4;
var __ZTV20GLUtilitiesException = { a0: null, a1: __ZN20GLUtilitiesExceptionD2Ev, a2: __ZN20GLUtilitiesExceptionD0Ev, a3: __ZNK20GLUtilitiesException4whatEv };
var __ZTSSt11logic_error = new Uint8Array([83, 116, 49, 49, 108, 111, 103, 105, 99, 95, 101, 114, 114, 111, 114, 0]);
var __ZTISt11logic_error = { a0: __ZTVN10__cxxabiv120__si_class_type_infoE, a1: __ZTSSt11logic_error, a2: __ZTISt9exception };
var __ZTVSt11logic_error = { a0: __ZTISt11logic_error, a1: __ZNSt11logic_errorD2Ev, a2: __ZNSt11logic_errorD0Ev, a3: __ZNKSt11logic_error4whatEv };
var __ZTSSt12length_error = new Uint8Array([83, 116, 49, 50, 108, 101, 110, 103, 116, 104, 95, 101, 114, 114, 111, 114, 0]);
var __ZTISt12length_error = { a0: __ZTVN10__cxxabiv120__si_class_type_infoE, a1: __ZTSSt12length_error, a2: __ZTISt11logic_error };
var __ZTVSt12length_error = { a0: __ZTISt12length_error, a1: __ZNSt12length_errorD2Ev, a2: __ZNSt12length_errorD0Ev, a3: __ZNKSt11logic_error4whatEv };
var __ZZ20__gxx_personality_v0E5reent = 0;
var __ZL8aborting = 0;
var __ZTSN6cheerp11JSExceptionE = new Uint8Array([78, 54, 99, 104, 101, 101, 114, 112, 49, 49, 74, 83, 69, 120, 99, 101, 112, 116, 105, 111, 110, 69, 0]);
var __ZTIN6cheerp11JSExceptionE = { a0: __ZTVN10__cxxabiv117__class_type_infoE, a1: __ZTSN6cheerp11JSExceptionE };
var __ZN10__cxxabiv1L17thrown_exceptionsE = nullObj;
var __ZNSt6__itoaL10__pow10_32E = new Int32Array([0, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
var __ZNSt6__itoaL10cDigitsLutE = new Uint8Array([48, 48, 48, 49, 48, 50, 48, 51, 48, 52, 48, 53, 48, 54, 48, 55, 48, 56, 48, 57, 49, 48, 49, 49, 49, 50, 49, 51, 49, 52, 49, 53, 49, 54, 49, 55, 49, 56, 49, 57, 50, 48, 50, 49, 50, 50, 50, 51, 50, 52, 50, 53, 50, 54, 50, 55, 50, 56, 50, 57, 51, 48, 51, 49, 51, 50, 51, 51, 51, 52, 51, 53, 51, 54, 51, 55, 51, 56, 51, 57, 52, 48, 52, 49, 52, 50, 52, 51, 52, 52, 52, 53, 52, 54, 52, 55, 52, 56, 52, 57, 53, 48, 53, 49, 53, 50, 53, 51, 53, 52, 53, 53, 53, 54, 53, 55, 53, 56, 53, 57, 54, 48, 54, 49, 54, 50, 54, 51, 54, 52, 54, 53, 54, 54, 54, 55, 54, 56, 54, 57, 55, 48, 55, 49, 55, 50, 55, 51, 55, 52, 55, 53, 55, 54, 55, 55, 55, 56, 55, 57, 56, 48, 56, 49, 56, 50, 56, 51, 56, 52, 56, 53, 56, 54, 56, 55, 56, 56, 56, 57, 57, 48, 57, 49, 57, 50, 57, 51, 57, 52, 57, 53, 57, 54, 57, 55, 57, 56, 57, 57]);
var ___cxa_cheerp_clause_table = [{ a0: null, i1: 0 }];
function constructor_struct$p_ZN10__cxxabiv119__dynamic_cast_infoE() {
	this.a0 = null;
	this.i1 = 0;
	this.a2 = null;
	this.i3 = 0;
	this.a4 = null;
	this.i5 = 0;
	this.i6 = 0;
	this.i7 = 0;
	this.i8 = 0;
	this.i9 = 0;
	this.i10 = 0;
	this.i11 = 0;
	this.i12 = 0;
	this.i13 = 0;
	this.i14 = 0;
	this.i15 = 0;
}
function construct_literal10() {
	this.a0 = null;
	this.a1 = null;
	this.a2 = null;
	this.a3 = null;
	this.a4 = null;
	this.a5 = null;
	this.a6 = null;
	this.a7 = null;
	this.a8 = null;
}
function constructor_struct$p_ZN10__cxxabiv19ExceptionE() {
	this.a0 = null;
	this.a1 = nullArray;
	this.a1o = 0;
	this.a2 = nullArray;
	this.a2o = 0;
	this.a3 = null;
	this.a4 = null;
	this.i5 = 0;
	this.i6 = 0;
	this.a7 = null;
	this.a8 = null;
	this.a9 = null;
}
function createArray_struct$p_ZN10__cxxabiv19ExceptionE(e) {
	var r = [];
	for (var i = 0; i < e; i++)
		r[i] = new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(r, s, e) {
	for (var i = s; i < e; i++)
		r[i] = new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function cheerpCreateClosure(func, obj) { return function () { var a = Array.prototype.slice.call(arguments); a.unshift(obj); return func.apply(null, a); }; }
function cheerpCreateClosureSplit(func, obj, objo) { return function () { var a = Array.prototype.slice.call(arguments); a.unshift(obj, objo); return func.apply(null, a); }; }
function CheerpException(m) {
	var instance = new Error('Uncaught C++ exception: ' + m);
	instance.name = 'CheerpException';
	Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	if (Error.captureStackTrace) {
		Error.captureStackTrace(instance, CheerpException);
	}
	return instance;
}
CheerpException.prototype = Object.create(Error.prototype);
var Dalye = {
	Engine: null,
};
function __dummy() { throw new Error('this should be unreachable'); };
var __heap = new ArrayBuffer(8388608);
var HEAP8 = null, HEAP32 = null;
assignHeaps(__heap);
Dalye.Engine = function () {
	this.i0 = 0;
	this.a1 = null;
	;
	this.d = [this];
	if (arguments.length === 1 && arguments[0] === undefined) {
		return;
	}
	__ZN5Dalye6EngineC1Ev(this);
};
Dalye.Engine.prototype.start = function () {
	return __ZN5Dalye6Engine5startEv(this);
};
Dalye.Engine.prototype.loop = function () {
	return __ZN5Dalye6Engine4loopEv(this);
};
Dalye.Engine.prototype.resize = function () {
	return __ZN5Dalye6Engine6resizeEv(this);
};
Dalye.Engine.promise =
	Promise.resolve();
__Z7webMainv();
function assignHeaps(tmp0) {
	HEAP8 = new Uint8Array(tmp0);
	HEAP32 = new Int32Array(tmp0);
}
