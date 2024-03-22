import { css } from 'lit';

export const tabulatorStyles = css`
.tabulator{background-color:#fff;border:1px solid #fff;font-size:16px;overflow:hidden;position:relative;text-align:left;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.tabulator[tabulator-layout=fitDataFill] .tabulator-tableholder .tabulator-table{min-width:100%}.tabulator[tabulator-layout=fitDataTable]{display:inline-block}.tabulator.tabulator-block-select,.tabulator.tabulator-ranges .tabulator-cell:not(.tabulator-editing){user-select:none}.tabulator .tabulator-header{background-color:#fff;border-bottom:1px solid #3759d7;box-sizing:border-box;color:#3759d7;font-weight:700;outline:none;overflow:hidden;position:relative;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;white-space:nowrap;width:100%}.tabulator .tabulator-header.tabulator-header-hidden{display:none}.tabulator .tabulator-header .tabulator-header-contents{overflow:hidden;position:relative}.tabulator .tabulator-header .tabulator-header-contents .tabulator-headers{display:inline-block}.tabulator .tabulator-header .tabulator-col{background:#fff;border-right:1px solid #fff;box-sizing:border-box;display:inline-flex;flex-direction:column;justify-content:flex-start;overflow:hidden;position:relative;text-align:left;vertical-align:bottom}.tabulator .tabulator-header .tabulator-col.tabulator-moving{background:#e6e6e6;border:1px solid #3759d7;pointer-events:none;position:absolute}.tabulator .tabulator-header .tabulator-col.tabulator-range-highlight{background-color:#3759d7;color:#fff}.tabulator .tabulator-header .tabulator-col.tabulator-range-selected{background-color:#2544b7;color:#fff}.tabulator .tabulator-header .tabulator-col .tabulator-col-content{box-sizing:border-box;padding:4px;position:relative}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button{padding:0 8px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-header-popup-button:hover{cursor:pointer;opacity:.6}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title-holder{position:relative}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title{box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom;white-space:nowrap;width:100%}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title.tabulator-col-title-wrap{text-overflow:clip;white-space:normal}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor{background:#fff;border:1px solid #999;box-sizing:border-box;padding:1px;width:100%}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-header-popup-button+.tabulator-title-editor{width:calc(100% - 22px)}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter{align-items:center;bottom:0;display:flex;position:absolute;right:4px;top:0}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-bottom:6px solid #b7c3f1;border-left:6px solid transparent;border-right:6px solid transparent;height:0;width:0}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{border-top:1px solid #fff;display:flex;margin-right:-1px;overflow:hidden;position:relative}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter{box-sizing:border-box;margin-top:2px;position:relative;text-align:center;width:100%}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter textarea{height:auto!important}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter svg{margin-top:3px}.tabulator .tabulator-header .tabulator-col .tabulator-header-filter input::-ms-clear{height:0;width:0}.tabulator .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-right:25px}@media (hover:hover) and (pointer:fine){.tabulator .tabulator-header .tabulator-col.tabulator-sortable.tabulator-col-sorter-element:hover{background-color:#e6e6e6;cursor:pointer}}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter{color:#b7c3f1}@media (hover:hover) and (pointer:fine){.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{border-bottom:6px solid #555;cursor:pointer}}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=none] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-bottom:6px solid #b7c3f1;border-top:none}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter{color:#3759d7}@media (hover:hover) and (pointer:fine){.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{border-bottom:6px solid #555;cursor:pointer}}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=ascending] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-bottom:6px solid #3759d7;border-top:none}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter{color:#3759d7}@media (hover:hover) and (pointer:fine){.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter.tabulator-col-sorter-element .tabulator-arrow:hover{border-top:6px solid #555;cursor:pointer}}.tabulator .tabulator-header .tabulator-col.tabulator-sortable[aria-sort=descending] .tabulator-col-content .tabulator-col-sorter .tabulator-arrow{border-bottom:none;border-top:6px solid #3759d7;color:#3759d7}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical .tabulator-col-content .tabulator-col-title{align-items:center;display:flex;justify-content:center;text-orientation:mixed;writing-mode:vertical-rl}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-col-vertical-flip .tabulator-col-title{transform:rotate(180deg)}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-title{padding-right:0;padding-top:20px}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable.tabulator-col-vertical-flip .tabulator-col-title{padding-bottom:20px;padding-right:0}.tabulator .tabulator-header .tabulator-col.tabulator-col-vertical.tabulator-sortable .tabulator-col-sorter{bottom:auto;justify-content:center;left:0;right:0;top:4px}.tabulator .tabulator-header .tabulator-frozen{left:0;position:sticky;z-index:11}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left{border-right:2px solid #fff}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-right{border-left:2px solid #fff}.tabulator .tabulator-header .tabulator-calcs-holder{background:#fff!important;border-bottom:1px solid #fff;border-top:1px solid #fff;box-sizing:border-box;display:inline-block}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row{background:#fff!important}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-header .tabulator-frozen-rows-holder{display:inline-block}.tabulator .tabulator-header .tabulator-frozen-rows-holder:empty{display:none}.tabulator .tabulator-tableholder{-webkit-overflow-scrolling:touch;overflow:auto;position:relative;white-space:nowrap;width:100%}.tabulator .tabulator-tableholder:focus{outline:none}.tabulator .tabulator-tableholder .tabulator-placeholder{align-items:center;box-sizing:border-box;display:flex;justify-content:center;min-width:100%;width:100%}.tabulator .tabulator-tableholder .tabulator-placeholder[tabulator-render-mode=virtual]{min-height:100%}.tabulator .tabulator-tableholder .tabulator-placeholder .tabulator-placeholder-contents{color:#ccc;display:inline-block;font-size:20px;font-weight:700;padding:10px;text-align:center;white-space:normal}.tabulator .tabulator-tableholder .tabulator-table{background-color:#f3f3f3;color:#333;display:inline-block;overflow:visible;position:relative;white-space:nowrap}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs{background:#f2f2f2!important;font-weight:700}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top{border-bottom:2px solid #fff}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom{border-top:2px solid #fff}.tabulator .tabulator-tableholder .tabulator-range-overlay{inset:0;pointer-events:none;position:absolute;z-index:10}.tabulator .tabulator-tableholder .tabulator-range-overlay .tabulator-range{border:1px solid #2544b7;box-sizing:border-box;position:absolute}.tabulator .tabulator-tableholder .tabulator-range-overlay .tabulator-range.tabulator-range-active:after{background-color:#2544b7;border-radius:999px;bottom:-3px;content:"";height:6px;position:absolute;right:-3px;width:6px}.tabulator .tabulator-tableholder .tabulator-range-overlay .tabulator-range-cell-active{border:2px solid #2544b7;box-sizing:border-box;position:absolute}.tabulator .tabulator-footer{background-color:#fff;border-top:1px solid #999;color:#3759d7;font-weight:700;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;white-space:nowrap}.tabulator .tabulator-footer .tabulator-footer-contents{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:5px 10px}.tabulator .tabulator-footer .tabulator-footer-contents:empty{display:none}.tabulator .tabulator-footer .tabulator-spreadsheet-tabs{margin-top:-5px;overflow-x:auto}.tabulator .tabulator-footer .tabulator-spreadsheet-tabs .tabulator-spreadsheet-tab{border:1px solid #fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top:none;display:inline-block;font-size:.9em;padding:5px}.tabulator .tabulator-footer .tabulator-spreadsheet-tabs .tabulator-spreadsheet-tab:hover{cursor:pointer;opacity:.7}.tabulator .tabulator-footer .tabulator-spreadsheet-tabs .tabulator-spreadsheet-tab.tabulator-spreadsheet-tab-active{background:#fff}.tabulator .tabulator-footer .tabulator-calcs-holder{background:#fff!important;border-bottom:1px solid #fff;border-top:1px solid #fff;box-sizing:border-box;overflow:hidden;text-align:left;width:100%}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row{display:inline-block}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-col-resize-handle{display:none}.tabulator .tabulator-footer .tabulator-calcs-holder:only-child{border-bottom:none;margin-bottom:-5px}.tabulator .tabulator-footer>*+.tabulator-page-counter{margin-left:10px}.tabulator .tabulator-footer .tabulator-page-counter{font-weight:400}.tabulator .tabulator-footer .tabulator-paginator{color:#3759d7;flex:1;font-family:inherit;font-size:inherit;font-weight:inherit;text-align:right}.tabulator .tabulator-footer .tabulator-page-size{border:1px solid #aaa;border-radius:3px;display:inline-block;margin:0 5px;padding:2px 5px}.tabulator .tabulator-footer .tabulator-pages{margin:0 7px}.tabulator .tabulator-footer .tabulator-page{background:hsla(0,0%,100%,.2);border:1px solid #aaa;border-radius:3px;display:inline-block;margin:0 2px;padding:2px 5px}.tabulator .tabulator-footer .tabulator-page.active{color:#3759d7}.tabulator .tabulator-footer .tabulator-page:disabled{opacity:.5}@media (hover:hover) and (pointer:fine){.tabulator .tabulator-footer .tabulator-page:not(disabled):hover{background:rgba(0,0,0,.2);color:#fff;cursor:pointer}}.tabulator .tabulator-col-resize-handle{display:inline-block;margin-left:-3px;margin-right:-3px;position:relative;vertical-align:middle;width:6px;z-index:11}@media (hover:hover) and (pointer:fine){.tabulator .tabulator-col-resize-handle:hover{cursor:ew-resize}}.tabulator .tabulator-col-resize-handle:last-of-type{margin-right:0;width:3px}.tabulator .tabulator-col-resize-guide{background-color:#999;height:100%;margin-left:-.5px;opacity:.5;position:absolute;top:0;width:4px}.tabulator .tabulator-row-resize-guide{background-color:#999;height:4px;left:0;margin-top:-.5px;opacity:.5;position:absolute;width:100%}.tabulator .tabulator-alert{align-items:center;background:rgba(0,0,0,.4);display:flex;height:100%;left:0;position:absolute;text-align:center;top:0;width:100%;z-index:100}.tabulator .tabulator-alert .tabulator-alert-msg{background:#fff;border-radius:10px;display:inline-block;font-size:16px;font-weight:700;margin:0 auto;padding:10px 20px}.tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-msg{border:4px solid #333;color:#000}.tabulator .tabulator-alert .tabulator-alert-msg.tabulator-alert-state-error{border:4px solid #d00;color:#590000}.tabulator-row{background-color:#f3f3f3;box-sizing:border-box;min-height:24px;position:relative}.tabulator-row.tabulator-row-even{background-color:#fff}@media (hover:hover) and (pointer:fine){.tabulator-row.tabulator-selectable:hover{background-color:#bbb;cursor:pointer}}.tabulator-row.tabulator-selected{background-color:#9abcea}@media (hover:hover) and (pointer:fine){.tabulator-row.tabulator-selected:hover{background-color:#769bcc;cursor:pointer}}.tabulator-row.tabulator-row-moving{background:#fff;border:1px solid #000}.tabulator-row.tabulator-moving{border-bottom:1px solid #fff;border-top:1px solid #fff;pointer-events:none;position:absolute;z-index:15}.tabulator-row.tabulator-range-highlight .tabulator-cell.tabulator-range-row-header{background-color:#3759d7;color:#fff}.tabulator-row.tabulator-range-highlight.tabulator-range-selected .tabulator-cell.tabulator-range-row-header,.tabulator-row.tabulator-range-selected .tabulator-cell.tabulator-range-row-header{background-color:#2544b7;color:#fff}.tabulator-row .tabulator-row-resize-handle{bottom:0;height:5px;left:0;position:absolute;right:0}.tabulator-row .tabulator-row-resize-handle.prev{bottom:auto;top:0}@media (hover:hover) and (pointer:fine){.tabulator-row .tabulator-row-resize-handle:hover{cursor:ns-resize}}.tabulator-row .tabulator-responsive-collapse{border-bottom:1px solid #fff;border-top:1px solid #fff;box-sizing:border-box;padding:5px}.tabulator-row .tabulator-responsive-collapse:empty{display:none}.tabulator-row .tabulator-responsive-collapse table{font-size:16px}.tabulator-row .tabulator-responsive-collapse table tr td{position:relative}.tabulator-row .tabulator-responsive-collapse table tr td:first-of-type{padding-right:10px}.tabulator-row .tabulator-cell{border-right:1px solid #fff;box-sizing:border-box;display:inline-block;outline:none;overflow:hidden;padding:4px;position:relative;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.tabulator-row .tabulator-cell.tabulator-row-header{background:#fff;border-bottom:1px solid #fff;border-right:1px solid #fff}.tabulator-row .tabulator-cell.tabulator-frozen{background-color:inherit;display:inline-block;left:0;position:sticky;z-index:11}.tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left{border-right:2px solid #fff}.tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right{border-left:2px solid #fff}.tabulator-row .tabulator-cell.tabulator-editing{border:1px solid #1d68cd;outline:none;padding:0}.tabulator-row .tabulator-cell.tabulator-editing input,.tabulator-row .tabulator-cell.tabulator-editing select{background:transparent;border:1px;outline:none}.tabulator-row .tabulator-cell.tabulator-validation-fail{border:1px solid #d00}.tabulator-row .tabulator-cell.tabulator-validation-fail input,.tabulator-row .tabulator-cell.tabulator-validation-fail select{background:transparent;border:1px;color:#d00}.tabulator-row .tabulator-cell.tabulator-row-handle{align-items:center;display:inline-flex;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box{width:80%}.tabulator-row .tabulator-cell.tabulator-row-handle .tabulator-row-handle-box .tabulator-row-handle-bar{background:#666;height:3px;margin-top:2px;width:100%}.tabulator-row .tabulator-cell.tabulator-range-selected:not(.tabulator-range-only-cell-selected):not(.tabulator-range-row-header){background-color:#9abcea}.tabulator-row .tabulator-cell .tabulator-data-tree-branch-empty{display:inline-block;width:7px}.tabulator-row .tabulator-cell .tabulator-data-tree-branch{border-bottom:2px solid #fff;border-bottom-left-radius:1px;border-left:2px solid #fff;display:inline-block;height:9px;margin-right:5px;margin-top:-9px;vertical-align:middle;width:7px}.tabulator-row .tabulator-cell .tabulator-data-tree-control{align-items:center;background:rgba(0,0,0,.1);border:1px solid #333;border-radius:2px;display:inline-flex;height:11px;justify-content:center;margin-right:5px;overflow:hidden;vertical-align:middle;width:11px}@media (hover:hover) and (pointer:fine){.tabulator-row .tabulator-cell .tabulator-data-tree-control:hover{background:rgba(0,0,0,.2);cursor:pointer}}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse{background:transparent;display:inline-block;height:7px;position:relative;width:1px}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after{background:#333;content:"";height:1px;left:-3px;position:absolute;top:3px;width:7px}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand{background:#333;display:inline-block;height:7px;position:relative;width:1px}.tabulator-row .tabulator-cell .tabulator-data-tree-control .tabulator-data-tree-control-expand:after{background:#333;content:"";height:1px;left:-3px;position:absolute;top:3px;width:7px}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle{align-items:center;background:#666;border-radius:20px;color:#f3f3f3;display:inline-flex;font-size:1.1em;font-weight:700;height:15px;justify-content:center;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;width:15px}@media (hover:hover) and (pointer:fine){.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle:hover{cursor:pointer;opacity:.7}}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-close{display:initial}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle.open .tabulator-responsive-collapse-toggle-open{display:none}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle svg{stroke:#f3f3f3}.tabulator-row .tabulator-cell .tabulator-responsive-collapse-toggle .tabulator-responsive-collapse-toggle-close{display:none}.tabulator-row .tabulator-cell .tabulator-traffic-light{border-radius:14px;display:inline-block;height:14px;width:14px}.tabulator-row.tabulator-group{background:#ccc;border-bottom:1px solid #999;border-right:1px solid #fff;border-top:1px solid #999;box-sizing:border-box;font-weight:700;padding:5px 5px 5px 10px}@media (hover:hover) and (pointer:fine){.tabulator-row.tabulator-group:hover{background-color:rgba(0,0,0,.1);cursor:pointer}}.tabulator-row.tabulator-group.tabulator-group-visible .tabulator-arrow{border-bottom:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #3759d7;margin-right:10px}.tabulator-row.tabulator-group.tabulator-group-level-1{padding-left:30px}.tabulator-row.tabulator-group.tabulator-group-level-2{padding-left:50px}.tabulator-row.tabulator-group.tabulator-group-level-3{padding-left:70px}.tabulator-row.tabulator-group.tabulator-group-level-4{padding-left:90px}.tabulator-row.tabulator-group.tabulator-group-level-5{padding-left:110px}.tabulator-row.tabulator-group .tabulator-group-toggle{display:inline-block}.tabulator-row.tabulator-group .tabulator-arrow{border-bottom:6px solid transparent;border-left:6px solid #3759d7;border-right:0;border-top:6px solid transparent;display:inline-block;height:0;margin-right:16px;vertical-align:middle;width:0}.tabulator-row.tabulator-group span{color:#d00;margin-left:10px}.tabulator-popup-container{-webkit-overflow-scrolling:touch;background:#f3f3f3;border:1px solid #fff;box-shadow:0 0 5px 0 rgba(0,0,0,.2);box-sizing:border-box;display:inline-block;font-size:16px;overflow-y:auto;position:absolute;z-index:10000}.tabulator-popup{border-radius:3px;padding:5px}.tabulator-tooltip{border-radius:2px;box-shadow:none;font-size:12px;max-width:Min(500px,100%);padding:3px 5px;pointer-events:none}.tabulator-menu .tabulator-menu-item{box-sizing:border-box;padding:5px 10px;position:relative;user-select:none}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-disabled{opacity:.5}@media (hover:hover) and (pointer:fine){.tabulator-menu .tabulator-menu-item:not(.tabulator-menu-item-disabled):hover{background:#fff;cursor:pointer}}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu{padding-right:25px}.tabulator-menu .tabulator-menu-item.tabulator-menu-item-submenu:after{border-color:#fff;border-style:solid;border-width:1px 1px 0 0;content:"";display:inline-block;height:7px;position:absolute;right:10px;top:calc(5px + .4em);transform:rotate(45deg);vertical-align:top;width:7px}.tabulator-menu .tabulator-menu-separator{border-top:1px solid #fff}.tabulator-edit-list{-webkit-overflow-scrolling:touch;font-size:16px;max-height:200px;overflow-y:auto}.tabulator-edit-list .tabulator-edit-list-item{color:#333;outline:none;padding:4px}.tabulator-edit-list .tabulator-edit-list-item.active{background:#1d68cd;color:#f3f3f3}.tabulator-edit-list .tabulator-edit-list-item.active.focused{outline:1px solid hsla(0,0%,95%,.5)}.tabulator-edit-list .tabulator-edit-list-item.focused{outline:1px solid #1d68cd}@media (hover:hover) and (pointer:fine){.tabulator-edit-list .tabulator-edit-list-item:hover{background:#1d68cd;color:#f3f3f3;cursor:pointer}}.tabulator-edit-list .tabulator-edit-list-placeholder{color:#333;padding:4px;text-align:center}.tabulator-edit-list .tabulator-edit-list-group{border-bottom:1px solid #fff;color:#333;font-weight:700;padding:6px 4px 4px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-2,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-2{padding-left:12px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-3,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-3{padding-left:20px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-4,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-4{padding-left:28px}.tabulator-edit-list .tabulator-edit-list-group.tabulator-edit-list-group-level-5,.tabulator-edit-list .tabulator-edit-list-item.tabulator-edit-list-group-level-5{padding-left:36px}.tabulator.tabulator-ltr{direction:ltr}.tabulator.tabulator-rtl{direction:rtl;text-align:initial}.tabulator.tabulator-rtl .tabulator-header .tabulator-col{border-left:1px solid #fff;border-right:initial;text-align:initial}.tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{margin-left:-1px;margin-right:0}.tabulator.tabulator-rtl .tabulator-header .tabulator-col.tabulator-sortable .tabulator-col-title{padding-left:25px;padding-right:0}.tabulator.tabulator-rtl .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-sorter{left:8px;right:auto}.tabulator.tabulator-rtl .tabulator-tableholder .tabulator-range-overlay .tabulator-range.tabulator-range-active:after{background-color:#2544b7;border-radius:999px;bottom:-3px;content:"";height:6px;left:-3px;position:absolute;right:auto;width:6px}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell{border-left:1px solid #fff;border-right:initial}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-branch{border-bottom-left-radius:0;border-bottom-right-radius:1px;border-left:initial;border-right:2px solid #fff;margin-left:5px;margin-right:0}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell .tabulator-data-tree-control{margin-left:5px;margin-right:0}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-left{border-left:2px solid #fff}.tabulator.tabulator-rtl .tabulator-row .tabulator-cell.tabulator-frozen.tabulator-frozen-right{border-right:2px solid #fff}.tabulator.tabulator-rtl .tabulator-row .tabulator-col-resize-handle:last-of-type{margin-left:0;margin-right:-3px;width:3px}.tabulator.tabulator-rtl .tabulator-footer .tabulator-calcs-holder{text-align:initial}.tabulator-print-fullscreen{bottom:0;left:0;position:absolute;right:0;top:0;z-index:10000}body.tabulator-print-fullscreen-hide>:not(.tabulator-print-fullscreen){display:none!important}.tabulator-print-table{border-collapse:collapse}.tabulator-print-table .tabulator-data-tree-branch{border-bottom:2px solid #fff;border-bottom-left-radius:1px;border-left:2px solid #fff;display:inline-block;height:9px;margin-right:5px;margin-top:-9px;vertical-align:middle;width:7px}.tabulator-print-table .tabulator-print-table-group{background:#ccc;border-bottom:1px solid #999;border-right:1px solid #fff;border-top:1px solid #999;box-sizing:border-box;font-weight:700;min-width:100%;padding:5px 5px 5px 10px}@media (hover:hover) and (pointer:fine){.tabulator-print-table .tabulator-print-table-group:hover{background-color:rgba(0,0,0,.1);cursor:pointer}}.tabulator-print-table .tabulator-print-table-group.tabulator-group-visible .tabulator-arrow{border-bottom:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #3759d7;margin-right:10px}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-1 td{padding-left:30px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-2 td{padding-left:50px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-3 td{padding-left:70px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-4 td{padding-left:90px!important}.tabulator-print-table .tabulator-print-table-group.tabulator-group-level-5 td{padding-left:110px!important}.tabulator-print-table .tabulator-print-table-group .tabulator-group-toggle{display:inline-block}.tabulator-print-table .tabulator-print-table-group .tabulator-arrow{border-bottom:6px solid transparent;border-left:6px solid #3759d7;border-right:0;border-top:6px solid transparent;display:inline-block;height:0;margin-right:16px;vertical-align:middle;width:0}.tabulator-print-table .tabulator-print-table-group span{color:#d00;margin-left:10px}.tabulator-print-table .tabulator-data-tree-control{align-items:center;background:rgba(0,0,0,.1);border:1px solid #333;border-radius:2px;display:inline-flex;height:11px;justify-content:center;margin-right:5px;overflow:hidden;vertical-align:middle;width:11px}@media (hover:hover) and (pointer:fine){.tabulator-print-table .tabulator-data-tree-control:hover{background:rgba(0,0,0,.2);cursor:pointer}}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse{background:transparent;display:inline-block;height:7px;position:relative;width:1px}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-collapse:after{background:#333;content:"";height:1px;left:-3px;position:absolute;top:3px;width:7px}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand{background:#333;display:inline-block;height:7px;position:relative;width:1px}.tabulator-print-table .tabulator-data-tree-control .tabulator-data-tree-control-expand:after{background:#333;content:"";height:1px;left:-3px;position:absolute;top:3px;width:7px}.tabulator .tabulator-header{border-bottom:3px solid #3759d7;font-size:1.1em;margin-bottom:4px;padding-left:10px}.tabulator .tabulator-header .tabulator-col{background-color:#fff;border-right:2px solid #fff}.tabulator .tabulator-header .tabulator-col:first-child{padding-left:10px}.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title .tabulator-title-editor{border:1px solid #3759d7;color:#3759d7;font-size:1em}.tabulator .tabulator-header .tabulator-col.tabulator-col-group .tabulator-col-group-cols{border-top:2px solid #3759d7}.tabulator .tabulator-header .tabulator-frozen.tabulator-frozen-left{padding-left:10px}.tabulator .tabulator-header .tabulator-calcs-holder{border-top:2px solid #3759d7!important}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row{padding-left:0!important}.tabulator .tabulator-header .tabulator-calcs-holder .tabulator-row .tabulator-cell{background:none}.tabulator .tabulator-tableholder .tabulator-placeholder span{color:#3759d7}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-top{border-bottom:2px solid #3759d7}.tabulator .tabulator-tableholder .tabulator-table .tabulator-row.tabulator-calcs.tabulator-calcs-bottom{border-top:2px solid #3759d7}.tabulator .tabulator-footer .tabulator-calcs-holder{border-bottom:2px solid #3759d7!important;border-top:3px solid #3759d7!important}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row{background:#fff!important}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-cell{background:none}.tabulator .tabulator-footer .tabulator-calcs-holder .tabulator-row .tabulator-cell:first-child{border-left:10px solid transparent}.tabulator .tabulator-footer .tabulator-calcs-holder:only-child{border-bottom:none!important}.tabulator .tabulator-footer .tabulator-spreadsheet-tabs .tabulator-spreadsheet-tab{border-color:#aaa;color:#333;font-weight:400}.tabulator .tabulator-footer .tabulator-spreadsheet-tabs .tabulator-spreadsheet-tab.tabulator-spreadsheet-tab-active{color:#3759d7;font-weight:700}.tabulator-row{margin-bottom:2px}.tabulator-row .tabulator-cell:first-child{border-left:10px solid #3759d7}.tabulator-row .tabulator-cell.tabulator-row-header{background-color:#3759d7;color:#fff}.tabulator-row:nth-child(2n){background-color:#627ce0}.tabulator-row:nth-child(2n) .tabulator-cell{background-color:#fff}.tabulator-row:nth-child(2n) .tabulator-cell:first-child{border-left:10px solid #627ce0}.tabulator-row:nth-child(2n) .tabulator-cell.tabulator-row-header{background-color:#627ce0}@media (hover:hover) and (pointer:fine){.tabulator-row.tabulator-selectable:hover{cursor:pointer}.tabulator-row.tabulator-selectable:hover .tabulator-cell{background-color:#bbb}}.tabulator-row.tabulator-selected .tabulator-cell{background-color:#9abcea}@media (hover:hover) and (pointer:fine){.tabulator-row.tabulator-selected:hover .tabulator-cell{background-color:#769bcc;cursor:pointer}}.tabulator-row.tabulator-moving{pointer-events:none!important}.tabulator-row .tabulator-cell{background-color:#f3f3f3;border-right:2px solid #fff;padding:6px 4px}.tabulator-row.tabulator-group{background:#8ca0e8;border-bottom:2px solid #3759d7;border-right:none;border-top:2px solid #3759d7;margin-bottom:2px;min-width:100%}.tabulator-row.tabulator-group span{color:#3759d7}.tabulator-edit-select-list{border:1px solid #1d68cd}.tabulator-print-table .tabulator-print-table-group{background:#8ca0e8;border-bottom:2px solid #3759d7;border-top:2px solid #3759d7;margin-bottom:2px}.tabulator-print-table .tabulator-print-table-group span{color:#3759d7}
/*# sourceMappingURL=tabulator_modern.min.css.map */
`;
