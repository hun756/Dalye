#ifndef DEFINITONS_HPP
#define DEFINITONS_HPP

#include <stdint.h>
#include <string>

///< types
typedef void            DT_VOID;
typedef void*           DT_HANDLE;
typedef float           DT_FLOAT32;
typedef double          DT_FLOAT64;
typedef int16_t         DT_INT16;
typedef int32_t         DT_INT32;
typedef int64_t         DT_INT64;
typedef uint16_t        DT_UINT16;
typedef uint32_t        DT_UINT32;
typedef uint64_t        DT_UINT64;
typedef char            DT_CHAR;
typedef const char*     DT_CCSTR;
typedef char*           DT_CSTR;
typedef wchar_t         DT_WCHAR;
typedef unsigned char   DT_UCHAR;
typedef std::string     DT_STR;

///< namespaces
#define CCLIENT_NS_BEGIN namespace [[cheerp::genericjs]] client {
#define CCLIENT_NS_END }
#define DALYE_NS_BEGIN namespace Dalye {    
#define CDALYE_NS_BEGIN namespace [[cheerp::genericjs]] Dalye {    
#define DALYE_NS_END }

#define CHEERP_STATIC [[cheerp::static]]
#define CHEERP_WASM [[cheerp::wasm]]
#define CHEERP_JSEXPORT [[cheerp::jsexport]]   
#define CHEERP_GENERICJS [[cheerp::genericjs]]
#define CHEERP_EXPORT [[cheerp::jsexport]] [[cheerp::genericjs]]

#endif // !DEFINITONS_HPP