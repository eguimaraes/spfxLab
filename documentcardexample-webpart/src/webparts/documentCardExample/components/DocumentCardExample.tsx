import * as React from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
import styles from './DocumentCardExample.module.scss';
import { IDocumentCardExampleProps } from './IDocumentCardExampleProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class DocumentCardExample extends React.Component < IDocumentCardExampleProps, {} > {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: String(require('./document-previewuni.png')),
          iconSrc: String(require('./icon-ppt.png')),
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };

    return (
      <DocumentCard onClickHref='https://github.com/eguimaraes'>
        <DocumentCardPreview {...previewProps} />
        <DocumentCardTitle title='Teste de Componente do SharePoint ExP Moderna' />
        <DocumentCardActivity
          activity='Created Feb 05, 2020'
          people={
            [
              { name: 'Ed Guimaraes', profileImageSrc: String(require('./ed.png')) }
            ]
          }
        />
      </DocumentCard>
    );
  }
}
