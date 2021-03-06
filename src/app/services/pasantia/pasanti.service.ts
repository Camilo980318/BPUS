import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Pasantia } from '../../models/Pasantia';
import { URL_SERVICES } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs/internal/observable/throwError';
import { PasantiaAdmin } from '../../models/PasantiaAdmin';

@Injectable({
  providedIn: 'root'
})
export class PasantiService {

  _id: string;

  constructor(public http: HttpClient, public router: Router) { }

  getSolicitudes() {

    let token = localStorage.getItem('token');
    let url = `${URL_SERVICES}/pasantia?token=${token}`;

    return this.http.get(url);

  }

  getPasantia(id: string) {

    let token = localStorage.getItem('token');
    let url = `${URL_SERVICES}/pasantia/${id}?token=${token}`;

    return this.http.get(url);

  }


  postSolicitud(id: String, solicitud: Pasantia) {

    let token = localStorage.getItem('token');
    let url = `${URL_SERVICES}/pasantia/${id}?token=${token}`;

    return this.http.post(url, solicitud).pipe(map((resp: any) => {

      if (resp.ok == true) {

        Swal.fire({
          title: '¡Bien Hecho!',
          html: `Su solicitud fue exitosa, el radicado de su solicitud es: <b> ${resp.solicitudGuardada._id}</b>. <br> <center> Por favor vuelva a Iniciar Sesión </center>`,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/login'])
        });
      }

      return true;

    }), catchError((err) => {

      Swal.fire({
        title: '¡Error!',
        text: err.error.mensaje,
        icon: 'error',
      });

      return throwError(err);

    }));

  }

  putSolicitud(id: string, pasantia: any) {

    let token = localStorage.getItem('token');
    let url = `${URL_SERVICES}/pasantia/${id}?token=${token}`;

    return this.http.put(url, pasantia).pipe(map((resp: any) => {

      if (resp.ok == true) {

        Swal.fire({
          title: '¡Bien Hecho!',
          text: `Se ha actualizado correctamente la solicitud`,
          icon: 'success'
        }).then(() => {
          location.reload();
        });
      }

      return true;

    }), catchError((err) => {

      Swal.fire({
        title: '¡Error!',
        text: err.error.mensaje,
        icon: 'error',
      });

      return throwError(err);
    }));
  }


  postDocumentoPropuesta(idEstudiante: string, documento_propuesta: FormData) {

    let token = localStorage.getItem('token')
    let url = `${URL_SERVICES}/upload_pasantia/${idEstudiante}?token=${token}`;

    return this.http.put(url, documento_propuesta).pipe(map((resp: any) => {

      if (resp.ok == true) {

        Swal.fire({
          title: '¡Bien Hecho!',
          text: `Se ha enviado correctamente el documento`,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/mi-modalidad'])
        });
      }
      return true;
    }), catchError((err) => {

      Swal.fire({
        title: '¡Error!',
        text: err.error.mensaje,
        icon: 'error',
      });

      return throwError(err);
    }));

  }


  postDocumentoInf7(idEstudiante: string, documento_informe7: FormData) {

    let token = localStorage.getItem('token')
    let url = `${URL_SERVICES}/upload_pasantia/${idEstudiante}?token=${token}`;

    return this.http.put(url, documento_informe7).pipe(map((resp: any) => {

      if (resp.ok == true) {

        Swal.fire({
          title: '¡Bien Hecho!',
          text: `Se ha enviado correctamente el documento`,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/mi-modalidad'])
        });
      }
      return true;
    }), catchError((err) => {

      Swal.fire({
        title: '¡Error!',
        text: err.error.mensaje,
        icon: 'error',
      });

      return throwError(err);
    }));

  }


  postDocumentoInf14(idEstudiante: string, documento_informe14: FormData) {

    let token = localStorage.getItem('token')
    let url = `${URL_SERVICES}/upload_pasantia/${idEstudiante}?token=${token}`;

    return this.http.put(url, documento_informe14).pipe(map((resp: any) => {

      if (resp.ok == true) {

        Swal.fire({
          title: '¡Bien Hecho!',
          text: `Se ha enviado correctamente el documento`,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/mi-modalidad'])
        });
      }
      return true;
    }), catchError((err) => {

      Swal.fire({
        title: '¡Error!',
        text: err.error.mensaje,
        icon: 'error',
      });

      return throwError(err);
    }));

  }

  postDocumentoInfFinal(idEstudiante: string, documento_informeFinal: FormData) {

    let token = localStorage.getItem('token')
    let url = `${URL_SERVICES}/upload_pasantia/${idEstudiante}?token=${token}`;

    return this.http.put(url, documento_informeFinal).pipe(map((resp: any) => {

      if (resp.ok == true) {

        Swal.fire({
          title: '¡Bien Hecho!',
          text: `Se ha enviado correctamente el documento`,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/mi-modalidad'])
        });
      }
      return true;
    }), catchError((err) => {

      Swal.fire({
        title: '¡Error!',
        text: err.error.mensaje,
        icon: 'error',
      });

      return throwError(err);
    }));

  }


}
