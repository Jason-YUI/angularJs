//根模块
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Directive } from '@angular/core';
@NgModule({
    imports: [BrowserModule],
    providers: [Logger],
    declarations: [ AppComponent ],
    exports:      [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

@Directive({
    outputs: ['click: myClick']
})

export class AppModule{ }