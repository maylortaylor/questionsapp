import { Pipe, PipeTransform } from "@angular/core";

import * as _ from "lodash";

@Pipe({
	name: "categoryFilter",
	pure: true
})
export class CategoryFilterPipe implements PipeTransform {
	// Example: | tagFilter:'tags': tagFilteringArray)
	// items == ngFor array list
	// property == property of object to deep-search into
	// array == array of filtered items on component
	transform(items: any, property: any, subProperty: any, array: any[]): any {
		var filtered = [];
		if (!!items.length) {
			for (var i = 0; i < items.length; i++) {
				var item = items[i];

				if (!array || array.length === 0) {
					filtered.push(item);
				}

				for (var s in item[property]) {
					if (array.indexOf(item[property][s][subProperty]) !== -1) {
						if (filtered.indexOf(item) === -1) {
							filtered.push(item);
						}
					}
				}
			}
		}
		return filtered;
	}
}
