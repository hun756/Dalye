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

class CHEERP_EXPORT GLUtilities
{
public:
    /**
     * @brief Construct a new GLUtilities object
     * 
     */
    GLUtilities();

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
    static client::HTMLCanvasElement* initialize(DALYE_TYPE_CCSTR elem) CHEERP_STATIC;

    static client::HTMLCanvasElement* initialize() CHEERP_STATIC;
private:
    static client::HTMLCanvasElement* canvas;
};

GLUtilities::GLUtilities() {
}

client::HTMLCanvasElement* GLUtilities::initialize(DALYE_TYPE_CCSTR elem) {
    auto elemStr = new client::String(elem);
    canvas = static_cast<client::HTMLCanvasElement*>(client::document.getElementById(elemStr));

    if (!canvas) {
        throw GLUtilitiesException("Cannot find a canvas Element.!");
    }

    gl = static_cast<client::WebGLRenderingContext*>(canvas->getContext("webgl"));;
    if (!gl) { 
        throw GLUtilitiesException("Unable to initialize WebGL");
    }
    return canvas;
}

client::HTMLCanvasElement* GLUtilities::initialize() {
    DALYE_TYPE_CCSTR elemName { "canvas" };
    
    auto elemStr = new client::String(elemName);
    canvas = static_cast<client::HTMLCanvasElement*>(client::document.createElement(elemName));

    client::HTMLElement* body = client::document.get_body();
    body->appendChild(canvas);

    return GLUtilities::initialize("elem");
}

#endif /* End of include guard : GLUTILITIES_HPP */