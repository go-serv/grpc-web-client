export enum HttpHeaders {
	GsSessionId = "gs-session-id"
}

export type SessionId = string | null;

export interface Meta {
	getSessionId(): SessionId
	setSessionId(id: SessionId): void
	toHeaders(): Headers
}

export class Metadata implements Meta {
	readonly headers: Headers;

	constructor() {
		this.headers = new Headers();
	}

	setSessionId(id: SessionId): void {
		if (id === null) {
			return
		}
		this.headers.set(HttpHeaders.GsSessionId, id)
	}

	getSessionId(): SessionId {
		return this.headers.get(HttpHeaders.GsSessionId)
	}

	toHeaders(): Headers {
		return this.headers
	}
}
