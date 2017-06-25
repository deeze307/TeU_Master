// Global state (used for theming)
import { AppState } from './app.global';

// Home Page
import { HomePage } from '../pages/_home/home';

// Theme
import { ThemingPage } from '../pages/theming/theming';

// Contacto
import { ContactPage} from '../pages/contact/contact';

// Acerca de

import { AboutPage } from '../pages/about/about';

// Ofertas Laborales

import { OfertasLaborales } from '../pages/ofertaslaborales/ofertaslaborales';
import { OfertasLaboralesDetalle} from '../pages/ofertaslaborales/ofertaslaborales-detalle';

// Consejos

import { Consejos } from '../pages/consejos/consejos';
import { ConsejosDetalle } from '../pages/consejos/consejos-detalle';

// Sorteos

import { Sorteos } from '../pages/sorteos/sorteos';

// Ofrecimientos

import { Ofrecimientos } from '../pages/ofrecimientos/ofrecimientos';

// Providers
import { TeuServiceProvider } from '../providers/teu-service/teu-service';

// Ionic native providers
import { CardIO } from '@ionic-native/card-io';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Components
import { Timer } from '../components/countdown-timer/timer';
import { TimerProgress } from '../components/timer-progress/timer-progress';
import { ExpandableHeader } from '../components/expandable-header/expandable-header';
import { TypingEffect } from '../components/typing-effect/typing-effect';
import { FlashCardComponent } from '../components/flash-card/flash-card';

// Pipes
import { MomentPipe } from '../pipes/moment.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { OrderByPipe } from '../pipes/orderby.pipe';
import { ShortenStringPipe } from '../pipes/shorten.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

// Modules
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

export const Modules = [
    SwingModule,
    BrowserModule,
    HttpModule,
];

export const Pages = [
    // Home
    HomePage,

    // Theming
    ThemingPage,

    // Contacto
    ContactPage,

    //Acerca de
    AboutPage,

    // Ofertas Laborales
    OfertasLaborales,
    OfertasLaboralesDetalle,

    // Consejos
    Consejos,
    ConsejosDetalle,

    // Sorteos
    Sorteos,

    // Ofrecimientos
    Ofrecimientos,

];

export const Pipes = [
    TemperaturePipe, MomentPipe, OrderByPipe, CapitalizePipe, ShortenStringPipe
];

export const Providers = [
    AppState,
    TeuServiceProvider,

    // Ionic native specific providers
    BarcodeScanner,
    Camera,
    Diagnostic,
    Geolocation,
    CardIO,
    StatusBar,
    SplashScreen,
];

export const Components = [
    FlashCardComponent,
    TimerProgress,
    ExpandableHeader
];

export const Directives = [
    SlidingDrawer,
    Timer,
    TypingEffect,
    Autosize,
];