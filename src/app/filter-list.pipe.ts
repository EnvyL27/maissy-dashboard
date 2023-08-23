import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

transform(items: any[], searchText: string, filterMetadata: any): any[] {

    if(!items) return [];
    if(!searchText) {
      filterMetadata.count = items.length;
      return items;
    }
    searchText = searchText.toLowerCase();

    let filteredItems = items.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
    filterMetadata.count = filteredItems.length;
    return filteredItems;

    }

}
