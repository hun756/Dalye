#ifndef DALYE_ENGINE_MERGE_POINT_HPP
#define DALYE_ENGINE_MERGE_POINT_HPP

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "./definitions.hpp"
#include "./glutulities.hpp"
#include "./shader.hpp"

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

    DT_VOID loadShaders();
    DT_VOID createBuffer();
private:
    client::HTMLCanvasElement*  canvas;
    client::WebGLBuffer*        buffer;
    Dalye::Shader*              shader;
};

Engine::Engine() {
    // default constructor for generic browser
}

DT_VOID Engine::start() {
    DT_CCSTR elem_s {"elem"};
    this->canvas = GLUtilities::initialize();

    gl->clearColor(0,0,0,1);

    loadShaders();
    shader->use();

    createBuffer();
    this->resize();
    this->loop();
}

DT_VOID Engine::loop() {
    
    gl->clear(gl->get_COLOR_BUFFER_BIT());

    gl->vertexAttribPointer(0, 3, gl->get_FLOAT(), false, 0 ,0);
    gl->enableVertexAttribArray(0);

    gl->bindBuffer(gl->get_ARRAY_BUFFER(), this->buffer);
    gl->drawArrays(gl->get_TRIANGLES(), 0, 3);

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
    if (canvas) {
        this->canvas->set_width(client::innerWidth);
        this->canvas->set_height(client::innerHeight);
    }

    gl->viewport(0, 0, client::innerWidth, client::innerHeight);
}

DT_VOID Engine::loadShaders() {
    auto vertexShaderSource = DT_STR(R"(
attribute vec3 a_position;
void main(){
    gl_Position = vec4(a_position, 1.0);
}
)");
    auto fragmentShaderSource = DT_STR(R"(
precision mediump float;
void main(){
    gl_FragColor = vec4(1.0);
}
)");
    this->shader = new Dalye::Shader("basic", vertexShaderSource.c_str(), fragmentShaderSource.c_str());
}

DT_VOID Engine::createBuffer() {
    this->buffer = gl->createBuffer();

    float vertices[] {
        0.0, 0.0, 0.0,
        0.0, 0.5, 0.0,
        0.5, 0.5, 0.0
    };

    gl->bindBuffer(gl->get_ARRAY_BUFFER(), this->buffer);
    gl->vertexAttribPointer(0, 3, gl->get_FLOAT(), false, 0 ,0);
    gl->enableVertexAttribArray(0);

    gl->bufferData(gl->get_ARRAY_BUFFER(), cheerp::MakeTypedArray(vertices), gl->get_STATIC_DRAW());

    gl->bindBuffer(gl->get_ARRAY_BUFFER(), nullptr);
    gl->disableVertexAttribArray(0);
}

DALYE_NS_END

#endif /* End of include guard : DALYE_ENGINE_MERGE_ */