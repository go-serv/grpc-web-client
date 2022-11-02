import {Meta} from './meta';

export interface Client {
	unaryCall(m: Meta): void

	clientStreamCall(): void

	serverStreamCall(): void

	bidirectionalCall(): void
}


export class FetchClient implements Client {
	unaryCall(): void {

	}

	clientStreamCall(): void {

	}

	serverStreamCall(): void {

	}

	bidirectionalCall(): void {

	}
}
