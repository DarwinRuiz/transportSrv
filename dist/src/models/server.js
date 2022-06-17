"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../database/connection"));
const departamento_router_1 = __importDefault(require("../routes/departamento.router"));
const planta_router_1 = __importDefault(require("../routes/planta.router"));
const tiposVehiculos_router_1 = __importDefault(require("../routes/tiposVehiculos.router"));
const vehiculo_router_1 = __importDefault(require("../routes/vehiculo.router"));
const bodega_router_1 = __importDefault(require("../routes/bodega.router"));
const categoriasProducto_router_1 = __importDefault(require("../routes/categoriasProducto.router"));
const producto_router_1 = __importDefault(require("../routes/producto.router"));
const cliente_router_1 = __importDefault(require("../routes/cliente.router"));
const servicio_router_1 = __importDefault(require("../routes/servicio.router"));
const solicitudesTransporte_router_1 = __importDefault(require("../routes/solicitudesTransporte.router"));
class Server {
    constructor() {
        this.databaseConnection = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("online database");
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.middlewares = () => {
            this.app.use((0, cors_1.default)());
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.static("public"));
        };
        this.routes = () => {
            this.app.use("/api/departamentos", departamento_router_1.default);
            this.app.use("/api/plantas", planta_router_1.default);
            this.app.use("/api/tipos-vehiculos", tiposVehiculos_router_1.default);
            this.app.use("/api/vehiculos", vehiculo_router_1.default);
            this.app.use("/api/bodegas", bodega_router_1.default);
            this.app.use("/api/categorias_productos", categoriasProducto_router_1.default);
            this.app.use("/api/productos", producto_router_1.default);
            this.app.use("/api/clientes", cliente_router_1.default);
            this.app.use("/api/servicios", servicio_router_1.default);
            this.app.use("/api/solicitudes-transporte", solicitudesTransporte_router_1.default);
        };
        this.listen = () => {
            this.app.listen(this.PORT);
            console.log(this.PORT);
        };
        this.app = (0, express_1.default)();
        this.PORT = process.env.PORT || "8000";
        this.middlewares();
        this.databaseConnection();
        this.routes();
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map