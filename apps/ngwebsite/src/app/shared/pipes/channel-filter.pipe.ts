import { Pipe, PipeTransform } from '@angular/core';
import { Channel } from '../models/api-list.model';

interface ApiArguments {
  company: string;
  currentCategory: string;
  category: string;
}

@Pipe({
  name: 'channelFilter'
})
export class ChannelFilterPipe implements PipeTransform {

  transform(value: Array<Channel>, args?: ApiArguments): any {

    if (args.company) {
      return value.filter(v => {
        return v.company.slug === args.company;
      });
    }

    return value;
  }

}
