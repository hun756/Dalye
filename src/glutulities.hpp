#ifndef GLUTILITIES_HPP
#define GLUTILITIES_HPP

#include <string.h>

#include <cheerp/client.h>
#include <cheerp/clientlib.h>
#include <cheerp/webgl.h>
#include <cheerp/jsobject.h>

#include "definitions.hpp"
#include "errors.hpp"

extern client::WebGLRenderingContext* gl;

DALYE_NS_BEGIN
class CHEERP_GENERICJS GLUtilities
{
public:
    /**
     * @brief Construct a new GLUtilities object
     * 
     */
    GLUtilities() noexcept;

    /**
     *  @brief 
     *      İnitialize WebGL. 
     * 
     *  @param elem
     *      The id of the canvas element for initialize  canvas2d
     * 
     *  @return client::HTMLCanvasElement* 
     *      If the canvas initialized correctly. 
     */
    static client::HTMLCanvasElement* initialize(DT_CCSTR elem) /* CHEERP_STATIC */ {
        auto elemStr = new client::String(elem);
        canvas = static_cast<client::HTMLCanvasElement*>(client::document.getElementById(elemStr));

        if (!canvas) {
            // throw GLUtilitiesException("Cannot find a canvas Element.!");
            client::console.error("Cannot find a canvas Element.!");
        }

        gl = static_cast<client::WebGLRenderingContext*>(canvas->getContext("webgl"));
        if (!gl) { 
            // throw GLUtilitiesException("Unable to initialize WebGL");
            client::console.error("CannotUnable to initialize WebGL");

        }
        return canvas;
    }

    static client::HTMLCanvasElement* initialize() /* CHEERP_STATIC */ {
        DT_CCSTR elemName { "canvas" };
    
        auto elemStr = new client::String(elemName);
        canvas = static_cast<client::HTMLCanvasElement*>(client::document.createElement(elemName));

        client::HTMLElement* body = client::document.get_body();
        body->appendChild(canvas);

        return GLUtilities::initialize("elem");
    }
private:
    static client::HTMLCanvasElement* canvas;
};

DALYE_NS_END

#endif /* End of include guard : GLUTILITIES_HPP */