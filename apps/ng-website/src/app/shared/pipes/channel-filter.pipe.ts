import { Pipe, PipeTransform } from '@angular/core';
import { Channel } from '../models/api-list.model';
import { ApiChannelFilterPipeArgs } from '../models/api-media-aggregator/api-media-aggregator.model';

@Pipe({
  name: 'channelFilter'
})
export class ChannelFilterPipe implements PipeTransform {

  transform(value: Array<Channel>, args?: ApiChannelFilterPipeArgs): any {

    if (args && args.company) {
      return value.filter(v => {
        return v.company.slug === args.company;
      });
    }

    return value;
  }

}
