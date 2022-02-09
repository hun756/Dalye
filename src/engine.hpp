#ifndef DALYE_ENGINE_MERGE_POINT_HPP
#define DALYE_ENGINE_MERGE_POINT_HPP

#include "definitions.hpp"

#include <cheerp/client.h>
#include <cheerp/clientlib.h>


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
};

Engine::Engine() : count(0) {
}

DALYE_TYPE_VOID Engine::start() {
    this->loop();
}

DALYE_TYPE_VOID Engine::loop() {
         count++;

        client::document.set_title(std::to_string(count).c_str());

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