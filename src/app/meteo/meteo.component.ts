import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MeteoService } from '../services/meteo/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  data!:any;
  form!: FormGroup;
  constructor(
    private _service: MeteoService
  ) { }

  async ngOnInit(): Promise<void> {
    this.form = new FormGroup ({
      city: new FormControl('',Validators.compose ([
        Validators.required,
        Validators.minLength(3)
      ]))
    });
 
  }

  async search() {
    const data = await this._service.getMeteo(this.form.value.city);
    this.data = data;
  }
}