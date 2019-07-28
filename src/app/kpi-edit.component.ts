import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from './services/account.service';
import { KPIService } from './services/kpi.service';
import { AlertifyService } from './services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragMove } from '@angular/cdk/drag-drop';
import { ViewportRuler } from "@angular/cdk/overlay";
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
    selector: 'kpi-editor',
    template: `            

    <div class="container-fluid">
    <div class="name">
        <input #nameInput="ngModel" (change)="nameChanged()" class="form-control form-control-lg" type="text" [(ngModel)]="name"
            placeholder="KPI Name" required>
        <div class="validation-error" *ngIf="nameInput.dirty">
            <span *ngIf="nameInput.errors?.required">Name is required</span>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Financial Accounts
                </div>
                <div class="card-body">
                    <dx-tree-view [createChildren]="createChildren" dataStructure="plain" rootValue=""
                        itemTemplate="itemTemplate">
                        <div *dxTemplate="let itemObj of 'itemTemplate'">
                            <div draggable="true" (dragstart)="drag($event)" id="{{itemObj.id}}">
                                <i class="fa fa-credit-card"></i> {{itemObj.text}}
                            </div>
                        </div>
                    </dx-tree-view>
                </div>
            </div>
            <div class="card" style="margin-top:10px;">
                <div class="card-header">
                    Operators
                </div>
                <div class="card-body card-operators">
                    <span class="operator" draggable="true" id="+" (dragstart)="drag($event)">
                        +
                    </span>
                    <span class="operator" draggable="true" id="-" (dragstart)="drag($event)">
                        -
                    </span>
                    <span class="operator" draggable="true" id="*" (dragstart)="drag($event)">
                        *
                    </span>
                    <span class="operator" draggable="true" id="/" (dragstart)="drag($event)">
                        /
                    </span>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <div class="card card-formula">
                <div class="card-header">
                    KPI Formula Definition
                </div>
                <div class="card-body drop-container">
                    <div>
                        <div class="drop" (drop)="drop($event)" (dragover)="allowDrop($event)" cdkDropListGroup #dropListGorup>
                            <div cdkDropList [cdkDropListEnterPredicate]="dropListEnterPredicate" (cdkDropListDropped)="dropListDropped($event)"></div>
                            <div cdkDropList *ngFor="let item of items" [contextMenu]="deleteMenu" [contextMenuSubject]="item"
                                [cdkDropListEnterPredicate]="dropListEnterPredicate" (cdkDropListDropped)="dropListDropped($event)">
                            <div cdkDrag class="token" draggable="true" (dragstart)="formulaDrag($event)" [class.operator]="isOperator(item.name)" 
                                (cdkDragMoved)="dragMoved($event);">{{item.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <input type="button" value="Cancel" class="btn btn-secondary cancel" (click)="cancel()" />
                    <input type="button" value="Save" [disabled]="!submitValid" class="btn btn-primary"
                        (click)="save()" />
                </div>
            </div>
        </div>
    </div>
</div>    

<context-menu>
  <ng-template class="dropdown-menu normal-menu" contextMenuItem (execute)="deleteToken($event.item)">
    <a class="dropdown-item">
        Delete
    </a>
  </ng-template>  
</context-menu>
    
  `
})
export class KPIEditComponent implements OnInit {

    @ViewChild(CdkDropListGroup, { static: false }) listGroup: CdkDropListGroup<CdkDropList>;
    @ViewChild(CdkDropList, { static: false }) placeholder: CdkDropList;
    @ViewChild(ContextMenuComponent, { static: false }) public deleteMenu: ContextMenuComponent;

    public target: CdkDropList;
    public targetIndex: number;
    public source: CdkDropList;
    public sourceIndex: number;
    public dragIndex: number;
    public activeContainer;

    createChildren: any;

    modelId;

    items = [];

    name;

    submitValid = false;

    constructor(
        private accountService: AccountService,
        private kpiService: KPIService,
        private alertify: AlertifyService,
        private router: Router,
        private route: ActivatedRoute,
        private viewportRuler: ViewportRuler) {
        this.createChildren = (parent) => {
            let parentId = parent ? parent.itemData.id : "";
            return this.accountService.children(parentId).toPromise();
        }

        this.target = null;
        this.source = null;
    }

    ngAfterViewInit() {
        let phElement = this.placeholder.element.nativeElement;

        phElement.style.display = 'none';
        phElement.parentElement.removeChild(phElement);
    }

    dropInList(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {

            if (params.id) {
                this.kpiService.find(params.id).subscribe((item: any) => {
                    this.modelId = params.id;
                    this.name = item.name;
                    this.items = item.tokens;
                })
            }
        })
    }

    save() {
        if (!this.name) {
            this.alertify.warning('KPI must have a name');
            return;
        }

        let model = {
            kpiId: this.modelId,
            name: this.name,
            formula: this.items.map(x => this.isOperator(x.name) ? x.name : x.id).join(';')
        }

        if (this.modelId) {
            this.kpiService.update(model).subscribe(x => {
                this.alertify.success('KPI updated successfully');
                this.router.navigate(['/kpi-list']);
            }, error => {
                this.alertify.error('Error updating KPI, please contact support');
            })
        }
        else {
            this.kpiService.add(model).subscribe(x => {
                this.alertify.success('KPI added successfully');
                this.router.navigate(['/kpi-list']);
            }, error => {
                this.alertify.error('Error saving KPI, please contact support');
            })
        }

    }

    nameChanged() {
        this.submitValid = this.validateSubmit();
    }

    cancel() {
        this.router.navigate(['/kpi-list']);
    }

    drag(event) {
        let div = event.target;
        let token = {
            'name': div.innerText.trim(),
            'id': this.isOperator(div.innerText.trim()) ? this.generateId() : div.id
        }
        event.dataTransfer.setData("token", JSON.stringify(token));
    }

    formulaDrag(event) {
        let div = event.target;
        let token = {
            'name': div.innerText.trim(),
            'id': div.id
        }
        event.dataTransfer.setData("token", JSON.stringify(token));
    }

    deleteToken(event) {
        this.items = this.items.filter(x => x.id !== event.id);
        this.submitValid = this.validateSubmit();
    }

    drop(event) {
        event.preventDefault();
        var data = JSON.parse(event.dataTransfer.getData("token"));
        if (this.validateFormula(data)) {
            this.items.push(data);
        } else {
            this.alertify.warning('Invalid formula, try again!');
        }

        this.submitValid = this.validateSubmit();
    }

    validateSubmit() {

        // Invalid formula if we have less than 3 items
        if (this.items.length < 3) {
            return false;
        }

        // first and last items cannot be operators
        if (this.isOperator(this.items[0].name) || this.isOperator(this.items[this.items.length - 1].name)) {
            return false;
        }

        // even-indexed items must be accounts and odd-indexed items must be operators
        for (var i = 1; i < this.items.length - 1; i++) {
            const isOperator = this.isOperator(this.items[i].name);

            if (i % 2 === 0 && isOperator || i % 2 !== 0 && !isOperator) {
                return false;
            }
        }

        return true;
    }

    /**
     * validate drag operation, consecutive items cannot be of same type 
     * @param data: token being dragged to formula area
     */
    validateFormula(data) {
        if (this.items.length == 0 && this.isOperator(data.name)) {
            return false;
        }
        if (this.items.length == 0 && !this.isOperator(data.name)) {
            return true;
        } else {
            let lastItem = this.items[this.items.length - 1].name;
            if (this.isOperator(data.name) && this.isOperator(lastItem)) {
                return false;
            }
            if (!this.isOperator(data.name) && !this.isOperator(lastItem)) {
                return false;
            }
            return true;
        }
    }

    allowDrop(event) {
        event.preventDefault();
    }

    isOperator(token) {
        return ['+', '-', '*', '/'].includes(token);
    }

    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    dragMoved(e: CdkDragMove) {
        let point = this.getPointerPositionOnPage(e.event);

        this.listGroup._items.forEach(dropList => {
            if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
                this.activeContainer = dropList;
                return;
            }
        });
    }

    dropListDropped() {
        if (!this.target)
            return;

        let phElement = this.placeholder.element.nativeElement;
        let parent = phElement.parentElement;

        phElement.style.display = 'none';

        parent.removeChild(phElement);
        parent.appendChild(phElement);
        parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

        this.target = null;
        this.source = null;

        if (this.sourceIndex != this.targetIndex)
            moveItemInArray(this.items, this.sourceIndex, this.targetIndex);

        this.submitValid = this.validateSubmit();
    }

    dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
        if (drop == this.placeholder)
            return true;

        if (drop != this.activeContainer)
            return false;

        let phElement = this.placeholder.element.nativeElement;
        let sourceElement = drag.dropContainer.element.nativeElement;
        let dropElement = drop.element.nativeElement;

        let dragIndex = __indexOf(dropElement.parentElement.children, (this.source ? phElement : sourceElement));
        let dropIndex = __indexOf(dropElement.parentElement.children, dropElement);

        if (!this.source) {
            this.sourceIndex = dragIndex;
            this.source = drag.dropContainer;

            phElement.style.width = sourceElement.clientWidth + 'px';
            phElement.style.height = sourceElement.clientHeight + 'px';

            sourceElement.parentElement.removeChild(sourceElement);
        }

        this.targetIndex = dropIndex;
        this.target = drop;

        phElement.style.display = '';
        dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex
            ? dropElement.nextSibling : dropElement));

        this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
        return false;
    }

    /** Determines the point of the page that was touched by the user. */
    getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();

        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
}

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
};

/** Determines whether an event is a touch event. */
function __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    return event.type.startsWith('touch');
}

function __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
    const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
    return y >= top && y <= bottom && x >= left && x <= right;
}