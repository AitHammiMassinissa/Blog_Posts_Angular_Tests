import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: string): string {
    const withoutTags = value.replace(/<[^>]*>/g, '');
    const withoutNbsp = withoutTags.replace(/&nbsp;/g, ' ');
    const withoutApostrophe = withoutNbsp.replace(/&#8217;/g, "'");
    return withoutApostrophe;
  }

}


