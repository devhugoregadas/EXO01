import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto/crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  data!:any;

  constructor(
    private _service: CryptoService
  ) { }

  async ngOnInit(): Promise<void> {
    this.data = await this._service.getCrypto();
  }

}
