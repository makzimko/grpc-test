import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ServerClient as _serverPackage_ServerClient, ServerDefinition as _serverPackage_ServerDefinition } from './serverPackage/Server';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  serverPackage: {
    Ping: MessageTypeDefinition
    Pong: MessageTypeDefinition
    Server: SubtypeConstructor<typeof grpc.Client, _serverPackage_ServerClient> & { service: _serverPackage_ServerDefinition }
  }
}

