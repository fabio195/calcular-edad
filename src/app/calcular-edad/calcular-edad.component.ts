import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calcular-edad',
  templateUrl: './calcular-edad.component.html',
  styleUrls: ['./calcular-edad.component.css']
})
export class CalcularEdadComponent implements OnInit {

  hoy = new Date();
  ciudad: String = 'Mendoza';
  copyright: string = '© Fabio Muñoz ';

  constructor() { }

  ngOnInit() {
  }

  calcularEdad(fechaNacimiento) {
    var fechaNacio: any = new Date(Date.parse(fechaNacimiento));
    var hoy: any = new Date();
    var tiempoPasado = hoy - fechaNacio; 
    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var months = days * 30.416666666666668;
    var years = months * 12;
    var anios = Math.floor(tiempoPasado / years);
    tiempoPasado = tiempoPasado - (anios * years);
    var meses = Math.floor(tiempoPasado / months)
    tiempoPasado = tiempoPasado - (meses * months);
    var dias = Math.floor(tiempoPasado / days)
    var edadPaciente;
    if (anios === 1 && meses === 1 && dias === 1) {
        edadPaciente = anios + ' año, ' + meses + ' mes, ' + dias + ' dia'
    } else {
      if (anios != 1 && meses === 1 && dias === 1) {
        edadPaciente = anios + ' años, ' + meses + ' mes, ' + dias + ' dia'
      } else {
        if (anios != 1 && meses != 1 && dias === 1) {
          edadPaciente = anios + ' años, ' + meses + ' meses, ' + dias + ' dia'
        } else {
          if (anios === 1 && meses != 1 && dias === 1) {
            edadPaciente = anios + ' año, ' + meses + ' meses, ' + dias + ' dia'
          } else {
            if (anios === 1 && meses != 1 && dias != 1) {
              edadPaciente = anios + ' año, ' + meses + ' meses, ' + dias + ' dias'
            } else {
              if (anios === 1 && meses === 1 && dias != 1) {
                edadPaciente = anios + ' año, ' + meses + ' mes, ' + dias + ' dias'
              } else {
                edadPaciente = anios + ' años, ' + meses + ' meses, ' + dias + ' dias'
            } 
          }
          }
        }
      }
    }
    return edadPaciente;
  }

}
