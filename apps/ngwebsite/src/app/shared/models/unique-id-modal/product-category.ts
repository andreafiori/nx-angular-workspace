
export class ProductCategory {

	private _name : string;
	private _categoryId : string;

	constructor(name : string, categoryId : string) {
		this._name = name;
		this._categoryId = categoryId;
	}

	get name() {
		return this._name;
	}

	get categoryId() {
		return this._categoryId;
	}

}
