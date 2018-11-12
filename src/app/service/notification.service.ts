import { Injectable } from '@angular/core';
import swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

constructor() { }

  success(message: any) {
    const toast = swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000
    });

    toast({
      type: 'success',
      title: message
    });
  }

  error(message: any) {
    const toast = swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000
    });

    toast({
      type: 'error',
      title: message
    });
  }

  warning(message: any) {
    const toast = swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000
    });

    toast({
      type: 'warning',
      title: message
    });
  }

  info(message: any) {
    const toast = swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000
    });

    toast({
      type: 'info',
      title: message
    });
  }

  question(message: any) {
    const toast = swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000
    });

    toast({
      type: 'question',
      title: message
    });
  }

}
