///< Application Starting Point
#include "./engine.hpp"

DT_VOID __cheerp_main_onload_callback() {
}

void webMain() {
    Dalye::Engine* e;

    client::document.addEventListener(
            "DOMContentLoaded",
            cheerp::Callback([&]() -> DT_VOID {
                e = new Dalye::Engine();
                client::console.log("Engine Initilized..");
                e->start();
            }
        )
    );

    client::document.addEventListener(
            "resize",
            cheerp::Callback([&]() -> DT_VOID {
                e->resize();
            }
        )
    );
}