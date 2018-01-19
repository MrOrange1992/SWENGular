import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Pipe({name: 'sanitizeUrlPipe'})
export class SanitizeUrlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {
  }
  transform(v): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(v);
  }
}
