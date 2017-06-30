import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { CloudSettings,CloudModule} from '@ionic/cloud-angular';
import { MyApp } from './app.component';

const cloudSettings: CloudSettings = {
    core: {
        app_id:'47f29374'
    },
    push: {
        sender_id:'410950190174',
        pluginConfig:{
            ios:{
                'badge':true,
                'sound':true
            },
            android:{
                iconColor:'#343434',
                forceShow:true
            }
        }
    }
};

import { Modules, Pages, Directives, Pipes, Providers, Components } from './app.imports';

@NgModule({
    declarations: [
    // App Core
      MyApp,
      Pages,
      Components,
      Directives,
      Pipes
    ],
    imports: [
      Modules,
      IonicModule.forRoot(MyApp),
      CloudModule.forRoot(cloudSettings)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      Pages
    ],
    providers: [Providers, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
