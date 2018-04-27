const BASE_URL = 'https://sparkvision.file.core.windows.net/sparkvision';
const SAS = '?sv=2017-07-29&ss=f&srt=sco&sp=rl&se=2018-05-04T22:08:35Z&st=2018-04-27T14:08:35Z&spr=https&sig=V7pQIuOaQ2CCW2wAPpLhSG0FZdByuz1lBhAxFzcqfhA%3D';

export const AZURE_FILE_STORAGE = {
  BASE_URL,
  SAS
}

export const PRODUCTS_XML_URL = BASE_URL + '/products.xml' + SAS
