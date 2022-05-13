"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var cR=Math.imul;var cS=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};var c$=1048576|0;function at(aW){var N=null,C=null,m=0,B=null,z=null,aY=0,q=null,r=0,x=null,g=null,aX=-0.,k=null,i=0,o=null,u=null;try{q=c$;N=-16+q|0;c$=N;C=new Dalye.Shader(undefined);m=N>>0;B="basic";}catch(df){i=df;i=ab(i,0,0);r=c[i>>2];q=a;c[m>>2]=(r|0);c[4+m>>2]=c[4+i>>2]|0;F(m);;}a:{try{x="attribute vec3 a_position;void main(){    gl_Position = vec4(a_position, 1.0);}";}catch(df){i=df;i=ab(i,0,0);r=c[i>>2];q=a;c[m>>2]=(r|0);c[4+m>>2]=c[4+i>>2]|0;break a;}b:{c:{try{g="precision mediump float;void main(){    gl_FragColor = vec4(1.0);}";try{C.a0=B;aX=+s.VERTEX_SHADER;try{z=s.createShader((+(~~aX|0)));try{s.shaderSource(z,x);try{s.compileShader(z);try{k=s.getShaderInfoLog(z);try{i=k.length;if((i|0)>0)try{o="Given shader error :";try{console.error(o,k);throw new Error('Error compiling shader');;}catch(df){i=df;break c;}}catch(df){i=df;break c;}try{aX=+s.FRAGMENT_SHADER;try{k=s.createShader((+(~~aX|0)));try{s.shaderSource(k,g);try{s.compileShader(k);try{o=s.getShaderInfoLog(k);try{i=o.length;if((i|0)>0)try{u="Given shader error :";try{console.error(u,o);throw new Error('Error compiling shader');;}catch(df){i=df;break c;}}catch(df){i=df;break c;}try{i=(N>>0)+8|0;o=new Object();}catch(df){aY=df;aY=ab(aY,0,0);r=c[aY>>2];q=a;c[i>>2]=(r|0);c[4+i>>2]=c[4+aY>>2]|0;break b;}try{s.attachShader(o,z);try{s.attachShader(o,k);try{s.linkProgram(o);try{k=s.getProgramInfoLog(o);if(k!==null)try{u="Shader linking error :";try{console.error(u,k);throw new Error('Error linking shader');;}catch(df){i=df;break c;}}catch(df){i=df;break c;}C.a1=o;aW.a2=C;c$=q;return;}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}catch(df){i=df;}}i=ab(i,0,0);}r=c[i>>2];q=a;c[m>>2]=(r|0);c[4+m>>2]=c[4+i>>2]|0;}F(m);;}function ac(o){var k=null,q=null,r=0,g=null,m=0,i=null;try{q=c$;g=-8+q|0;c$=g;m=(o.i0|0)+1|0;o.i0=m;k={i0:0,i1:0,a2:nullArray};bc(k,m);i=k.a2;i=w(i,0);try{document.title=i;s.clearColor(0,0,0,1);g=s;g.clear((+((g.COLOR_BUFFER_BIT)|0)));g=[{a0:null}];g[0].a0=o;g=c8(bu,g[0]);+requestAnimationFrame(g);c$=q;return;}catch(df){m=df;}}catch(df){m=df;}m=ab(m,0,0);r=c[m>>2];q=a;c[(g>>0)>>2]=(r|0);c[4+(g>>0)>>2]=c[4+m>>2]|0;F(g>>0|0);;}function cL(g){g.a1=aE();at(g);s.useProgram(g.a2.a1);ac(g);}function cO(i){var g=null;g=i.a1;if(g!==null){g.width=+innerWidth;i.a1.height=+innerHeight;}}function cQ(g){g.i0=0;}function cP(g){s.useProgram(g.a1);}function cM(aW,N,C,B){var z=null,o=null,k=0,x=0,q=null,r=0,u=-0.,g=null,i=null,m=null;q=c$;z=-8+q|0;c$=z;aW.a0=N;u=+s.VERTEX_SHADER;o=s.createShader((+(~~u|0)));s.shaderSource(o,C);s.compileShader(o);g=s.getShaderInfoLog(o);if(((g.length)|0)>0){i="Given shader error :";console.error(i,g);throw new Error('Error compiling shader');;}u=+s.FRAGMENT_SHADER;g=s.createShader((+(~~u|0)));s.shaderSource(g,B);s.compileShader(g);i=s.getShaderInfoLog(g);if(((i.length)|0)>0){m="Given shader error :";console.error(m,i);throw new Error('Error compiling shader');;}try{k=z>>0;i=new Object();}catch(df){x=df;x=ab(x,0,0);r=c[x>>2];q=a;c[k>>2]=(r|0);c[4+k>>2]=c[4+x>>2]|0;F(k);;}s.attachShader(i,o);s.attachShader(i,g);s.linkProgram(i);g=s.getProgramInfoLog(i);if(g!==null){m="Shader linking error :";console.error(m,g);throw new Error('Error linking shader');;}aW.a1=i;c$=q;}function cN(g){return g.a0;}function w(g,h){var i=null,m=0,k=null;i=String();if((g[h]&255)===0)return String(i);m=0;while(1){k=String.fromCharCode(g[h+m|0]<<24>>24);i=i.concat(k);m=m+1|0;if((g[h+m|0]&255)!==0)continue;break;}return String(i);}function aE(){var k=0,i=null,j=0,g=null;try{i=c$;g=-8+i|0;c$=g;"canvas";}catch(df){k=df;k=ab(k,0,0);j=c[k>>2];i=a;c[(g>>0)>>2]=(j|0);c[4+(g>>0)>>2]=c[4+k>>2]|0;F(g>>0|0);;}g="canvas";M=document.createElement(g);g=document.body;g.appendChild(M);g=bX();c$=i;return g;}function bX(){var o=null,g=null,h=0,m=null,k=null,i=0;a:{try{g=c$;m=-8+g|0;c$=m;k="elem";}catch(df){i=df;i=ab(i,0,0);h=c[i>>2];g=a;c[(m>>0)>>2]=(h|0);c[4+(m>>0)>>2]=c[4+i>>2]|0;break a;}M=document.getElementById(k);k=M;if(k!==null){o="webgl";s=k.getContext(o);if(s!==null){m=M;c$=g;return m;}try{g=[{a0:null,a1:{i0:0,i1:0,a2:nullArray}}];k=g[0];ax(k,aM,0);}catch(df){i=df;i=ab(i,0,0);h=c[i>>2];g=a;c[(m>>0)>>2]=(h|0);c[4+(m>>0)>>2]=c[4+i>>2]|0;break a;}Z(g,ch,V);;}try{g=[{a0:null,a1:{i0:0,i1:0,a2:nullArray}}];k=g[0];ax(k,aQ,0);}catch(df){i=df;i=ab(i,0,0);h=c[i>>2];g=a;c[(m>>0)>>2]=(h|0);c[4+(m>>0)>>2]=c[4+i>>2]|0;break a;}Z(g,ch,V);;}F(m>>0|0);;}function ax(x,u,v){var q=null,o=null,p=0,i=null,g=0,m=0,k=0;o=c$;i=-8+o|0;c$=i;x.a0=b8;if((u[v]&255)!==0){g=0;while(1){g=g+1|0;if((u[v+g|0]&255)!==0)continue;break;}}else{g=0;}g=(v+g|0)-(v)|0;if(g>>>0>2147483631){try{aC();}catch(df){g=df;g=ab(g,0,0);p=c[g>>2];o=a;c[(i>>0)>>2]=(p|0);c[4+(i>>0)>>2]=c[4+g>>2]|0;F(i>>0|0);;};}m=g+16& -16;i=new Uint8Array(m/1|0);q=x.a1;q.a2=i;q.i0=m| -2147483648;q.i1=g;if((g|0)!==0){k=0;m=0;while(1){i[k]=u[v+m|0]|0;k=k+1|0;if(i!==i||(0+g|0)!==(0+k|0)){m=m+1|0;continue;}break;}}i[g]=0;c$=o;}function V(g){g.a0=b8;}function bW(g){g.a0=b8;}function bV(g){var i=null;i=g.a1.a2;return i[0];}function aC(){ba();;}function bu(g){ac(g.a0);}function br(){var k=null,i=null,g=null;k=[null];i="DOMContentLoaded";g=[{a0:nullArray}];g[0].a0=k;g=c8(bi,g[0]);document.addEventListener(i,g);i="resize";g=[{a0:nullArray}];g[0].a0=k;g=c8(bR,g[0]);document.addEventListener(i,g);}function bi(i){var k=null,g=null;g=new Dalye.Engine(undefined);g.i0=0;k=i.a0;k[0]=g;g="Engine Initilized..";console.log(g);g=i.a0;g=g[0];g.a1=aE();at(g);s.useProgram(g.a2.a1);ac(g);}function bR(k){var i=null,g=null;g=k.a0;g=g[0];i=g.a1;if(i!==null){i.width=+innerWidth;g.a1.height=+innerHeight;}}function bE(g){}function bH(g){}function bT(g){}function bM(g){}function by(u,q,o,p,m){var i=null,g=null,k=0;i=u.a1;g=q.a1;if(i===g&&0===0)return 1|0;i=q.a0;k=q.o|0;k=bF(k+1|0,i.a0)|0;if((k|0)===-2147483648)return 0|0;if((k|0)!==0)i=q.a[q.o-k];else{i=q;}if(i!==null){g=new cw();g.a0=i;g.i1=0;g.a2=u;g.i3=0;g.a4=i;g.i5=-1;g.i6=0;g.i7=0;g.i8=0;g.i9=0;g.i10=0;g.i11=0;g.i12=0;g.i13=0;g.i15=0;g.i14=1;i.a0.a8(i,g,o[p]|0,1);k=g.i8|0;if((k|0)===1)o[p]=g.i6|0;return ((k|0)===1?1:0)|0;}return 0|0;}function bL(C,B,z,x,u,q){var k=null,g=0,o=null,m=0,i=0;k=B.a2;a:{if(q){if(C!==k){o=C.a1;k=k.a1;g=o[0]|0;if((g&255)!==0){i=0;m=0;while(1){if((g&255)===(k[i]&255)){m=m+1|0;g=o[m]|0;i=i+1|0;if((g&255)!==0)continue;g=0;}break;}}else{g=0;i=0;}if((g&255)!==(k[i]&255))break a;}}else{o=C.a1;k=k.a1;if(o!==k||0!==0)break a;}g=B.i15&16711935|256;B.i15=g;if((B.i1|0)===(x|0)){B.i15=g&16711936|1;g=B.i6|0;if((g|0)!==0){if((g|0)===(z|0)){if((B.i8|0)===2)B.i8=u;if((B.i14|0)!==1)break a;if((B.i8|0)!==1)break a;}else B.i11=(B.i11|0)+1|0;}else{B.i6=z;B.i8=u;B.i11=1;if(!((B.i14|0)===1?((u|0)===1?1:0)|0:0|0))break a;}B.i15=65793;}}}function bD(C,B,z,x,u){var k=null,o=null,m=0,i=0,g=0,q=0;k=B.a2;a:{b:{if(u){if(C===k)break b;o=C.a1;k=k.a1;m=o[0]|0;if((m&255)===0){g=0;i=0;}else{g=m;i=0;q=0;while(1){if((g&255)===(k[i]&255)){q=q+1|0;g=o[q]|0;i=i+1|0;if((g&255)!==0)continue;g=0;}break;}}if((g&255)===(k[i]&255))break b;k=B.a0;if(C!==k){k=k.a1;if((m&255)===0){m=0;g=0;}else{g=0;i=0;while(1){if((m&255)===(k[g]&255)){i=i+1|0;m=o[i]|0;g=g+1|0;if((m&255)!==0)continue;m=0;}break;}}if((m&255)!==(k[g]&255))break a;}}else{o=C.a1;k=k.a1;if(o===k&&0===0)break b;k=B.a0;k=k.a1;if(o!==k||0!==0)break a;}if((B.i6|0)!==(z|0))if((B.i7|0)!==(z|0)){B.i10=x;B.i7=z;B.i12=(B.i12|0)+1|0;if((B.i11|0)===1)if((B.i8|0)===2)B.i15=B.i15&65535|65536;B.i13=4;break a;}if((x|0)!==1)break a;B.i10=1;break a;}if((B.i1|0)===(z|0))if((B.i9|0)!==1)B.i9=x;}}function bx(q,o,m,k){var u=null,i=0,g=null;g=o.a2;u=q.a1;g=g.a1;if(u===g&&0===0){i=o.i6|0;if((i|0)!==0){if((i|0)===(m|0)){if((o.i8|0)===2)o.i8=k;}else{o.i11=(o.i11|0)+1|0;o.i8=2;o.i15=o.i15&65535|65536;}}else{o.i6=m;o.i8=k;o.i11=1;}}}function bF(m,k){var g=null,o=null,i=0;g=new cw();g.a0=aR;g.i1=m;g.a2=aN;g.i3=1;g.a4=k;g.i5=0;g.i6=0;g.i7=0;g.i8=0;g.i9=0;g.i10=0;g.i11=0;g.i12=0;g.i13=0;g.i14=0;g.i15=0;o=k.a1;a:if(o===aS&&0===0){g.i14=1;k.a0.a6(k,g,1,1,1,0);if((g.i8|0)===1)return m-1|0;}else{k.a0.a7(k,g,1,1,0);i=g.i11|0;if((i|0)!==0){if((i|0)!==1)break a;if((g.i8|0)!==1)if(!(((g.i12|0)!==0?0|0:((g.i9|0)===1?1:0)|0)?((g.i10|0)===1?1:0)|0:0|0))break a;i=g.i6|0;}else{if(!(((g.i12|0)===1?((g.i9|0)===1?1:0)|0:0|0)?((g.i10|0)===1?1:0)|0:0|0))break a;i=g.i7|0;}if((i|0)!==-2147483648)return m-i|0;}return  -2147483648|0;}function bC(g){}function bB(g){}function bz(C,B,z,x,u,q){var k=null,g=0,o=null,m=0,i=0;k=B.a2;a:{b:{if(q){if(C!==k){o=C.a1;k=k.a1;g=o[0]|0;if((g&255)!==0){i=0;m=0;while(1){if((g&255)===(k[i]&255)){m=m+1|0;g=o[m]|0;i=i+1|0;if((g&255)!==0)continue;g=0;}break;}}else{g=0;i=0;}if((g&255)!==(k[i]&255))break b;}}else{o=C.a1;k=k.a1;if(o!==k||0!==0)break b;}g=B.i15&16711935|256;B.i15=g;if((B.i1|0)!==(x|0))break a;B.i15=g&16711936|1;g=B.i6|0;if((g|0)!==0){if((g|0)===(z|0)){if((B.i8|0)===2)B.i8=u;if((B.i14|0)!==1)break a;if((B.i8|0)!==1)break a;}else B.i11=(B.i11|0)+1|0;}else{B.i6=z;B.i8=u;B.i11=1;if(!((B.i14|0)===1?((u|0)===1?1:0)|0:0|0))break a;}B.i15=65793;break a;}k=C.a2;k.a0.a6(k,B,z,x,u,q);}}function bN(C,B,z,x,u){var g=null,o=null,k=0,m=0,i=0,q=0;g=B.a2;a:{b:{c:{if(u){if(C===g)break b;o=C.a1;g=g.a1;k=o[0]|0;if((k&255)===0){i=0;m=0;}else{i=k;m=0;q=0;while(1){if((i&255)===(g[m]&255)){q=q+1|0;i=o[q]|0;m=m+1|0;if((i&255)!==0)continue;i=0;}break;}}if((i&255)===(g[m]&255))break b;g=B.a0;if(C!==g){g=g.a1;if((k&255)===0){k=0;i=0;}else{i=0;m=0;while(1){if((k&255)===(g[i]&255)){m=m+1|0;k=o[m]|0;i=i+1|0;if((k&255)!==0)continue;k=0;}break;}}if((k&255)!==(g[i]&255))break c;}}else{o=C.a1;g=g.a1;if(o===g&&0===0)break b;g=B.a0;g=g.a1;if(o!==g||0!==0)break c;}if((B.i6|0)!==(z|0))if((B.i7|0)!==(z|0)){B.i10=x;if((B.i13|0)!==4){B.i15=B.i15&16711680;g=C.a2;g.a0.a6(g,B,z,z,1,u);k=B.i15|0;if((k&65280&16777215)!==0){B.i13=3;if((k&255)!==0)break a;}else B.i13=4;}B.i7=z;B.i12=(B.i12|0)+1|0;if((B.i11|0)!==1)break a;if((B.i8|0)!==2)break a;B.i15=B.i15&65535|65536;break a;}if((x|0)!==1)break a;B.i10=1;break a;}g=C.a2;g.a0.a7(g,B,z,x,u);break a;}if((B.i1|0)===(z|0))if((B.i9|0)!==1)B.i9=x;}}function bS(q,o,m,k){var u=null,i=0,g=null;g=o.a2;u=q.a1;g=g.a1;if(u===g&&0===0){i=o.i6|0;if((i|0)!==0){if((i|0)===(m|0)){if((o.i8|0)===2)o.i8=k;}else{o.i11=(o.i11|0)+1|0;o.i8=2;o.i15=o.i15&65535|65536;}}else{o.i6=m;o.i8=k;o.i11=1;}}else{g=q.a2;g.a0.a8(g,o,m,k);}}function ab(B,z,x){var N=null,u=null,o=null,p=0,m=0,g=0,i=null,q=null,r=0,C=null,D=0,k=0;N=c$;o=-8+N|0;c$=o;if(!(a[1048592]|0)){c[1048588>>2]=0;m=0;c[1048584>>2]=(m|0);a[1048592]=1;}if(!(ag|0))if(!(ae|0)){ag=1;m=x+z|0;a:{b:if(((B instanceof CheerpException|0)&1)===0){if((x|0)>0){g=z;while(1){if(aL[g].a0===ce){o=[null];o[0]=B;g=K|0;c:{d:{if((g|0)>1){i=G;k=1;while(1){if((i[k]&255)!==0){k=k+1|0;if((k|0)===(g|0))break d;continue;}break;}}else{k=1;}if((k|0)!==(g|0)){g=k;break c;}}k=g<<1;K=k;i=H;if(i!==nullArray||0!==0)i=cK(i,i.length,k/40|0);else i=cJ(k/40|0);H=i;k=K|0;i=G;if(i!==nullArray||0!==0)i=(function(){var __old__=i;var __ret__=new Uint8Array(k/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else i=new Uint8Array(k/1|0);G=i;}i=H;i[g].a1=o;i[g].a1o=0;i[g].a2=nullArray;i[g].a2o=0;i[g].a3=ce;i[g].a4=null;i[g].i5=1;i[g].i6=0;i[g].a8=null;i[g].a9=null;o=G;o[g]=1;i[g].a0=B;ah={d:i,o:0+g|0};break b;}g=g+1|0;if((g|0)<(m|0))continue;break;}}m=o>>0;c[4+m>>2]=0;g=0;c[m>>2]=(g|0);p=c[m>>2];o=a;g=p;c[1048584>>2]=(g|0);c[1048588>>2]=0;break a;}o=ah;c[1048588>>2]=0;g=o.o;c[1048584>>2]=(g|0);if((x|0)>0){u={a0:[0],i1:0,i2:0};g=z;while(1){i=aL[g];q=i.a0;if(q!==null){try{C=o.d[o.o].a3;u.a0[0]=0;u.i1=0;u.i2=0;k=q.a0.a5(q,C,u.a0,0,u.i2)|0;}catch(df){m=df;m=ab(m,0,1);p=c[m>>2];o=a;bU(o,p);;}u.i1=k?1:0;if(k){r=o.d[o.o].a1o;q=o.d[o.o].a1;o.d[o.o].a2=q;o.d[o.o].a2o=r;if((u.i2&255)!==0){q=q[r];o.d[o.o].a2=q.d;o.d[o.o].a2o=q.o;}m=u.a0[0]|0;if((m|0)!==0){r=o.d[o.o].a2o;q=o.d[o.o].a2;if(q!==nullArray||r!==0){D=q[r].o-(-m|0);C=q[r].a;o.d[o.o].a2=C;o.d[o.o].a2o=D;}}c[1048588>>2]=i.i1|0;}else{g=g+1|0;if((g|0)<(m|0))continue;}}else c[1048588>>2]=i.i1|0;break;}}ag=0;}c$=N;return 1048584|0;}ae=1;throw 'Program called std::terminate()';;}function bU(g,h){bw(g,h);ae=1;throw 'Program called std::terminate()';;}function bw(k,l){var o=0,m=null,i=null,g=0;o=l;m=H;g=m[o].i6|0;g=(((g|0)>=0)?g:0-(g|0)|0);m[o].i6=g+1|0;i=aK;if(m!==i.d||(0+o|0)!==i.o){m[o].a8=i.d[i.o];aK={d:m,o:0+o|0};}}function bf(g){var i=null;i=g.a1.a0;return null;}function bd(g){var i=null;g.a0=cb;i=g.a1.a0;i.setInt32(8+cR(0,12),(i.getInt32(8+cR(0,12),true)|0)-1|0,true);}function a_(g){var i=null;g.a0=cb;i=g.a1.a0;i.setInt32(8+cR(0,12),(i.getInt32(8+cR(0,12),true)|0)-1|0,true);}function bc(z,x){var q=null,u=0,o=null,i=0,k=null,l=0,g=0,m=0;q=new Uint8Array(11);if((x|0)<0){q[0]=45;i=-x|0;l=1;k=q;}else{l=0;k=q;i=x;}g=(11);u=g-(l)|0;a:{if((u|0)<=9){m=Math.clz32(i|1);m=cR(32-m|0,1233)>>>12;if(((m+1|0)+((b9[m]>>>0>i>>>0?1:0)<<31>>31)|0)>(u|0)){l=11;k=q;break a;}}k=be(i,k,l);l=oSlot;g=(l);}i=g-(0)|0;if(i>>>0>2147483631)aC();;g=i+16& -16;o=new Uint8Array(g/1|0);z.a2=o;z.i0=g| -2147483648;z.i1=i;if(q===k&&0===l){g=0;}else{i=0;g=0;while(1){o[g]=q[i]|0;i=i+1|0;g=g+1|0;if(q!==k||(0+i|0)!==l)continue;break;}}o[g]=0;}function Z(k,i,g){var q=null,o=null,m=null,n=0;m=[{d:k,o:0}];q=[i];o=[g];m=a9(m,0,q,0,o,0);n=oSlot;a2(m,n);;}function a9(u,v,q,r,o,p){var z=null,x=null,k=0,i=null,g=0,m=null;k=K|0;a:{b:{if((k|0)>1){i=G;g=1;while(1){if((i[g]&255)!==0){g=g+1|0;if((g|0)===(k|0))break b;continue;}break;}}else{g=1;}if((g|0)!==(k|0)){k=g;break a;}}g=k<<1;K=g;i=H;if(i!==nullArray||0!==0)i=cK(i,i.length,g/40|0);else i=cJ(g/40|0);H=i;g=K|0;i=G;if(i!==nullArray||0!==0)i=(function(){var __old__=i;var __ret__=new Uint8Array(g/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else i=new Uint8Array(g/1|0);G=i;}i=H;m=u[v];z=q[r];x=o[p];i[k].a1=m.d;i[k].a1o=m.o;i[k].a2=nullArray;i[k].a2o=0;i[k].a3=z;i[k].a4=x;i[k].i5=1;i[k].i6=0;i[k].a8=null;i[k].a9=null;m=G;m[k]=1;oSlot=0+k|0;return i;}function a2(m,n){m={d:m,o:n};var k=0,i=null,g=null,h=0;try{i=c$;i=-8+i|0;c$=i;ah=m;g=m.d[m.o].a3;g=g.a1;g=w(g,0);}catch(df){k=df;k=ab(k,1,0);h=c[k>>2];g=a;c[(i>>0)>>2]=(h|0);c[4+(i>>0)>>2]=c[4+k>>2]|0;F(i>>0|0);;}i=new CheerpException(g);m.d[m.o].a0=i;throw i;;}function be(q,o,p){var g=0,k=0,i=0,m=0;if(q>>>0<100000000){if(q>>>0<10000){if(q>>>0<100){if(q>>>0<10){o[p]=q+48|0;g=1;}else{o[p]=A[q<<1]|0;o[p+1|0]=A[(q<<1)+1|0]|0;g=2;}}else{k=(q&65535)/100|0;if(q>>>0<1000){o[p]=k+48|0;g=3;i=1;}else{o[p]=A[k<<1&65535]|0;o[p+1|0]=A[(k<<1&65535)+1|0]|0;g=4;i=2;}o[p+i|0]=A[(cR(k,65436)|0)+q<<1&65535]|0;o[(p+i|0)+1|0]=A[((cR(k,65436)|0)+q<<1&65535)+1|0]|0;}oSlot=p+g|0;return o;}g=(q>>>0)/10000|0;if(q>>>0<1000000){if(q>>>0<100000){o[p]=g+48|0;k=1;}else{o[p]=A[g<<1]|0;o[p+1|0]=A[(g<<1)+1|0]|0;k=2;}}else{if(q>>>0<10000000){o[p]=((g&65535)/100|0)+48|0;i=g;k=3;m=1;}else{o[p]=A[(q>>>0)/1000000<<1]|0;o[p+1|0]=A[((q>>>0)/1000000<<1)+1|0]|0;i=g;k=4;m=2;}o[p+m|0]=A[(i&65535)%100<<1&65535]|0;o[(p+m|0)+1|0]=A[((i&65535)%100<<1&65535)+1|0]|0;}i=q;}else{i=(q>>>0)/100000000|0;if(q>>>0<1000000000){o[p]=i+48|0;m=1;}else{o[p]=A[i<<1]|0;o[p+1|0]=A[(i<<1)+1|0]|0;m=2;}i=(cR(i,-100000000)|0)+q|0;g=(i>>>0)/10000|0;k=(g&65535)/100|0;o[p+m|0]=A[k<<1&65535]|0;o[(p+m|0)+1|0]=A[(k<<1&65535)+1|0]|0;o[(p+m|0)+2|0]=A[(cR(k,65436)|0)+g<<1&65535]|0;o[(p+m|0)+3|0]=A[((cR(k,65436)|0)+g<<1&65535)+1|0]|0;k=m+4|0;}g=(cR(g,-10000)|0)+i|0;i=(g&65535)/100|0;o[p+k|0]=A[i<<1&65535]|0;o[(p+k|0)+1|0]=A[(i<<1&65535)+1|0]|0;o[(p+k|0)+2|0]=A[(cR(i,65436)|0)+g<<1&65535]|0;o[(p+k|0)+3|0]=A[((cR(i,65436)|0)+g<<1&65535)+1|0]|0;oSlot=p+(k+4|0)|0;return o;}function ba(){bh();;}function bh(){var k=null,i=null,g=null;k=[{a0:null,a1:{a0:nullObj}}];i=k[0];i.a0=cb;g=new DataView(new ArrayBuffer(((25)+ 7) & (~7)));g.setInt32(0+cR(0,12),12,true);g.setInt32(4+cR(0,12),12,true);g.setInt32(8+cR(0,12),0,true);g.setInt8(12+cR(0,12),98);g.setInt8(1*1+12+cR(0,12),97);g.setInt8(2*1+12+cR(0,12),115);g.setInt8(3*1+12+cR(0,12),105);g.setInt8(4*1+12+cR(0,12),99);g.setInt8(5*1+12+cR(0,12),95);g.setInt8(6*1+12+cR(0,12),115);g.setInt8(7*1+12+cR(0,12),116);g.setInt8(8*1+12+cR(0,12),114);g.setInt8(9*1+12+cR(0,12),105);g.setInt8(10*1+12+cR(0,12),110);g.setInt8(11*1+12+cR(0,12),103);g.setInt8(12*1+12+cR(0,12),0);i.a1.a0=g;i.a0=b$;Z(k,cf,X);;}function X(g){var i=null;g.a0=cb;i=g.a1.a0;i.setInt32(8+cR(0,12),(i.getInt32(8+cR(0,12),true)|0)-1|0,true);}function a1(g){var i=null;g.a0=cb;i=g.a1.a0;i.setInt32(8+cR(0,12),(i.getInt32(8+cR(0,12),true)|0)-1|0,true);}function F(g){var k=0,i=null,j=0;j=c[g>>2];i=a;k=j;i=H;i=i[k].a0;throw i;;}var aU=new Uint8Array([68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100,0]);var aV=new Uint8Array([114,101,115,105,122,101,0]);var aP=new Uint8Array([69,110,103,105,110,101,32,73,110,105,116,105,108,105,122,101,100,46,46,0]);var s;var aj=new Uint8Array([99,97,110,118,97,115,0]);var M;var cq=cJ(16);var H=cq;var aO=new Uint8Array([101,108,101,109,0]);var aQ=new Uint8Array([67,97,110,110,111,116,32,102,105,110,100,32,97,32,99,97,110,118,97,115,32,69,108,101,109,101,110,116,46,33,0]);var ci=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);var aS=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0]);var cs=new Uint8Array([78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0]);var cp={a0:undefined,a1:bE,a2:bH,a3:bT,a4:bM,a5:by,a6:bL,a7:bD,a8:bx};var cg=new Uint8Array([83,116,57,116,121,112,101,95,105,110,102,111,0]);var co={a0:cp,a1:cg};var aN={a0:undefined,a1:cs,a2:co};var aR={a0:undefined,a1:aS,a2:aN};cp.a0=aR;var cn={a0:undefined,a1:ci,a2:aR};var cm={a0:cn,a1:bC,a2:bB,a3:bT,a4:bM,a5:by,a6:bz,a7:bN,a8:bS};aN.a0=cm;aR.a0=cm;cn.a0=cm;var cl=new Uint8Array([50,48,71,76,85,116,105,108,105,116,105,101,115,69,120,99,101,112,116,105,111,110,0]);var ck=new Uint8Array([83,116,57,101,120,99,101,112,116,105,111,110,0]);var cj={a0:cp,a1:ck};var ch={a0:cm,a1:cl,a2:cj};var aT=new Uint8Array([119,101,98,103,108,0]);var aM=new Uint8Array([85,110,97,98,108,101,32,116,111,32,105,110,105,116,105,97,108,105,122,101,32,87,101,98,71,76,0]);var ah=nullObj;var K=16;var cr=new Uint8Array(16);var G=cr;var b8={a0:null,a1:V,a2:bW,a3:bV};var ca=new Uint8Array([83,116,49,49,108,111,103,105,99,95,101,114,114,111,114,0]);var cc={a0:cm,a1:ca,a2:cj};var cb={a0:cc,a1:bd,a2:a_,a3:bf};var cd=new Uint8Array([83,116,49,50,108,101,110,103,116,104,95,101,114,114,111,114,0]);var cf={a0:cm,a1:cd,a2:cc};var b$={a0:cf,a1:X,a2:a1,a3:bf};var ag=0;var ae=0;var b_=new Uint8Array([78,54,99,104,101,101,114,112,49,49,74,83,69,120,99,101,112,116,105,111,110,69,0]);var ce={a0:cp,a1:b_};var aK=nullObj;var aJ=new Uint8Array([98,97,115,105,99,0]);var aH=new Uint8Array([97,116,116,114,105,98,117,116,101,32,118,101,99,51,32,97,95,112,111,115,105,116,105,111,110,59,118,111,105,100,32,109,97,105,110,40,41,123,32,32,32,32,103,108,95,80,111,115,105,116,105,111,110,32,61,32,118,101,99,52,40,97,95,112,111,115,105,116,105,111,110,44,32,49,46,48,41,59,125,0]);var aG=new Uint8Array([112,114,101,99,105,115,105,111,110,32,109,101,100,105,117,109,112,32,102,108,111,97,116,59,118,111,105,100,32,109,97,105,110,40,41,123,32,32,32,32,103,108,95,70,114,97,103,67,111,108,111,114,32,61,32,118,101,99,52,40,49,46,48,41,59,125,0]);var L=new Uint8Array([71,105,118,101,110,32,115,104,97,100,101,114,32,101,114,114,111,114,32,58,0]);var af=new Uint8Array([83,104,97,100,101,114,32,108,105,110,107,105,110,103,32,101,114,114,111,114,32,58,0]);var b9=new Int32Array([0,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);var A=new Uint8Array([48,48,48,49,48,50,48,51,48,52,48,53,48,54,48,55,48,56,48,57,49,48,49,49,49,50,49,51,49,52,49,53,49,54,49,55,49,56,49,57,50,48,50,49,50,50,50,51,50,52,50,53,50,54,50,55,50,56,50,57,51,48,51,49,51,50,51,51,51,52,51,53,51,54,51,55,51,56,51,57,52,48,52,49,52,50,52,51,52,52,52,53,52,54,52,55,52,56,52,57,53,48,53,49,53,50,53,51,53,52,53,53,53,54,53,55,53,56,53,57,54,48,54,49,54,50,54,51,54,52,54,53,54,54,54,55,54,56,54,57,55,48,55,49,55,50,55,51,55,52,55,53,55,54,55,55,55,56,55,57,56,48,56,49,56,50,56,51,56,52,56,53,56,54,56,55,56,56,56,57,57,48,57,49,57,50,57,51,57,52,57,53,57,54,57,55,57,56,57,57]);var aL=[{a0:null,i1:0}];function cH(){this.a0=null;this.a1=null;this.a2=null;this.a3=null;this.a4=null;this.a5=null;this.a6=null;this.a7=null;this.a8=null;}function cw(){this.a0=null;this.i1=0;this.a2=null;this.i3=0;this.a4=null;this.i5=0;this.i6=0;this.i7=0;this.i8=0;this.i9=0;this.i10=0;this.i11=0;this.i12=0;this.i13=0;this.i14=0;this.i15=0;}function cI(){this.a0=null;this.a1=nullArray;this.a1o=0;this.a2=nullArray;this.a2o=0;this.a3=null;this.a4=null;this.i5=0;this.i6=0;this.a7=null;this.a8=null;this.a9=null;}function cJ(e){var r=[];for(var i=0;i<e;i++)r[i]=new cI();return r;}function cK(r,s,e){for(var i=s;i<e;i++)r[i]=new cI();return r;}function c8(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}function c9(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}function CheerpException(m){var instance=new Error('Uncaught C++ exception: '+m);instance.name='CheerpException';Object.setPrototypeOf(instance,Object.getPrototypeOf(this));if(Error.captureStackTrace){Error.captureStackTrace(instance, CheerpException);}return instance;}CheerpException.prototype=Object.create(Error.prototype);var Dalye={Engine:null,Shader:null,};function dc(){throw new Error('this should be unreachable');};var __heap = new ArrayBuffer(8388608);var a=null,c=null;db(__heap);Dalye.Engine=function (){this.i0=0;this.a1=null;this.a2=null;;this.d=[this];if (arguments.length===1&&arguments[0]===undefined){return;}cQ(this);};Dalye.Engine.prototype.start=function (){return cL(this);};Dalye.Engine.prototype.loop=function (){return ac(this);};Dalye.Engine.prototype.resize=function (){return cO(this);};Dalye.Engine.prototype.loadShaders=function (){return at(this);};Dalye.Shader=function (a0,a1,a2){this.a0=null;this.a1=null;;this.d=[this];if (arguments.length===1&&arguments[0]===undefined){return;}cM(this,a0,a1,a2);};Dalye.Shader.prototype.use=function (){return cP(this);};Dalye.Shader.prototype.getName=function (){return cN(this);};Dalye.Engine.promise=Dalye.Shader.promise=Promise.resolve();br();function db(g){a=new Uint8Array(g);c=new Int32Array(g);}