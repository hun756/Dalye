#ifndef DALYE_ENGINE_MERGE_POINT_HPP
#define DALYE_ENGINE_MERGE_POINT_HPP

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "./definitions.hpp"
#include "./glutulities.hpp"

#include <string.h>
#include <string>

class CHEERP_EXPORT Engine
{
public:
    /**
     * @brief 
     *      Construct a new Engine object
     * 
     */
    Engine();
    // Engine(int a) : count(a) {}

    /**
     *  @brief
     *      Engine starting funciton 
     */
    DALYE_TYPE_VOID start();

    /**
     *  @brief
     *      Main engine loop 
     */
    DALYE_TYPE_VOID loop();
private:
    DALYE_TYPE_INT32 count;
    static client::HTMLCanvasElement* canvas;
};

Engine::Engine() : count(0) {
}

DALYE_TYPE_VOID Engine::start() {
    // DALYE_TYPE_CSTR elemID = new DALYE_TYPE_CHAR[sizeof("elem")];
    std::string elem_s {"elem"};
    // strcpy(elemID, "elem");
    this->canvas = GLUtilities::initialize(elem_s.c_str());

    // gl->clearColor(0, 0, 0, 1);

    this->loop();
}

DALYE_TYPE_VOID Engine::loop() {
        count++;

        client::document.set_title(std::to_string(count).c_str());

        gl->clearColor(0,0,0,1);
	    gl->clear(gl->get_COLOR_BUFFER_BIT());

        ///< void (TSE::*func)();
        ///< func = &TSE::loop;
        client::requestAnimationFrame(
                cheerp::Callback([this]() -> DALYE_TYPE_VOID {
                    loop();
                }
            )
        );
        
    }

#endif /* End of include guard : DALYE_ENGINE_MERGE_POINT_HPP */