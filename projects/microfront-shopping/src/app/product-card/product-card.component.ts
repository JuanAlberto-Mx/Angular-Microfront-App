import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonsLibrariesService } from '@commons-libraries';
import { IProductCard } from '../models/product-card.interface';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule]
})
export class ProductCardComponent {

  @Input() product?: IProductCard;

  constructor(private _commonsLibrariesService: CommonsLibrariesService) {

  }

  clickCard(): void {
    this._commonsLibrariesService.sendData({
      name: this.product!.name,
      price: this.product!.price,
    });
  }
}
