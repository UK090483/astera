import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
export default (S, context) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .icon(AiOutlineSetting)
        .child(
          S.list()
            .id('settings')
            .title('Settings')
            .items([
              S.documentListItem().schemaType('baseConfig').title('Base Settings').id('baseConfig'),
              S.documentListItem().schemaType('menuConfig').title('Navigation').id('menuConfig'),
              S.documentListItem().schemaType('seoConfig').title('Seo').id('seoConfig'),
            ])
        ),

      S.listItem().title('Page').child(S.documentTypeList('page')),
      S.listItem().title('News').child(S.documentTypeList('news')),
      orderableDocumentListDeskItem({
        type: 'person',
        title: 'Person',
        icon: BsPersonCircle,
        S,
        context,
      }),
      // S.listItem().title('Person').child(S.documentTypeList('person')),
    ])
