var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getConnectionManager } from 'typeorm';
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionManager = yield getConnectionManager();
    const connection = connectionManager.create({
        name: 'default',
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: ['src/entities/*.ts'],
    });
    yield connection.connect();
    return connection;
});
export default connectDatabase;
