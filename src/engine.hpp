#ifndef DALYE_ENGINE_MERGE_POINT_HPP
#define DALYE_ENGINE_MERGE_POINT_HPP

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "./definitions.hpp"
#include "./glutulities.hpp"

#include <string.h>
#include <string>

DALYE_NS_BEGIN
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
    DT_VOID start();

    /**
     * @brief 
     * 
     * @return DT_VOID 
     */
    DT_VOID resize();

    /**
     *  @brief
     *      Main engine loop 
     */
    DT_VOID loop();
private:
    DT_INT32 count;
    client::HTMLCanvasElement* canvas;
};

Engine::Engine() : count(0) {
    //
}

DT_VOID Engine::start() {
    DT_CCSTR elem_s {"elem"};
    this->canvas = GLUtilities::initialize();

    // gl->clearColor(0, 0, 0, 1);

    this->loop();
}

DT_VOID Engine::loop() {
    count++;

    client::document.set_title(std::to_string(count).c_str());

    gl->clearColor(0,0,0,1);
    gl->clear(gl->get_COLOR_BUFFER_BIT());

    ///< void (TSE::*func)();
    ///< func = &TSE::loop;
    client::requestAnimationFrame(
            cheerp::Callback([this]() -> DT_VOID {
                loop();
            }
        )
    );
}

DT_VOID Engine::resize() {
    this->canvas->set_width(client::innerWidth);
    this->canvas->set_height(client::innerHeight);
}

DALYE_NS_END

#endif /* End of include guard : DALYE_ENGINE_MERGE_POINT_HPP */