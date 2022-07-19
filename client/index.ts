import * as path from 'path';
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/server'
import {ServerHandlers} from "../proto/serverPackage/Server";

const PORT = 'localhost:5000';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../schemas/server.proto'));
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const client = new grpcObj.serverPackage.Server(PORT, grpc.credentials.createInsecure());

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err);
    }

    client.PingPong({ message: 'hello' }, (err, result) => {
        console.log('RESULT', result)
    })
})