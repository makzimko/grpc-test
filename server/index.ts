import * as path from 'path';
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/server'
import {ServerHandlers} from "../proto/serverPackage/Server";

const PORT = 'localhost:5000';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../schemas/server.proto'));
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const server = new grpc.Server();
server.addService(grpcObj.serverPackage.Server.service, {
    PingPong: (req, res) => {
        res(null, { message: 'Pong' })
    }
} as ServerHandlers)

server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error('ERR', err);
    }

    console.log('Server is running on ' + port);
    server.start();
});
