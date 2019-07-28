import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { KPIService } from './services/kpi.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import * as numeral from 'numeral'

@Component({
    selector: 'kpi-chart',
    template: `
    
    <div class="container-fluid" #container>            
    </div>
    <div *ngIf="kpi" class="chart-action">
        <button type="button" class="btn btn-danger btn-lg close-action" (click)="close()">Close</button>
    </div>
  `
})

export class KPIChartComponent implements OnInit {

    kpi;

    chart: typeof Highcharts = Highcharts;

    @ViewChild('container', { static: false }) container: ElementRef;

    formatter: Highcharts.TooltipFormatterCallbackFunction =
        function () {
            return '<b>' + numeral(this.y).format('0a') + '</b>'
        }

    chartOptions: Highcharts.Options = {
        chart: {
            type: 'line'
        },
        series: [{
            data: [0],
            type: 'line'
        }],
        xAxis: {
            categories: ["0"]
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: this.formatter
        }
    };

    constructor(
        private kpiService: KPIService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.route.params.subscribe(params => {

            if (params.id) {
                this.kpiService.evaluate(params.id).subscribe((kpi: any) => {
                    this.kpi = kpi;

                    // after getting the KPI list, create the chart instance
                    let div = document.createElement("div");
                    this.container.nativeElement.appendChild(div);

                    if (!!this.chartOptions.chart) {
                        this.chartOptions.chart['renderTo'] = div;
                    }
                    else {
                        this.chartOptions.chart = {
                            'renderTo': div
                        }
                    }

                    let chart = new Highcharts.Chart(this.chartOptions);

                    this.configureChart(chart);
                })
            }
        })
    }

    /**
     * configure chart instance by extracting the x-axis (year) and y-axis (value) data from KPI list
     * @param chart: chart instance to be configured
     */
    configureChart(chart) {
        if (this.kpi) {
            let title: Highcharts.TitleOptions = {
                text: this.kpi.name + ' Chart Results'
            }

            let options: Highcharts.Options = {
                series: [{
                    data: this.kpi.values.map(x => x.value),
                    type: 'line',
                }],
                xAxis: {
                    categories: this.kpi.values.map(x => x.year),
                },
            };

            chart.title.update(title, true);
            chart.update(options, true);
        }
    }

    close() {
        this.router.navigate(['/kpi-list']);
    }
}
