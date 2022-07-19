// Original file: schemas/server.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Ping as _serverPackage_Ping, Ping__Output as _serverPackage_Ping__Output } from '../serverPackage/Ping';
import type { Pong as _serverPackage_Pong, Pong__Output as _serverPackage_Pong__Output } from '../serverPackage/Pong';

export interface ServerClient extends grpc.Client {
  PingPong(argument: _serverPackage_Ping, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _serverPackage_Ping, metadata: grpc.Metadata, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _serverPackage_Ping, options: grpc.CallOptions, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _serverPackage_Ping, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _serverPackage_Ping, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _serverPackage_Ping, metadata: grpc.Metadata, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _serverPackage_Ping, options: grpc.CallOptions, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _serverPackage_Ping, callback: grpc.requestCallback<_serverPackage_Pong__Output>): grpc.ClientUnaryCall;
  
}

export interface ServerHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_serverPackage_Ping__Output, _serverPackage_Pong>;
  
}

export interface ServerDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_serverPackage_Ping, _serverPackage_Pong, _serverPackage_Ping__Output, _serverPackage_Pong__Output>
}
