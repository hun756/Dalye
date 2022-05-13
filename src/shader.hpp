#ifndef SHADER_HPP
#define SHADER_HPP

#include "definitions.hpp"
#include "glutulities.hpp"

DALYE_NS_BEGIN

/**
 * @brief 
 *  Creates a new shader.
 */
auto ll_sh = [] (const client::String& source, int shaderType) -> client::WebGLShader* {
    auto shader = gl->createShader((double)shaderType);

    gl->shaderSource(shader, source);
    gl->compileShader(shader);
    
    auto err = gl->getShaderInfoLog(shader);

    if (err->get_length() > 0) {
        client::console.error("Given shader error :", err);
        __asm__("throw new Error('Error compiling shader');");
    }

    return shader;
};

/**
 * @brief 
 *  Creates a new program.
 */
auto ll_cp = [](client::WebGLShader* vertexShader, 
    client::WebGLShader* fragmentShader
) -> client::WebGLProgram* {
    auto program = gl->createProgram();

    gl->attachShader(program, vertexShader);
    gl->attachShader(program, fragmentShader);

    gl->linkProgram(program);
    
    auto err = gl->getProgramInfoLog(program);

    if (err->get_length() > 0) {
        client::console.error("Shader linking error :", err);
        __asm__("throw new Error('Error linking shader');");
    }
    
    return program;
};

class CHEERP_EXPORT Shader {
public:
    /**
     * @brief 
     *  Construct a new Shader object
     * 
     * @param name 
     *  Name of the sahder
     * 
     * @param vertexSource
     *  The source of vertex shader.
     *  
    * @param fragmentSource 
    *   The source of fragment shader.
     */
    Shader(const client::String& name, const client::String& vertexSource, const client::String& fragmentSource) {
        this->name = new client::String(name);
        auto vertexShader = ll_sh(vertexSource, (int)gl->get_VERTEX_SHADER());
        auto fragmentShader = ll_sh(fragmentSource, (int)gl->get_FRAGMENT_SHADER());

        this->program = ll_cp(vertexShader, fragmentShader);
    }

    void use() {
        gl->useProgram(this->program);
    }

    client::String* getName() const {
        return this->name;
    }

private:
    client::String* name;
    client::WebGLProgram* program;
};

DALYE_NS_END

#endif /* End of include guard : SHADER_HPP */