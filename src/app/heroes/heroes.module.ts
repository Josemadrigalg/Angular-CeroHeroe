import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations : [ //Qué componentes lo forman
        HeroeComponent,
        ListadoComponent
    ],
    exports : [
        ListadoComponent //qué queremos que se vea fuera de aquí
    ],
    imports : [
        CommonModule //
    ]
})

export class HeroesModule {}
