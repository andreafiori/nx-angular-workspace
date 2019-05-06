interface Photo {
  id: number;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isprimary: number;
  isfriend: number;
  isfamily: number;
  tags: string;
  url_q: string;
}

export interface ApiRecordset {
  photos: {
    id: number;
    page: string;
    perpage: string;
    total: string;
    photo: Photo[];
  }
}