import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { injectPublicKey } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';

@Component({
  selector: 'primer-reto-balance-section',
  imports: [MatTableModule, MatCard, MatButton],
  standalone: true,
  template: `
    <mat-card class="w-[400px] px-4 py-8">
      <h2 class="text-center text-3xl mb-4">Consulta de saldo</h2>

      @if (!account()) {
        <p class="text-center">Conecta tu wallet para ver tu saldo actual.</p>
      } @else {
        <div class="absolute top-4 left-4 flex justify-center items-center gap-2">
          <img [src]="account()?.info?.image" class="w-16 h-16" />
          <p class="text-5xl font-bold">{{ account()?.balance }}</p>
        </div>

        <footer class="flex justify-center items-center gap-2">
          <button (click)="onTransfer()" mat-raised-button color="primary">
            Transferir
          </button>
        </footer>
      }
    </mat-card>
    
  `,
})
export class BalanceSectionComponent {
  private readonly _matDialog = inject(MatDialog);
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _publicKey = injectPublicKey();

  readonly account = computedAsync(() =>
    this._shyftApiService
        .getAccount(
            this._publicKey()?.toBase58()),
  );

}