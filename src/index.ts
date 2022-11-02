import * as clientImp from './client';
import * as metaImp from './meta';

export namespace grpc {
	export const HttpHeaders = metaImp.HttpHeaders;
	export const Metadata = metaImp.Metadata;
	export const client = clientImp.FetchClient;
}
