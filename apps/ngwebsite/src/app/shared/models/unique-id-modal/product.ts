export class Product {

	private _Id : string;
	public name : string;
	public active : boolean;

	constructor(id : string) {
		this._Id = id;
	}

	get id() {
		return this._Id;
	}

}
