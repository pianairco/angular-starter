import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AjaxCallService} from "../../../services/ajax-call.service";
import * as moment from 'jalali-moment';
import {SearchBoxConfigModel, SearchBoxFieldModel} from "../../../components/search-box/search-box.component";
import {BehaviorSubject} from "rxjs";
import {FormElementType, SelectableItem} from "../../../components/form-element/form-element.component";
import {ColumnDef, DataGridComponent} from "../../../components/data-grid/data-grid.component";
import {GeneralStateService} from "../../../services/general-state.service";

@Component({
  selector: 'app-subsidiary-balance',
  templateUrl: './subsidiary-balance.component.html',
  styleUrls: ['./subsidiary-balance.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('filterExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', padding: '0px'})),
      state('expanded', style({height: '*', padding: '12px'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: '*', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: '*', opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ],
})
export class SubsidiaryBalanceComponent implements OnInit, AfterViewInit {
  expandedElement: null;

  @ViewChild('dataGrid') dataGrid: DataGridComponent;

  layout: any[] = [
    {
      layoutSize: '12',
      type: 'layout',
      class: 'align-items-center',
      children: [
        { layoutSize: '6', type: 'MULTI_SELECT', field: 'x_branches', title: 'شعبه', required: true, listApi: 'api/modules/report/layout/branches', height: '200' },
        {
          type: 'layout',
          layoutSize: '6',
          layout: [
            {
              layoutSize: '12',
              children: [
                { layoutSize: '6', type: 'JALALI_DATE', field: 'x_from_date', title: 'تاریخ از', required: true },
                { layoutSize: '6', type: 'JALALI_DATE', field: 'x_to_date', title: 'تاریخ تا', required: true },
                { layoutSize: '6', type: 'TEXT', numeric: true, field: 'x_from_voucher_no', title: 'شماره سند از', required: false },
                { layoutSize: '6', type: 'TEXT', numeric: true, field: 'x_to_voucher_no', title: 'شماره سند تا', required: false }
              ]
            }
          ]
        },
        { layoutSize: '3', type: 'TEXT', numeric: true, field: 'x_from_gl_number', title: 'کل از', required: false, minLength:1, maxLength: 4 },
        { layoutSize: '3', type: 'TEXT', numeric: true, field: 'x_to_gl_number', title: 'کل تا', required: false, minLength:1, maxLength: 4 },
        { layoutSize: '3', type: 'TEXT', numeric: true, field: 'x_from_voucher_temp_num', title: 'شماره موقت از', required: false, minLength:1, maxLength: 10 },
        { layoutSize: '3', type: 'TEXT', numeric: true, field: 'x_to_voucher_temp_num', title: 'شماره موقت تا', required: false, minLength:1, maxLength: 10 },
        { layoutSize: '3', type: 'TEXT', numeric: true, field: 'x_from_remainder', title: 'مانده از', required: false, minLength: 1, maxLength: 18 },
        { layoutSize: '3', type: 'TEXT', numeric: true, field: 'x_to_remainder', title: 'مانده تا', required: false, minLength: 1, maxLength: 18 },
        { layoutSize: '6', type: 'SELECT', field: 'x_remainder', title: 'مانده', required: true, listApi: 'api/modules/report/layout/remainders', hasAll: true, hasNone: true },
        { layoutSize: '12', type: 'CHECKBOX', field: 'x_options', title: 'انتخاب ویژگی', required: true, listApi: 'api/modules/report/layout/voucher-options', height: '200' },
        { layoutSize: '12', type: 'CHECKBOX', field: 'x_fiscal_years', title: 'سال مالی', listApi: 'api/modules/report/layout/fiscal-years-options', height: '200', class: 'mb-4' },
        // { layoutSize: '3', left: '9', type: 'TEXT', numeric: true, field: 'x_page_size', title: 'تعداد رکورد در صفحه', required: true, minLength: 1, maxLength: 2, value: 30 },
      ]
    },
      {
        layoutSize: '12',
        type: 'layout',
        class: 'justify-content-between align-items-center',
        children: [
          { layoutSize: '2', left:' 10', type: 'btn', title: 'جستجو' },
        ]
      }
    ];

  columnDefs: ColumnDef[] = [
    new ColumnDef('REF_NUMBER', 'کل', false),
    new ColumnDef('ACCOUNT_NAME', 'عنوان حساب', false),
    new ColumnDef('PERIOD_DEBIT', 'گردش بدهکار', false),
    new ColumnDef('PERIOD_CREDIT', 'گردش بستانکار', true),
    new ColumnDef('TOTAL_DEBIT', 'مانده بدهکار', false),
    new ColumnDef('TOTAL_CREDIT', 'مانده بستانکار', false)
  ];

  openFilter: boolean = false;

  model = {
    "x_page_size": 30
  };

  constructor(private cdr: ChangeDetectorRef,
              private ajaxCallService: AjaxCallService,
              private generalStateService: GeneralStateService) {
    this.generalStateService.title = "تراز آزمایشی معین";
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  btnClick(e) {
    console.log(e.button, e.model, this.model);
    this.dataGrid.fetch(this.model);
    this.openFilter = false;
  }

  search() {
  }
}
