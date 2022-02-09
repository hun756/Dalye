#ifndef DEFINITONS_HPP
#define DEFINITONS_HPP

#include <stdint.h>
#include <string>

///< types
typedef void            DALYE_TYPE_VOID;
typedef void*           DALYE_TYPE_HANDLE;
typedef float           DALYE_TYPE_FLOAT32;
typedef double          DALYE_TYPE_FLOAT64;
typedef int16_t         DALYE_TYPE_INT16;
typedef int32_t         DALYE_TYPE_INT32;
typedef int64_t         DALYE_TYPE_INT64;
typedef uint16_t        DALYE_TYPE_UINT16;
typedef uint32_t        DALYE_TYPE_UINT32;
typedef uint64_t        DALYE_TYPE_UINT64;
typedef char            DALYE_TYPE_CHAR;
typedef const char*     DALYE_TYPE_CCSTR;
typedef char*           DALYE_TYPE_CSTR;
typedef wchar_t         DALYE_TYPE_WCHAR;
typedef unsigned char   DALYE_TYPE_UCHAR;
typedef std::string     DALYE_TYPE_STR;

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