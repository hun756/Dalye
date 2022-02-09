///< Application Starting Point
#include "./engine.hpp"

DALYE_TYPE_VOID __cheerp_main_onload_callback() {
}

void webMain() {
//    Document *d = new Document();
//    auto bodyElement = d->get_body();
//    bodyElement->set_onload(cheerp::Callback([](){
//        auto e = new TSE();
//        client::console.log("Engine Initilized..");
//        e->start();
//    }));

    client::document.addEventListener(
            "DOMContentLoaded",
            cheerp::Callback([]() -> DALYE_TYPE_VOID {
                auto e = new Dalye::Engine();
                client::console.log("Engine Initilized..");
                e->start();
            }
        )
    );
}