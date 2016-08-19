import {Component, Input} from '@angular/core'
import {OrderBy} from "./orderBy"
import {Format} from "./format"

@Component({
  selector: 'table-sortable',
  templateUrl: 'app_ts/content/e-mail/tableSortable.html',
  pipes: [OrderBy, Format]
})
export class TableSortable {

  @Input() columns: any[];
  @Input() data: any[];
  @Input() sort: any;

  selectedClass(columnName): any{
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
  }

  changeSorting(columnName): void{
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }

  convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }
}
